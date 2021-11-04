const express = require('express')

const router = express.Router()

router.post('/track-data', (req, res) => {
    console.log('Stored Data!', req.body.data);
    res.status(200).json({message: 'Success!'})
});

module.exports = {
    path: '/api',
    handler: router
}