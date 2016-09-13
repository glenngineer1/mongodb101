'use strict'

const { MongoClient } = require('mongodb')
const MONGODB_URL = 'mongodb://localhost:27017/test'
const { argv: [,,...filter] } = process
const name = RegExp(`^${filter.join(' ')}`, 'i')
//'i' makes it case insensitive, can accept upper and lower case

MongoClient
  .connect(MONGODB_URL)
  .then(db => {
    db.collection('restaurants')
    .find({ name }) // takes names after node index.js
    .sort({ name: 1}) // sorts by alphabetical order, -1 would be opposite alphabetical
    // .toArray()
    // .then((restaurants) => {
    //   restaurants.forEach(restaurant => {
    //     if(restaurant.name) {
    //       console.log(restaurant.name)
    //     }
    //   })
    // })
    // .then(() => db.close())
    .forEach(restaurant => {
          if(restaurant.name) {
          console.log(restaurant.name)
        }
    },
      () => db.close()
    )
  })
  .catch(console.error)



















// 'use strict'

// const { MongoClient } = require('mongodb')
// const MONGODB_URL = 'mongodb://localhost:27017/test'

// MongoClient
//   .connect(MONGODB_URL)
//   .then(db => {
//     db.collection('restaurants')
//     .find()
//     .toArray()
//     .then((restaurants) => {
//       restaurants.forEach(restaurant => {
//         if(restaurant.name) {
//           console.log(restaurant.name)
//         }
//       })
//     })
//     .then(() => db.close())
//     // .forEach(restaurant => {
//         //   if(restaurant.name) {
//         //   console.log(restaurant.name)
//         // }
//     // },
//     //   () => db.close()
//     // )
//   })
//   .catch(console.error)

// 'use strict'

// const { MongoClient } = require('mongodb')
// const MONGODB_URL = 'mongodb://localhost:27017/test'

// MongoClient
//   .connect(MONGODB_URL)
//   .then(db => {
//     db.collection('restaurants')
//     .find()
//     .toArray()
//     .then((restaurants) => {
//       restaurants.forEach(restaurant => {
//         console.log(restaurant);
//       })
//     })
//     .then(() => db.close())

// // Use 11 -17 or replace with 21-25, both ways are acceptable

//     // .forEach(restaurant => {
//     //   console.log(restaurant)
//     // },
//     //   () => db.close()
//     // )
//   })
//   .catch(console.error)

