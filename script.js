'use strict'

console.log('Запрос данных')

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...')
    
        const product = {
            name: 'TV',
            price: 2000
        }
    
        resolve(product)

    }, 2000);
})

req.then((product) => { // product - объект product
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order'
            resolve(product) // равносильно return product
         }, 2000);
    }).then(data => {
        data.modify = true
        return data // data является объектом product
    }).then(data => {
        console.log(data)
    }).catch(() => { // если что-то идет не так срабаывает этот блок кода
        console.error('Произошла ошибка')
    }).finally(() => { // этот блок кода пишется всегда самым последним и срабатывает абсолютно всегда
        console.log('Finally')
    })
})


// race и all
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    })
}

test(1000).then(() => console.log('1000ms'))
test(2000).then(() => console.log('2000ms'))

Promise.all([test(1000), test(2000)]).then(() => { // запускается, когда срабатывают все промисы
    console.log('All')
})

Promise.race([test(1000), test(2000)]).then(() => { // запускается, когда срабатывает первый промис
    console.log('All')
})


