const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/users', userController.getAllUsers);

//getting a single user new version of the code
router.get('/users/:id', userController.findById);

//getting a single user this is old version of this file.
// router.get("/users/:id", (req, res) => {
//   res.send(req.params.id)
//   const foundUser = users.find( (user) => user.id === parseInt(req.params.id))
    
//         //if we found the user return it otherwise return a 404
//         if(foundUser){
//             res.json(foundUser)
//         }else{
//             res.sendStatus(404)
//         }
// });

//adding Users
router.post('/users', userController.addUser);


//Delete a user
router.delete('/users/:id', userController.deleteUser);

//Update a user
router.put('/users/:id', userController.updateUser);


module.exports = router;