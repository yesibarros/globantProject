const newRequest = require('./newRequest')
const updateById = require('./updateById')
const acceptRequest = require('./acceptRequest')
const cancelRequest = require('./cancelRequest')
const getMatchs = require('./getMatchs')
const getUser = require('./getUser')
const getPendingRequests = require('./getPendingRequests')
const cancelMatch = require('./cancelMatch')

module.exports = {
                    getUser,
                    newRequest, 
                    updateById,
                    getMatchs, 
                    acceptRequest, 
                    cancelRequest,
                    getPendingRequests,
                    cancelMatch
                }