const { v4: uuidv4 } = require('uuid');
const file = require('../../helper/logicalFile');

const allowedKeys = [
    { key: 'title', type: 'string' },
    { key: 'genre', type: 'string' },
    { key: 'year', type: 'number' },
    { key: 'director', type: 'string' },
    { key: 'duration', type: 'number'}
]


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

        } else {
            return await file.createFile('./data/films.json', [film]), { status: 200, text: "Done" }
        }

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
        } else {
            return { ok : true, isAll : true }
        }

    } catch (e) {
        return { status: 501, text: "Server error" }
    }

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
            updatingFilm.duration = film.duration

            const res = await file.createFile('./data/films.json', response.data)
            if (res.ok) return { status: 200, text: "Done" }
            else return { status: 501, error: 'Server error' }

        } else {
            return { status: 404, text: "Not found" }
        }

    } catch (e) {
        return { status: 501, text: "Server error" }
    }

}


module.exports = {
    routes: {
        addNewFilm,
        removeFilm,
        updateFilm
    }
}