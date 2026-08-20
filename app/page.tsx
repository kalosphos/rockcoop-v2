import fs from 'fs';
import path from 'path';

export default function Page() {
  const htmlPath = path.join(process.cwd(), 'app/content.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
