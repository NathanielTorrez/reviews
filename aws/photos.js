// const AWS = require('aws-sdk');
// const credentials = require('./awsconfig.js');
// const db = require('../database/index.js');


// AWS.config.update(credentials);

// const s3 = new AWS.S3();

// AWS.config.setPromisesDependency();

// const seedPhotoUrl = () => {
//   s3.listObjectsV2({
//     Bucket: 'photo-bucket-fex',
//   }).promise()
//     .then((response) => {
//       const objects = response.Contents;
//       //const keys = [];
//       const urls = []
//       for (let i = 0; i < objects.length; i += 1) {
//         urls.push(`https://photo-bucket-fex.s3-us-west-1.amazonaws.com/${objects[i].Key}`)
//         // const presignedGETURL = s3.getSignedUrl('getObject', {
//         //   Bucket: 'photo-bucket-fex',
//         //   Key: `${objects[i].Key}`,
//         //   Expires: 200,
//         // });
//         // keys.push(presignedGETURL);
//       }
//       console.log(urls)
//       for (let j = 1; j < 101; j += 1) {
//         const randomIndex = Math.floor(Math.random() * urls.length);
//         const url = urls[randomIndex];
//         db.query(`UPDATE users SET photo_url="${url}" WHERE ID=${j};`, (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             //console.log('success');
//           }
//         });
//       }
//     });
// };

// module.exports = seedPhotoUrl;
