//假数据，只在本地做

// const MongoClient = require('mongodb').MongoClient;
// const faker = require('faker');

// const url = 'mongodb://localhost:27017';
// const dbName = 'mema-demo';

// let count = 0;
// MongoClient.connect(url, function(err, client) {
//   const db = client.db(dbName);

//   const fakeData = [];

//   while (count++ < 100) {
//     const name = faker.name.firstName();
//     const age = faker.random.number({ min: 10, max: 100 });
//     const email = faker.internet.email();
//     fakeData.push({
//       name,
//       age,
//       email,
//       location: generateLocation()
//     });
//   }

//   db.collection("people")
//     .insertMany(fakeData)
//     .then(() => {
//       return db.collection("people").createIndex({ location: "2dsphere" });
//     })
//     .then(() => {
//       client.close();
//     });
// });

// function generateLocation() {
//   return {
//     type: "Point",
//     coordinates: [+faker.address.longitude(), +faker.address.latitude()]
//   };
// }