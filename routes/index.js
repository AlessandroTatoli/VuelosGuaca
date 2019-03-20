var express = require('express');
var router = express.Router();

//RUTAS
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ventas', function (req, res, next) {
  res.render('ventas');
});

router.get('/planificacionAviones', function (req, res, next) {
  res.render('planificacionAviones')
});

router.get('/planificacionVuelos', function (req, res, next) {
  avionesController.getAvionesDisponibles(data => res.render('planificacionVuelos', { aviones: data }))
});

router.get('/manejoPersonal', function (req, res, next) {
  res.render('manejoPersonal');
});

router.get('/reservarA', function (req, res, next) {
  res.render('reservarA');
});

// METODOS CRUD PASAJEROS
const pasajeroController = require('../controller/pasajeroController');

router.get('/verventas', (req, res) => {
  pasajeroController.getPasajeros(data => res.render('verventas', { pasajeros: data }))
});

router.post('/ventas', (req, res) => {
  console.log(req.body);
  pasajeroController.createPasajero(req.body)
  res.redirect('/ventas');
});

router.post("/verventas/:Pasaporte", (req, res) => {
  if (!!req.params.Pasaporte) {
    pasajeroController.deletePasajero(req.params.Pasaporte, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verventas');
    });
  }
});

router.post("/verventass/:Pasaporte", (req, res) => {
  if (!!req.params.Pasaporte) {
    pasajeroController.updatePasajero({ Pasaporte: req.params.Pasaporte, Telefono: req.body.Telefono }, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verventas');
    });
  }
});

//METODOS CRUD AVIONES
const avionesController = require('../controller/avionesController');

router.post("/verAviones/:N_Serial", (req, res) => {
  if (!!req.params.N_Serial) {
    avionesController.deleteAvion(req.params.N_Serial, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verAviones');
    });
  }
});

router.post("/verAvioness/:N_Serial", (req, res) => {
  if (!!req.params.N_Serial) {
    avionesController.updateAvionEstado({ N_Serial: req.params.N_Serial, Estado: req.body.Estado }, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verAviones');
    });
  }
});

router.get('/verAviones', (req, res) => {
  avionesController.getAviones(data => res.render('verAviones', { aviones: data }))
});

router.post('/planificacionAviones', (req, res) => {
  console.log(req.body);
  avionesController.createAvion(req.body);
  res.redirect('/planificacionAviones');
});

//METODOS CRUD AEROPUERTOS
const aeropuertosController = require('../controller/aeropuertosController');
router.get('/adminAeropuertos', (req, res) => {
  aeropuertosController.getAeropuertos(data => res.render('adminAeropuertos', { aeropuertos: data }));
});

//METODOS CRUD VUELOS
const vuelosController = require('../controller/vueloController');

router.get('/verVuelos', (req, res) => {
  vuelosController.getVuelos(data => res.render('verVuelos', { vuelos: data }))
});

router.post('/adminRutas', (req, res) => {
  console.log(req.body);
  tarifasController.getTarifas(req.body, (tarifas, err) => {
    vuelosController.createVuelo(req.body, tarifas);
    res.redirect('/adminRutas');
  });
});

router.post("/verVuelos/:N_Vuelo", (req, res) => {
  if (!!req.params.N_Vuelo) {
    serviciosAvionController.deleteServicioVuelo(req.params.N_Vuelo, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
    })
  }

  if (!!req.params.N_Vuelo) {
    vuelosController.deleteVuelo(req.params.N_Vuelo, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verVuelos');
    })
  }
});

//METODOS CRUD RESERVAS
const reservasController = require('../controller/reservaController');

router.get('/verReservas', (req, res) => {
  reservasController.getReservas(data => res.render('verReservas', { reservas: data }))
});

router.post("/verReservas/:Codigo", (req, res) => {
  if (!!req.params.Codigo) {
    reservasController.deleteReserva(req.params.Codigo, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verReservas');
    });
  }
});

const tarifasController = require('../controller/tarifaController');

router.post("/verventasss/:Pasaporte", (req, res) => {

  vuelosController.getVuelos(data => res.render('reservar', { vuelos: data, Pasaporte: req.params.Pasaporte }))
  console.log(req.params.Pasaporte);
});

