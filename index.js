const fs = require('fs')

// Объект JavaScript, который вы хотите сохранить в JSON-файле
const person = {
    name: 'Иван',
    age: 30,
    hobbies: ['программирование', 'велоспорт', 'читать книги']
};

// Преобразование объекта в строку JSON
const data = JSON.stringify(person);
// const data1 = JSON.parse(data);

// // Запись строки в файл 'person.json'
// fs.writeFile('cinema.json', data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('JSON файл успешно создан.');
// });


//! HW

// const fs = require('fs')

// function createDirectoryAndFile(filepath) {

//     const newfolder = filepath //something is wrong with newfolder, why?
//     try {
//         if (!fs.existsSyns(dir)) {
//             fs.mkdirSync(dir);
//         }
//     } catch (err) {
//         console.error(err);
//     }


//     fs.open('newfile.txt', 'w',
//     function (err, file) {
//             if (err) throw err;
//             console.log('File was created!');
//         })
// }

// createDirectoryAndFile('.git/test2')  

const createFolder = (nameFile) => {
    fs.mkdir(nameFile, {recursive : true}, error => {
        if(error) console.log('error', error);
        else console.log('good')
    });
}

createFolder('./asd/tor/ww')

// or fs.appendFile() or fs.writeFile() or fs.open()


// Sync vs Async ??


// const fs = require('fs');

// Функция для чтения JSON файла и вывода его содержимого в консоль
function readAndLogJsonFile(filePath) {
    // Асинхронное чтение файла
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }
        // Вывод содержимого файла в консоль
        console.log('Содержимое файла:', data);

        // Дополнительно: преобразование строки в объект и вывод его
        try {
            const jsonData = JSON.parse(data);
            console.log('Объект JSON:', jsonData);
        } catch (parseError) {
            console.error('Ошибка при разборе JSON:', parseError);
        }
    });
}

// // Использование функции
readAndLogJsonFile('cinema.json');