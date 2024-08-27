const fs = require('fs-extra');
const chardet = require('chardet');
const iconv = require('iconv-lite');
const path = require('path');

// Функция для перекодирования файла в UTF-8
const convertFileToUTF8 = (filePath) => {
    const encoding = chardet.detectFileSync(filePath);
    console.log('Current encoding: ' + filePath, encoding);
    if (encoding !== 'UTF-8') {
        const content = fs.readFileSync(filePath);
        const utf8Content = iconv.decode(content, encoding);
        fs.writeFileSync(filePath, utf8Content, {
            encoding: "utf8"
        });
        console.log(`Converted to UTF-8: ${filePath}`);
    }
};

// Функция для рекурсивного обхода всех файлов в папке
const convertDirectory = (dirPath) => {
    fs.readdirSync(dirPath).forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            convertDirectory(fullPath);
        } else if (['.ts', '.html', '.css'].includes(path.extname(file))) {
            convertFileToUTF8(fullPath);
        }
    });
};

// Запуск перекодирования для папки src
const srcDirectory = path.join(process.cwd(), 'src');
convertDirectory(srcDirectory);

console.log('All files in src are converted to UTF-8.');