router.post('/reservarA', (req, res) => {
  let { N_Serial } = req.body;
  let { N_Vuelo } = req.body;
  let { Pasaporte } = req.body;
  let { Precio } = req.body;
  console.log(N_Serial, N_Vuelo, Pasaporte, Precio);
  avionesController.getAviones2(N_Serial, (aviones, err) => {
    asientosController.getAsientos(data => res.render('reservarA', { asiento: data, aviones, N_Serial, N_Vuelo, Pasaporte, Precio }))
  });

});

router.post('/reservarAA', (req, res) => {
  let { N_Vuelo } = req.body;
  let { Pasaporte } = req.body;
  let { Precio } = req.body;
  const Estado = "Compra";
  console.log(N_Vuelo, Pasaporte, Estado, Precio);
  reservasController.createReserva(Pasaporte, Estado, Precio);
  res.redirect('/verReservas');
});

router.post('/verReservas', (req, res) => {
  let { Pasaporte } = req.body;
  let { Precio } = req.body;
  const Estado = "Reserva";
  console.log(Pasaporte, Precio);
  reservasController.createReserva(Pasaporte, Estado, Precio);
  res.redirect('/verReservas');
});

//METODOS CRUD CARACTERISTICAS AEROPUERTOS
const caracteristicasController = require('../controller/caracteristicaController');
router.get('/verCaracteristicasAeropuertos', (req, res) => {
  caracteristicasController.getCaracteristicas(data => res.render('verCaracteristicasAeropuertos', { caracteristicas: data }))
});

//METODOS CRUD TRIPULACIÓN
const tripulacionController = require('../controller/tripulacionController');

router.get('/adminPersonal', (req, res) => {
  tripulacionController.getTripulacion(data => res.render('adminPersonal', { tripulacion: data }))
});

router.post('/manejoPersonal', (req, res) => {
  console.log(req.body);
  tripulacionController.createTripulante(req.body);
  res.redirect('/manejoPersonal');
});

router.post("/adminPersonal/:Cedula", (req, res) => {
  if (!!req.params.Cedula) {
    tripulacionController.deleteTripulante(req.params.Cedula, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/adminPersonal');
    });
  }
});

//METODOS CRUD FABRICANTE
const fabricanteController = require('../controller/fabricanteController');

router.get('/verFabricante', (req, res) => {
  fabricanteController.getFabricantes(data => res.render('verFabricante', { fabricante: data }))
});

//METODOS CRUD SERVICIOS
const servicioController = require('../controller/servicioController');

router.get('/verServicios', (req, res) => {
  servicioController.getServicios(data => res.render('verServicios', { servicio: data }))
});

//METODOS CRUD CARACTERISTICAS AVIONES 
const caracteristicasAvionController = require('../controller/caracteristicasAvionController');

router.get('/verCaracteristicasAviones', (req, res) => {
  caracteristicasAvionController.getCaracteristicasAvion(data => res.render('verCaracteristicasAviones', { caracteristicasAvion: data }))
});

//METODOS CRUD ASIENTOS AVIONES
const asientosController = require('../controller/asientosController');

router.get('/verAsientos', (req, res) => {
  asientosController.getAsientos(data => res.render('verAsientos', { asiento: data }))
});

//METODOS CRUD RUTAS
const rutasController = require('../controller/rutasController');

router.post('/planificacionVuelos', (req, res) => {
  console.log(req.body);
  rutasController.createRuta(req.body);
  res.redirect('/planificacionVuelos');
});

router.get('/adminRutas', (req, res) => {
  rutasController.getRutas(data => res.render('adminRutas', { rutas: data }))
});

router.post("/adminRutas/:N_Serial/:Origen/:Destino", (req, res) => {
  if (!!req.params.N_Serial) {
    rutasController.deleteRuta({ N_Serial: req.params.N_Serial, Origen: req.params.Origen, Destino: req.params.Destino }, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/adminRutas');
    });
  }
});

//METODOS CRUD SERVICIOS AVION
const serviciosAvionController = require('../controller/servicioVueloController');

