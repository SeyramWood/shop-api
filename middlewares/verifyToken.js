const { response } = require('express');
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({error:'User not authenticated'})
    }

    try {
        const user = jwt.verify(token.split(' ')[1], 'letmeinn')
        req.user = user
    } catch (error) {
        return res.status(403).json({error:'User not authenticated'})
    }
    return next()
}

module.exports = {verifyToken}