const express = require("express")
const router = express.Router()
const {Schools} = require("../models/schemas")

router.get("/",async(req,res)=>{
    try{
        const schools =await Schools.find({})
        res.send({schools})
    }catch(err){
        res.status(400).send({ error: err });
    }
})

router.get("/:id",async(req,res)=>{
    try {
      const school = await Schools.findById(req.params.id);
      res.send({ school });
    } catch (err) {
      res.status(404).send({ message: 'School not found!' });
    }
  })
  router.put('/:id', async (req, res) => {
    try {
      const updatedSchool = await Schools.findByIdAndUpdate(req.params.id, req.body);
       res.send({ message: 'The school was updated' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const removeSchool = await Schools.findByIdAndRemove(req.params.id);
       res.send({ message: 'The school was removed' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });
  

router.post("/",async(req,res)=>{
    try{
        const newSchool = await Schools.create({
            schoolID: req.body.schoolID,
            image: req.body.image,
            name: req.body.name,
            teachers: req.body.teachers,
            studenets: req.body.studenets,
            branches: req.body.branches,
            classrooms: req.body.classrooms,
            homeworks: req.body.homeworks,
        })
        res.send({newSchool})
    } catch(err){
        res.status(400).send({error:err})
    }
})

module.exports=router