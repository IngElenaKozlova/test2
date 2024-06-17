const f = require('./routes/film/film')
const z = require('./routes/zals/zals')
const t = require('./routes/timetable/timetable')
const express = require('express');

const app = express()

const start = () => {

  
    app.listen(5000, () => {

        console.log('start server ' + 5000)
    })
}

// start()


// const zals = {
//     red: {
//         size : 80,
//         time : 'sadsa'
//     },
//     green: {
//         size : 90,
//         time : '090'
//     }
// }


// const array = [1,'hello', 'three'];
// const [two, one, three] = array;
// const {red, green} = zals


// const {length, map, find} = array;
// const length = array.length;








// const size = "asad"

// console.log(size)
// zals.green.size = 'sad';

// if(zals.isHD = true) {}

// if(zals.isHD = true) {

// }
// if(zals.isHD === true) {

// }
// size = 's'
// const red = zals.red;
// console.log(size)


// const getName = ({name, age}, {form2 = 'alex'}) => {

//     console.log(name)
//     console.log(form2)
// }


// getName({name : 'Rob', age : 99, is : false}, {form : null, tost : 'tost'})