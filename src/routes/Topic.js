const router = require('express').Router();
const Topic = require('../models/Topics');
const Tasks = require('../models/Tasks');

// insert
router.post('/add', async (req, res) => {
    try {

        let topic = new Topic(req.body)
        await topic.save();
        res.send(topic)

    } catch (e) {
        console.log(e)
    }
})

// view
router.get('/getAll', async (req, res) => {
    try {
        let topics = await Topic.find()

        topics = await Promise.all(topics.map(async e => {
            let tasks = await Tasks.find({ topicId: e._id })
            console.log(e, tasks)
            return {...e, tasks}
        }))

        res.send(topics)

    } catch (e) {
        console.log(e)
    }
})

module.exports = router
