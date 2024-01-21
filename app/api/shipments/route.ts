import { NextResponse } from 'next/server';
import { readJson } from '@/utils/readJson';

export async function GET() {
  try {
    const jsonData = await readJson();
    return NextResponse.json(jsonData);
  } catch (err) {
    console.error('Error reading or parsing JSON file:', err);
  }
}
