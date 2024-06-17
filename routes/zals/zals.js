const file = require('../../helper/logicalFile')

const zals = {
    red: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
    ],
    green: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null, null, null],
    ]
}


//!
const recording = {
    '22:03:2023': {
        red: [
            {
                _id : 'dskf;dslakf;laskf;lsafkwpeo',
                time: '11:00',
                filmId: 2,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [true, true, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '13:00',
                filmId: 2,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '16:20',
                filmId: 6,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
        ],
        green: [
            {
                time: '11:00',
                filmId: 1,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '13:00',
                filmId: 1,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '16:20',
                filmId: 4,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
        ],
    },
    '23:03:2023': {
        red: [
            {
                time: '11:00',
                filmId: 2,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '13:00',
                filmId: 2,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '16:20',
                filmId: 6,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
        ],
        green: [
            {
                time: '11:00',
                filmId: 1,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '13:00',
                filmId: 1,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '16:20',
                filmId: 4,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
        ],
    },
}

//!
const places = {
    '13:03:2020': {
        red: {
            '11:00': {
                place: [
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ],
                filmId: 1
            },
            '13:00': {
                place: [
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ],
                filmId: 3
            },
        }
    },
    '14:03:2020': {
        red: {
            '11:00': {
                place: [
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ],
                filmId: 1
            },
            '13:00': {
                place: [
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ],
                filmId: 3
            },
        }
    },
}

//!
const recordingFilm = (date, zal, time, place) => {
    places[date][zal][time].place[0][0];
}


// recordingFilm('13:03:2020', 'red', '11:00', [
//     {
//         row: 2,
//         column: 1
//     },
//     {
//         row: 2,
//         column: 2
//     },
// ])


const createArrayForZal = (numberOfSeats) => {
    const newZal = []
    for (let i = 0; i < numberOfSeats.length; i++) {
        const seats = []
        for (let j = 0; j < numberOfSeats[i]; j++) {
            seats.push(null)
        }
        newZal.push(seats)
    }
    return newZal
}


const createZal = async (zal, numberOfSeats) => {
    try {
        if (zal in zals) return { status: 410, text: "Zal exists" }
        if (!Array.isArray(numberOfSeats)) return { status: 410, text: "Not array" }
        if (numberOfSeats.length === 0) return { status: 410, text: "Empty" }

        const response = await file.readFile('./data/zals.json')
        const places = createArrayForZal(numberOfSeats) 


        if (response.ok) {
            response.data[zal] = places 
            return await file.createFile('./data/zals.json', response.data)

        } else {
            
            return await file.createFile('./data/zals.json', {[zal]: places}), { status: 200, text: "Done" }
        }

    } catch (e) {
        return { status: 501, text: "Server error" }
    }

}


// const r = createZal('yellow', [7, 7, 10, 10, 10])
// console.log(r)
// console.log(zals)


const editZal = async (zal, newPlaces) => {
    try {
        const response = await file.readFile('./data/zals.json')

        if (response.ok) {

            if (!(zal in response.data)) return { status: 404, text: "Not found" }
            if (!Array.isArray(newPlaces)) return { status: 410, text: "Not array" }
            if (newPlaces.length === 0) return { status: 410, text: "Empty" }
    
            const newZal = createArrayForZal(newPlaces)
            response.data[zal] = newZal 
            const res = await file.createFile('./data/zals.json', response.data)
            if (res.ok) return { status: 200, text: "Done" }
            else return { status: 501, error: 'Server error' }

        } else {
            return { status: 404, text: "Not exist file" }
        }

    } catch (e) {
        return { status: 501, text: "Server error" }
    }

}

// const d = async () => {
//     const response2 = await editZal('yellow', [1, 5, 5, 6])
//     console.log(response2)

// }
// d()


const removeZal = async (zal) => {
    try{
        const response = await file.readFile('./data/zals.json')

        if (response.ok) {
            if (!(zal in response.data)) return { status: 404, text: "Not found" };
            delete response.data[zal] 
            return await file.createFile('./data/zals.json', response.data), { status: 200, text: "Done" }
        } else {
            return { ok : true, isAll : true }
        }
    } catch (e) {
        return { status: 501, text: "Server error" }
    }

}

// const r = async () => {
//     const response3 = await removeZal('red')
//     console.log(response3)

// }

// r()


module.exports = {
    routes: {
        recordingFilm,
        createArrayForZal,
        createZal,
        editZal,
        removeZal
    }
}

