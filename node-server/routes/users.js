const router = require('express').Router();
router.get('/',function(req,res) {
  var user = {
    name:"张三",
    age:40
  }
  res.send(JSON.stringify(user));
})

module.exports = router;