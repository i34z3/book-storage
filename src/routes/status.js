const express = require('express')
const Status = require('../models/Status')
const router = express.Router()

router.post('/', async (req, res) => {
    const status = new Status({
        description: req.body.description
    })
    try {
        const savedStatus = await status.save()
        res.json(savedStatus)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router