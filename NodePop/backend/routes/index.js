var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.texto = 'Hola';

  const ahora = new Date();
  res.locals.esPar = (ahora.getSeconds() % 2) === 0 ;
  res.locals.segundoActual = ahora.getSeconds();

  //res.locals.usuarios = [
  //  {nombre: 'Smith' , edad:37},
  //  {nombre: 'Pedro' , edad:32}
  //]

  res.render('index') // Sin esto no cargará la página
});

router.get('/parametro_en_ruta/:numero', (req, res, next) => {
  const numero = req.params.numero;

  res.sendStatus('he recibido el número: ' + numero);
})


// GET / parametro_opcional/66
router.get('/parametro_opcional:numero?', (req, res, next) => {
  const numero = req.params.numero;

  res.sendStatus('(opcional e recibido el numero: ' + numero);
})// el ? indica que puede venir o no


//GET /producto/:nombre/talla/:talla/color/:color
router.get('/producto/:nombre/talla/:talla/color/:color',(req, res, next) => {
  console.log(req.params);
<<<<<<< HEAD:nodeapp/routes/index.js
  //const nombre = req.params.nombre;
  //const talla = req.params.talla;
  //const color = req.params.color;

  const { nombre, talla, color } = req.params // Asi nos ahorramos las 3 lineas de arriba

=======
  const nombre = req.params.nombre;
  const talla = req.params.talla; 
  const color = req.params.color;
>>>>>>> 49e0cab5ed54c340ecd0e5ab4c451a20eb106a4a:NodePop/backend/routes/index.js
  res.send(`Me pediste ${nombre} talla ${talla} color ${color}`);

}); 




// Pruea
router.get('/products',(req,res, next) =>{
  console.log(req);
  res.json("Soy una prueba")
});
module.exports = router;