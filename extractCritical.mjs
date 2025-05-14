import critical from 'critical';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

critical.generate({
  inline: true,
  base: path.join(__dirname, 'build/'), // Путь к папке сборки
  src: 'public/index.html', // Исходный HTML-файл
  target: {
    html: 'index-critical.html', // Выходной HTML-файл
    css: 'styles-critical.css', // Выходной CSS-файл
  },
  width: 1300,
  height: 900,
}, (err, output) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Critical CSS extracted successfully!');
  }
});
