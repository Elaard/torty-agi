import { NextRequest, NextResponse } from 'next/server';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
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
    const s3 = new AWS.S3({
      region,
      credentials: new AWS.Credentials(
        accessKeyId,
        secretAccessKey
      )
    });

    // Parse the form data
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Get file extension
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    // Validate file type
    const allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    if (!fileExtension || !allowedTypes.includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed (jpg, jpeg, png, gif, webp)' },
        { status: 400 }
      );
    }

    // Generate a unique file name
    const uniqueFileName = `${uuidv4()}.${fileExtension}`;
    const key = `images/${uniqueFileName}`;

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to S3
    await s3.putObject({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    }).promise();

    // Generate the public URL for the uploaded image
    const imageUrl = `https://${bucket}.s3.${region}.amazonaws.com/${key}`;

    return NextResponse.json({
      success: true,
      imageUrl
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}

// Increase the body size limit for file uploads
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};