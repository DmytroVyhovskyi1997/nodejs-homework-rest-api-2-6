const express = require("express")

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const route = express.Router();

route.post("/register", validateBody(schemas.registerSchema), ctrl.register);
route.post("/login", validateBody(schemas.loginSchema), ctrl.login);

route.post("/register")

module.exports = route;