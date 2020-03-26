const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

// Rotas de ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

// Rotas de casos
routes.post("/incidents", IncidentController.store);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
