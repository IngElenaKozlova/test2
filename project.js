"use strict"
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const file = require('./helper/logicalFile');

const allowedKeys = [
    { key: 'title', type: 'string' },
    { key: 'genre', type: 'string' },
    { key: 'year', type: 'number'},
    { key: 'director', type: 'string' }]


function validateFilm(film, allowedKeys) {
    const errors = []
    const keys = Object.keys(film);
    allowedKeys.forEach(elem => {
        if (!keys.includes(elem.key)) errors.push({ text: 'film description contains redundant element', key: elem.key })
        if (!(elem.key in film)) errors.push({ text: 'film description is not complete because of missing key', key: elem.key })
        if (!film[elem.key]) errors.push({ text: 'film description is not complete because of missing value', key: elem.key })
        if (typeof film[elem.key] !== elem.type) errors.push({ text: 'type of film value is not correct', key: elem.type })
    })
    return errors
}



const addNewFilm = async (film) => {
    try {
        const errors = validateFilm(film, allowedKeys)

        if (errors.length) {
            return {
                status: 401,
                errors: errors
            }
        }

        film.id = uuidv4();
        const response = await file.readFile('./data/films.json')

        if (response.ok) {
            response.data.push(film)
            return await file.createFile('./data/films.json', response.data);

            //? same as return await file.createFile but... it returns nothing?:  
            // if (res.ok) {
            //     return {ok : true}
            // } else {
            //     return {ok : false}
            // }

        } else {
            return await file.createFile('./data/films.json', [film]), { status: 200, text: "Done" }
        }

        // return {ok : true }
        // return {ok : false }

    } catch (e) {
        return { status: 501, text: "Server error" }
    }

}



const removeFilm = async (id) => {
    try {
        const response = await file.readFile('./data/films.json')

        if (response.ok) {
            const index = response.data.findIndex((elem) => elem.id === id)
            if (index === -1) return { status: 404, text: "Not found" }

            response.data.splice(index, 1)
            return await file.createFile('./data/films.json', response.data), { status: 200, text: "Done" }
        }

    } catch (e) {
        console.log(e)
    }
    
    return {ok : false}
}





const updateFilm = async (film) => {   
    try {
        const response = await file.readFile('./data/films.json')

        if (response.ok) {
            const updatingFilm = response.data.find((elem) => elem.id === film.id)

            if (updatingFilm === undefined) return { status: 404, text: "Film is not found" }
            
            const errors = validateFilm(film, allowedKeys)

            if (errors.length) {
                return {
                    status: 401,
                    errors: errors,
                    filmId: film.id
                }
            }
            
            updatingFilm.title = film.title
            updatingFilm.genre = film.genre
            updatingFilm.year = film.year
            updatingFilm.director = film.director
    
            const res = await file.createFile('./data/films.json', response.data)
            if(res.ok) return { status: 200, text: "Done" }
            else return {status : 501, error : 'Server error'}

        } else {
            return { status: 404, text: "Not found" }
        }

    } catch (e) {
        return { status: 501, text: "Server error" }
    }

}

// updateFilm({"title":"Гладиатор222","genre":"Экшн, Драма","year":2000,"director":"Ридли Скотт","id":"683cd2fc-a579-4c07-a047-e114d3c143da"})


// const res1 = { ok : true, data : [{"id":1,"title":"Побег из Шоушенка","genre":"Драма","year":1994,"director":"Фрэнк Дарабонт"},{"id":2,"title":"Зеленая миля","genre":"Драма, Криминал","year":1999,"director":"Фрэнк Дарабонт"},{"id":3,"title":"Форрест Гамп","genre":"Драма, Романтика","year":1994,"director":"Роберт Земекис"},{"id":4,"title":"Список Шиндлера","genre":"Драма, История","year":1993,"director":"Стивен Спилберг"},{"id":5,"title":"1+1","genre":"Драма, Комедия","year":2011,"director":"Оливье Накаш, Эрик Толедано"},{"id":6,"title":"Начало","genre":"Экшн, Научная фантастика","year":2010,"director":"Кристофер Нолан"},{"id":8,"title":"Игра престолов","genre":"Драма, Фэнтези","year":2011,"director":"Дэвид Бениофф, Д.Б. Вайсс"},{"title":"Гладиатор","genre":"Экшн, Драма","year":2000,"director":"Ридли Скотт","id":"04c76ab0-56bc-41a2-9f0c-e52ae088a352"}]}
// const res2 = { ok : true, data :{ ok : true, data : [{"id":1,"title":"Побег из Шоушенка","genre":"Драма","year":1994,"director":"Фрэнк Дарабонт"},{"id":2,"title":"Зеленая миля","genre":"Драма, Криминал","year":1999,"director":"Фрэнк Дарабонт"},{"id":3,"title":"Форрест Гамп","genre":"Драма, Романтика","year":1994,"director":"Роберт Земекис"},{"id":4,"title":"Список Шиндлера","genre":"Драма, История","year":1993,"director":"Стивен Спилберг"},{"id":5,"title":"1+1","genre":"Драма, Комедия","year":2011,"director":"Оливье Накаш, Эрик Толедано"},{"id":6,"title":"Начало","genre":"Экшн, Научная фантастика","year":2010,"director":"Кристофер Нолан"},{"id":8,"title":"Игра престолов","genre":"Драма, Фэнтези","year":2011,"director":"Дэвид Бениофф, Д.Б. Вайсс"},{"title":"Гладиатор","genre":"Экшн, Драма","year":2000,"director":"Ридли Скотт","id":"04c76ab0-56bc-41a2-9f0c-e52ae088a352"}]}}