router.post('/verVuelos', (req, res) => {
  console.log(req.body);
  serviciosAvionController.createServicioAvion(req.body);
  res.redirect('/verVuelos');
});

router.get('/adminServiciosVuelos', (req, res) => {
  serviciosAvionController.getServiciosAviones(data => res.render('adminServiciosVuelos', { serviciosA: data }))
});

//METODOS CRUD TIPOS DE MANTENIMIENTO
const tipoMantenimientoController = require('../controller/tipoMantenimientoController');

router.get('/tiposMantenimiento', (req, res) => {
  tipoMantenimientoController.getTiposMantenimiento(data => res.render('tiposMantenimiento', { tiposMantenimientos: data }))
});

//METODOS CRUD MANTENIMIENTO
const mantenimientoController = require('../controller/mantenimientoController');

router.get('/mantenimiento', (req, res) => {
  avionesController.getAvionesMantenimiento(data => res.render('mantenimiento', { aviones: data }))
});

router.post('/mantenimiento', (req, res) => {
  console.log(req.body);
  mantenimientoController.createMantenimiento(req.body);
  res.redirect('/verMantenimientos');
});

router.get('/verMantenimientos', (req, res) => {
  mantenimientoController.getMantenimientos(data => res.render('verMantenimientos', { mantenimientos: data }))
});

router.post("/verMantenimientos/:N_Serial", (req, res) => {
  if (!!req.params.N_Serial) {
    avionesController.updateAvionMantenimiento({ N_Serial: req.params.N_Serial }, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/verMantenimientos');
    });
  }

  if (!!req.params.N_Serial) {
    mantenimientoController.deleteMantenimiento(req.params.N_Serial, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/verMantenimientos');
    });
  }
});

//METODOS CRUD VUELOS CANCELADOS
const vuelosCanceladosController = require('../controller/vuelosCanceladosController');

router.get('/adminVuelosCancelados', (req, res) => {
  vuelosCanceladosController.getVuelosCancelados(data => res.render('adminVuelosCancelados', { vuelosCancelados: data }))
});

router.post('/cancelarVuelo', (req, res) => {
  let { N_Vuelo } = req.body;
  let { Origen } = req.body;
  let { Destino } = req.body;
  console.log(N_Vuelo, Origen, Destino);

  if (!!N_Vuelo) {
    serviciosAvionController.deleteServicioVuelo(N_Vuelo, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
    })
  }

  if (!!N_Vuelo) {
    vuelosController.deleteVuelo(N_Vuelo, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
    });
  }

  vuelosCanceladosController.createVueloCancelado(N_Vuelo, Origen, Destino);
  res.redirect('/verVuelos');
});

router.post("/adminVuelosCancelados/:N_Vuelo", (req, res) => {
  if (!!req.params.N_Vuelo) {
    vuelosCanceladosController.deleteVuelo(req.params.N_Vuelo, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/adminVuelosCancelados');
    });
  }
});

//METODOS CRUD DESVIAR VUELOS

router.get('/adminDesvios', (req, res) => {
  vuelosController.getVuelos(data => res.render('adminDesvios', { vuelos: data }))
});

router.post("/desviarVuelo/:N_Vuelo/:N_Serial/:Origen", (req, res) => {

  if (!!req.params.N_Vuelo) {
    vuelosController.updateDestino({ N_Vuelo: req.params.N_Vuelo, Destino: req.body.Destino }, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
    });
  }

  vuelosController.getVuelosACancelar(req.params.N_Serial, req.params.Destino, (vuelosACancelar, err) => {
    vuelosCanceladosController.createVueloCancelado2(vuelosACancelar);
  });

  if (!!req.params.N_Serial && !!req.params.Origen) {
    vuelosController.deleteVueloPorDesvio(req.params.N_Serial, req.params.Origen, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/adminDesvios');
    })
  }
});

//REPORTES

router.get('/reportes', (req, res) => {
  
  reservasController.getCantidadReservas((reservas, err) => {
    avionesController.getDisponibles(data => res.render('reportes', {reservas, disponibles: data}));  
  });
});




module.exports = router;