const file = require('../../helper/logicalFile');
const { v4: uuidv4 } = require('uuid');


const recording = {
    '22:03:2023': {
        red: [
            {
                _id: 'dskf;dslakf;laskf;lsafkwpeo',
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
                time: '13:30',
                filmId: 1,
                places: [
                    [null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null, null, null, null, null],
                ]
            },
            {
                time: '18:30',
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
// const recordingFilm = (date, zal, time, place) => {
//     places[date][zal][time].place[0][0];
// }


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



const isTestDate = date => {
    if (typeof date !== "string") return false;
    if (date.trim() === '') return false;

    const array = date.split(':');
    if (array.length !== 3) return false;

    const currentDate = Date.now(); // UNIX
    const checkedDate = new Date(date).getTime()
    if (checkedDate < currentDate) return false

    return true
}


const addTimetable = async (date, zal, filmId, time) => {
    try {
        if (!isTestDate(date)) return { status: 422, text: "Date is not correct" }
        const responsePlaces = await file.readFile('./data/zals.json');
        if (!responsePlaces.ok) return { status: 404, text: "Zals does not exist" }
        if (!responsePlaces.data[zal]) return { status: 404, text: "Zal does not exist" }


        const responseTimetable = await file.readFile('./data/timetable.json')
        const responseSetting = await file.readFile('./data/setting.json')
        const responseFilms = await file.readFile('./data/films.json')

        if (responseSetting.ok === false) return { status: 403, text: "If you want autocalc time works please add setting", is: true }

        if (responseFilms.ok === false) return { status: 404, text: "Films not found" }

        const currentZal = responsePlaces.data[zal];
        const timetableOneElem = {
            _id: uuidv4(),
            time: time,
            filmId,
            places: currentZal
        }


        const currentFilm = responseFilms.data.find((film) => film.id === timetableOneElem.filmId)
        if (currentFilm === undefined) return { status: 404, text: "Films not found" }

        let timeStartFilm = time;
        if (!time) {

            if (responseTimetable.ok) {
                const array = responseTimetable.data[date][zal]

                if (array.length === 0) timeStartFilm = responseSetting.data["startWork"]
                else {
                    const lastFilmOfTimetable = array[array.length - 1]

                    const film = responseFilms.data.find((film) => film.id === lastFilmOfTimetable.filmId)

                    if (film === undefined) return { status: 404, text: "Films not found" }

                    const filmDuration = film.duration

                    const timeClear = responseSetting.data["timeClear"]

                    const createTime = await file.createNewTime_HHMM(lastFilmOfTimetable.time, filmDuration, timeClear);

                    timeStartFilm = createTime
                }

            } else {
                timeStartFilm = responseSetting.data["startWork"];
            }
        } else {
            // taimtable 16:00
            currentFilm

        }

        timetableOneElem.time = timeStartFilm;
      

        if (responseTimetable.ok) {
            if (!responseTimetable.data[date]) responseTimetable.data[date] = {}
            if (!responseTimetable.data[date][zal]) responseTimetable.data[date][zal] = []
            else responseTimetable.data[date][zal].sort((a, b) => file.timeToNum(a.time) - file.timeToNum(b.time))


            const endOfCurrentFilm = file.timeToNum(timetableOneElem.time) + file.numberToTime(currentFilm.duration);

            if (endOfCurrentFilm > file.timeToNum(responseSetting.data.endOfTheDay) || endOfCurrentFilm < file.timeToNum(responseSetting.startWork)) return { status: 404, text: "No free time found, the day is complete" }


            responseTimetable.data[date][zal].push(timetableOneElem)

            return await file.createFile('./data/timetable.json', responseTimetable.data)

        } else {
            const timetable = {
                [date]: {
                    [zal]: [timetableOneElem]
                }
            }

            return await file.createFile('./data/timetable.json', timetable), { status: 200, text: "Done" }
        }

    } catch (e) {
        console.log(e)
        return { status: 501, text: "Server error" }
    }

}

// (async function () {
//     const work = await addTimetable('22:04:2025', 'red', '683cd2fc-a579-4c07-a047-e114d3c143da')
//     console.log(work)

// })();

// const recordingTest = {};

// const r = recordingTest['22:03:2023']['red']


const addTest = async (date, zal, filmId, time) => {
    // recordingTest

    const timetableOneElem = {
        _id: uuidv4(),
        time,
        filmId,
        places: [[null]]
    }
    if (!recordingTest[date]) recordingTest[date] = {};
    if (!recordingTest[date][zal]) recordingTest[date][zal] = [];
    recordingTest[date][zal].push(timetableOneElem)


    // [zal] = [timetableOneElem] //! is this rewriting or adding?
    // console.log(JSON.stringify(recordingTest))

}

// addTest('22:03:2023', 'red', "683cd2fc-a579-4c07-a047-e114d3c143da", '11:00')

// const r = createZal('yellow', [7, 7, 10, 10, 10])
// console.log(r)
// console.log(zals)


// const editZal = async (zal, newPlaces) => {
//     try {
//         const response = await file.readFile('./data/zals.json')

//         if (response.ok) {

//             if (!(zal in response.data)) return { status: 404, text: "Not found" }
//             if (!Array.isArray(newPlaces)) return { status: 410, text: "Not array" }
//             if (newPlaces.length === 0) return { status: 410, text: "Empty" }

//             const newZal = createArrayForZal(newPlaces)
//             response.data[zal] = newZal 
//             const res = await file.createFile('./data/zals.json', response.data)
//             if (res.ok) return { status: 200, text: "Done" }
//             else return { status: 501, error: 'Server error' }

//         } else {
//             return { status: 404, text: "Not exist file" }
//         }

//     } catch (e) {
//         return { status: 501, text: "Server error" }
//     }

// }

// const d = async () => {
//     const response2 = await editZal('yellow', [1, 5, 5, 6])
//     console.log(response2)

// }
// d()


const removeTimetable = async (zal) => {
    try {
        const response = await file.readFile('./data/zals.json')

        if (response.ok) {
            if (!(zal in response.data)) return { status: 404, text: "Not found" };
            delete response.data[zal]
            return await file.createFile('./data/zals.json', response.data), { status: 200, text: "Done" }
        } else {
            return { ok: true, isAll: true }
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

// ? ------------------------- 
// Object.values
// Object.keys
// ? -------------------------


module.exports = {
    routes: {
        addTimetable,
        // createArrayForZal,
        // createZal,
        // editZal,
        removeTimetable
    }
}



const duration = 20

const times = ['11:00', '11:30', '12:00', '13:00', '14:30']

const addTime = async (time) => { // debugger

    const responseSet = await file.readFile('./data/setting.json')
    const timeForClear = responseSet.data.timeClear

    const timeN = file.timeToNum(time) 


    let different = Infinity; 
    let index = -1; 
    let differentAbs = Infinity 
    times.forEach((t, i) => {
        const tN = file.timeToNum(t) 

        const res = Math.abs(timeN - tN) 

        if(differentAbs > res) { 
            differentAbs = res; 
            index = i;
            different = timeN - tN 
        }
    })

    if(index === -1) return 
    const nearTimeN = file.timeToNum(times[index]); 

    if(different > 0) {
        const nextIndex = index + 1; 
        const nextTime = times[nextIndex]; 
        if(nextTime === undefined) {}

        // console.log(file.isHasPlaceTime(time, times[index], duration, timeForClear, true))
        console.log(file.isHasPlaceTime(time, nextTime, duration, timeForClear, false))
        if(
            file.isHasPlaceTime(time, times[index], duration, timeForClear, true)
            && file.isHasPlaceTime(time, nextTime, duration, timeForClear, false)
         ) {
            times.splice(index + 1, 0, time)
            return {ok : true, data : times}
        }
        else return { status: 404, text: "No free time slot was found" }

           
    } else {
        const prevIndex = index - 1
        const prevTime = times[prevIndex]
 
        if(prevTime === undefined) {}

        if(file.isHasPlaceTime(time, times[index], duration, timeForClear, true) 
            && file.isHasPlaceTime(time, prevTime, duration, timeForClear, false)  ) {
        

            times.splice(index , 0, time)
            return {ok : true, data : times}
        } else return { status: 404, text: "No free time slot was found" }
    }
}

const ff = async () => {

    const d = await addTime('12:30')

    // console.log('-----------')
    // console.log(file.isHasPlaceTime('12:30', '12:00', 20, 10, true))
    // console.log('-----------')

    console.log(d)
}
ff()



//! file.isHasPlaceTime(time, nextTime (times[index]), duration, timeForClear, true)
//? time newFilm, time film right duretion newFilm, time clear, true
//! file.isHasPlaceTime(time, prevTime (times[index]), duration, timeForClear, false)
//? time newFilm, time film left, duretion leftFilm, time clear, false