// const file = require('./helper/logical')
// const dd = require('./film');
// console.log(file)

// file.readFile('./data/films.json')


//! data/films.json --- HW


// const movies = ["Побег из Шоушенка", "Зеленая миля"]


// const createFolder = (nameFolder) => {
//     fs.mkdir(nameFolder, { recursive: true }, error => {
//         if (error) console.log('error', error);
//         else console.log('Folder data was created')
//     });
// }

// createFolder('./data')


// const createFile = (nameFile) => {
//     // if (!nameFile) {
//     //     fs.writeFile(nameFile, data, (err) => {
//     //         if (err) {
//     //             throw err;
//     //         }
//     //         console.log('JSON was successfully created');
//     //     })
//     // }
//     const film = JSON.stringify({ "id": 9, "title": "Джокер", "genre": "Драма, Триллер", "year": 2019, "director": "Тодд Филлипс" })

//     fs.writeFile(nameFile, film, error => {
//         if (error) {
//             console.log(error)
//             throw error;
//         }
//         console.log('Film was successfully appended to JSON');
//     })
// }

// createFile("./data/films.json")

// function readAndLogJson(filePath) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Ошибка при чтении файла:', err);
//             return;
//         }

//         try {
//             const jsonData = JSON.parse(data);
//         } catch (parseError) {
//             console.error('Ошибка при разборе JSON:', parseError);
//         }
//     });
// }

// readAndLogJson("./data/films.json")

// createFile('./data/films.json')



// [
//     { "id": 1, "title": "Побег из Шоушенка", "genre": "Драма", "year": 1994, "director": "Фрэнк Дарабонт" },
//     { "id": 2, "title": "Зеленая миля", "genre": "Драма, Криминал", "year": 1999, "director": "Фрэнк Дарабонт" },
//     { "id": 3, "title": "Форрест Гамп", "genre": "Драма, Романтика", "year": 1994, "director": "Роберт Земекис" },
//     { "id": 4, "title": "Список Шиндлера", "genre": "Драма, История", "year": 1993, "director": "Стивен Спилберг" },
//     { "id": 5, "title": "1+1", "genre": "Драма, Комедия", "year": 2011, "director": "Оливье Накаш, Эрик Толедано" },
//     { "id": 6, "title": "Начало", "genre": "Экшн, Научная фантастика", "year": 2010, "director": "Кристофер Нолан" },
//     { "id": 7, "title": "Гладиатор", "genre": "Экшн, Драма", "year": 2000, "director": "Ридли Скотт" },
//     { "id": 8, "title": "Игра престолов", "genre": "Драма, Фэнтези", "year": 2011, "director": "Дэвид Бениофф, Д.Б. Вайсс" }, 
//     { "id": 9, "title": "Джокер", "genre": "Драма, Триллер", "year": 2019, "director": "Тодд Филлипс" }
// ]


// films.json is in folder data or not? if not then why not?
// how can I add new film to films.json using addNewFilm ?


// const addNewFilm = (film) => {
//     if (!film.title) return { status: 410, text: "No title" };

//     // film.id = createId();
//     film.id = { v4: uuidv4 }
//     movies.push(film)

//     return { status: 201, text: "Done" }
// }

// addNewFilm({ title: "Побег из Шоушенка", genre: "Драма", year: 1994, director: "Фрэнк Дарабонт" })



// const logicalPromis = async () => {
//     const promise = new Promise(function(resolve, reject) {
//         const data = { ok : false , data : ['word','asa']};
//          if(data.ok) {
//             return resolve(data.data)
//          } else {
//             return reject('error')  
//          }
//       });

//       console.log(promise)



//! ;(async function(){
//     // const res = await addNewFilm({ "title": "1Гладиатор", "genre": "2Экшн, Драма", "year": 2000, "director": "3Ридли Скотт" }) // , ssss : 'ff' 
//!     const res = await removeFilm('e2a763a9-86bd-4b2a-90e6-e021f107aac1')
//!     console.log(res)
//! })();

// ;(function(){

// })();

// ;(function(){

// }());

// ;!function(){

// }();

// ;+function(){

// }();



// removeFilm('037f42e3-6c94-4f0b-9e79-5ea9fdf5b15e')


// const nums = [2,3,12,32,-3,44,12,33,31,42,2,78,-3,12,6];

// console.log(Math.max(...nums))
// console.log(Math.min(...nums))
// console.log(Math.min(2,3,12,32,-3,44,12,33,31,42,2,78,-3,12,6))

// Math.max(3,5,1,2,5,10,22,3)
// Math.max([1,2,3], [4,5,6])