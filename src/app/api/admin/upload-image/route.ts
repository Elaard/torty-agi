import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
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

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Save to public/images directory
    const publicPath = join(process.cwd(), 'public', 'images', uniqueFileName);
    await writeFile(publicPath, buffer);

    // Generate the public URL for the uploaded image
    const imageUrl = `/images/${uniqueFileName}`;

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
