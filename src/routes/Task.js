const router = require('express').Router();
const Task = require('../models/Tasks');

// insert
router.post('/add', async (req, res) => {
    try{

        let task = new Task(req.body)
        await task.save();
        res.send(task)

    } catch(e){
        console.log(e)
    }
})

//Update
router.post('/update/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.send(true);
    } catch (e) {
        console.log(e);
    }
})

//Delete
router.post('/delete/:id', async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.id, req.body);
        res.send(true);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router