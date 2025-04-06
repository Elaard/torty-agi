import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { revalidatePath } from 'next/cache';
import { getConfig, PageData } from '@/data/get-page-data';
import { routes } from '@/utils/routes';

export async function POST(request: NextRequest) {
  try {
    // Get the updated page data from the request
    const pageData: PageData = await request.json();

    // Get S3 configuration from environment variables
    const bucket = process.env.AWS_S3_BUCKET;
    const region = process.env.AWS_REGION;
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    // Check if S3 is configured
    if (!bucket || !accessKeyId || !secretAccessKey) {
      console.error('AWS S3 configuration missing');
      return NextResponse.json(
        { error: 'AWS S3 configuration missing' },
        { status: 500 }
      );
    }

    // Create S3 client
    const s3Client = new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    // Convert page data to JSON string
    const jsonData = JSON.stringify(pageData, null, 2);

    // Create put object command
    const putObjectCommand = new PutObjectCommand({
      Bucket: bucket,
      Key: 'data.json',
      Body: jsonData,
      ContentType: 'application/json',
    });

    // Upload to S3
    await s3Client.send(putObjectCommand);
    // Force refresh the config

    await getConfig();

    revalidatePath(routes.home);
    revalidatePath(routes.adminPanel);
    // revalidatePath('/produkty/[id]', 'page')

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving config:', error);
    return NextResponse.json(
      { error: 'Failed to save configuration' },
      { status: 500 }
    );
  }
}