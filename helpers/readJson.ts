import * as fs from 'fs';
import path from 'path';

export async function readJson() {
  const filePath: string = path.join(process.cwd(), 'public', 'mocks', 'shipments.json');
  const data: string = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(data);
}