var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //Render manda a renderizar (generar y entragar) la vista al cliente
  res.render('about',
  //Este es el View-Model 
  { 
      name: "Isaac Estrada" ,
    email: "isaacitgam@gmail.com",
    url:"www.itgam.com/IsaacEst"
    } 
  );
});

module.exports = router;
