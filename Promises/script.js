// console.log("Hi");
// setTimeout(() => {
//     console.log("Hi 2");
// }, 1000);
// console.log("Hi 3");

// promise fulfills in future
// Accepts a callback
// A promise can be accepted/rejected
// 1. Promise Creation
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async tasks
//     // 1. DB Calls , Network Calls etc.
//     setTimeout(() => {
//         console.log("Async Task is complete");
//         resolve()
//     }, 1000)
// })

// 2. Promise Consumption
// promiseOne
//     .then(() => {
//         console.log("Promise Consumed");
//     })


// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task");
//         reject()
//     }, 1000);
// }).then(() => {
//     console.log('completed');
// }).catch(() => {
//     console.log('rejected');
// })


// Promise passing data

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Promise Created - Async');
//         resolve({ data: [1, 2, 3, 4] })
//     }, 1000)
// }).then((response) => {
//     console.log('Fulfilled' , response);
// })

// Consuming Errors in Promise

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false

//         if (!error) resolve({ name: 'rajaehsan', password: 'test@123' })
//         else reject('Error occured')
//     }, 1000)
// })
//     .then((res) => {
//         return res.name
//     })
//     .then((name) => {
//         console.log("NAME", name)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("PROMISE CREATED")
//     })


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false

//         if (!error) resolve({ name: 'rajaehsan', password: 'test@123' })
//         else reject('Error occured')
//     }, 1000)
// })

// async function consumePromise() {
//     try {
//         const response = await promise
//         console.log("Success ...." , response)
//     } catch (error) {
//         console.log("Error ...." , error)
//     } 
// }

// consumePromise()

let posts = null

async function getAllPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        posts =  data
    } catch (error) {
        console.log("Err", error)

    }
}
getAllPosts()




