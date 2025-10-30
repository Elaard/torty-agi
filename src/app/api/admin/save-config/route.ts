import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { revalidatePath } from 'next/cache';
import { PageData } from '@/data/get-page-data';
import { routes } from '@/utils/routes';

export async function POST(request: NextRequest) {
  try {
    // Get the updated page data from the request
    const pageData: PageData = await request.json();

    // Convert page data to JSON string
    const jsonData = JSON.stringify(pageData, null, 2);

    // Write to local file
    const filePath = join(process.cwd(), 'src', 'data', 'data.json');
    await writeFile(filePath, jsonData, 'utf-8');

    // Revalidate paths to reflect changes
    revalidatePath(routes.home);
    revalidatePath(routes.adminPanel);
    revalidatePath(routes.oferta);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving config:', error);
    return NextResponse.json(
      { error: 'Failed to save configuration' },
      { status: 500 }
    );
  }
}
