const userDetails = require('../config/user.details.json');

function getAllUsers(req,res){
    let userList = [];
    userDetails.forEach(user => {
        userList.push(user.username);
    });
    res.status(200).json(userList);
}

function getUserInfo(req,res){
    let username = req.body.username;
    let user = userDetails.find(user=> user.username === username);
    res.status(200).json(user);
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUserInfo = getUserInfo;