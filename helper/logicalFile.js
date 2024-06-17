const fs = require('fs').promises

const createFolder = (nameFolder) => {
    fs.mkdir(nameFolder, { recursive: true }, error => {
        if (error) console.log('error', error);
        else console.log('good')
    });
}

const readFile = async (fileName) => {
    try {
        const result = await fs.readFile(fileName, 'utf8')
        const jsonData = JSON.parse(result);
        return { ok: true, data: jsonData }
    } catch (e) {
        return { ok: false }
    }
}

//    , async (err, data) => {
//         if (err) {
//             console.error('Ошибка при чтении файла:', err);
//             return {ok : false};
//         }
//         try {
//             const jsonData = JSON.parse(data);
//             return {ok : true, data : jsonData};
//         } catch (parseError) {
//             console.error('Ошибка при разборе JSON:', parseError);
//             return {ok : false};
//         }
//     });

const createFile = async (pathFile, data) => {
    try {
        const dataJson = JSON.stringify(data)
        await fs.writeFile(pathFile, dataJson)
        return { ok: true }
    } catch (e) {
        return { ok: false }
    }
}
// 01:20   = 80
const createNewTime_HHMM = (time, duration, timeClear) => {
    const sumDurAndTc = duration + timeClear;

    let HH = Math.floor(sumDurAndTc / 60)
    let MM = sumDurAndTc % 60
    const editedTime = time.split(':');

    const lastMM = +editedTime[1];
    const lastHH = +editedTime[0]


    let newMM = lastMM + MM;
    let newHH = lastHH + HH

    if (newMM >= 60) {

        const tHH = Math.floor(newMM / 60); 

        newMM = newMM % 60;
        newHH += tHH;
    }

    if (newHH >= 24) newHH -= 24

    if (newHH < 10) newHH = '0' + newHH;
    if (newMM < 10) newMM = '0' + newMM;

    return newHH + ':' + newMM
}

const timeToNum = (time) => {
    const [HH, MM] = time.split(':')
    return +(HH + MM)
}

const numberToTime = (duration) => {
    let HH = Math.floor(duration / 60) * 100
    let MM = duration % 60

    return HH + MM
}

const timeToMinutes = (time) => {
    const separatedTime = time.split(':')

    const HH = +separatedTime[0]
    const MM = +separatedTime[1]

    if (MM >= 60) return { status: 403, text: 'Please enter valid number of minutes' }

    return (HH * 60 + MM)
}
//! if isDirection = true time right more
const isHasPlaceTime = (time, startTimeFilm, duration, timeClear, isDirection) => {
    if (isDirection) {
        const timeFilm = createNewTime_HHMM(startTimeFilm, duration, timeClear)
        return timeToNum(timeFilm) <= timeToNum(time)
    } else {
        const timeFilm = createNewTime_HHMM(time, duration, timeClear)
        return timeToNum(timeFilm) <= timeToNum(startTimeFilm) 
    } 
}

module.exports = {
    createFolder: createFolder,
    readFile: readFile,
    createFile: createFile,
    createNewTime_HHMM: createNewTime_HHMM,
    timeToNum: timeToNum,
    numberToTime: numberToTime,
    timeToMinutes: timeToMinutes,
    isHasPlaceTime : isHasPlaceTime
}

