
const users = [
  {
    id: 1,
    firstName: "eric",
    lastName: "Schwartz"
  },
  {
    id: 2,
    firstName: "bob",
    lastName: "smith"
  },
  {
    id: 3,
    firstName: "Matt",
    lastName: "Therault"
  }
]

const userController = {

  getAllUsers: function(req,res){
    res.json(users)
  },

  findById: function(req, res){
    let foundUser = users.find( (user) => user.id === parseInt(req.params.id))
    
    //if we found the user return it otherwise return a 404
    if(foundUser){
        res.json(foundUser)
    }else{
        res.sendStatus(404)
    }
  },

  addUser: function(req,res){
    users.push(req.body);
    res.status(201).json(req.body);
  },

  deleteUser: function(req, res){
    const foundUserIndex = users.findIndex( (user) => user.id === parseInt(req.params.id))
    
    //if we found the user return it otherwise return a 404
    if(foundUserIndex !== -1){
        //deleting the user from the array
        users.splice(foundUserIndex, 1);
        res.json(users)
    }else{
        res.sendStatus(404)
    }
  },
  updateUser: function (req, res) {
    // res.send(req.params.id)
    let foundUser = users.find((user) => user.id === parseInt(req.params.id))

    //if we found the user update it otherwise return a 404
    if (foundUser) {
      foundUser = Object.assign(foundUser, req.body);
      res.json(foundUser);
    } else {
      res.sendStatus(404)
    }
  }
}

module.exports = userController;