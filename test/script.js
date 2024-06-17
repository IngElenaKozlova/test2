const logicalPromis = async () => {
    console.log('1')
    const promise = new Promise(function(resolve, reject) {
        const data = { ok : true , data : ['word','asa']};
        if(data.ok) {
            setTimeout(() => {
                console.log('2')
                return resolve(data.data)
            }, 5000)
        } else {
            return reject('error test')  
        }
    });


    // XPathExpression('dsad')
    
    console.log('3')
    const res = await promise
    // const res = await promise1
    // const res = await promise2
    console.log(res)
    console.log('4')

      return {ok : true , data : res}
}



// setInterval(() => {}, 2000)

logicalPromis()