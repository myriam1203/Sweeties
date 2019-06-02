const express = require('express');
const models = require("./models"); // fonctions principales
console.log('abc');
const router = express.Router();


// création d'un user
router.post("/users/signup", (req, res) => {
  console.log('abc');
    let result = models.createUser(req.body);
    console.log('create user ok');
    result.then(result => res.send("User inserted")).catch(error => res.end(error));
});

router.post("/users/login", (req, res) => {
	models.logUser(req.body).then(({ success }) => {
      if (success) {
      	console.log('success');
      	res.sendStatus(200)
      }
      else {
      	console.log('failure');
      	res.sendStatus(401)
      }
    })
	//result.then(result => res.send("User login")).catch(error => res.end(error));
});

// listing d'un user
router.get("/users", (req, res) => {
    let result_promise = models.listUsers(req.body);
    return result_promise.then(result => res.send(result));
});


module.exports = router;
