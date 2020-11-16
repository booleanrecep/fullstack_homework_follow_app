const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let Teachers;
let Dummy_data;

// const getAllCollection = async (colName)=>{
//   const name = await mongoose.connection.db.collection(
//     `${colName}`,
//       (err, collection) => {
//         collection.find({}).toArray(function (err, colName) {
//           console.log()
//         });
//       }
//     );

// }
router.get("/", async (req, res) => {
  try {
    const arrayOfCol=[]
    await mongoose.connection.db
      .listCollections()
      .toArray(function (err, names) {
        if (err) {
          console.log(err);
        } else {
          const allCollections = names.map(({name})=>`<h5>${name}</h5>`)
          // console.log(...a)
          res.send(allCollections)
        }
      });
      
    //   mongoose.connection.db.collection(
            //   "schools",
            //   (err, collection) => {
            //     collection.find({}).toArray(function (err, names) {
            //       // arrayOfCol.push({nm})
            //       console.log(names)
            //       res.send({names})
            //     });
            //   }
            // );
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
