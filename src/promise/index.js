const someThingsWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('Whooops!!')
        }
    })
}

someThingsWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const someThingsWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            },2000)
        }else{
            const error = new Error('Whooops!')
            reject(error)
        }
    })
}

someThingsWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err))

Promise.all([someThingsWillHappen(), someThingsWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.error(err))