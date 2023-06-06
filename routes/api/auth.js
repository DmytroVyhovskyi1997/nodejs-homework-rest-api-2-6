const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const route = express.Router();
route.get("/current", authenticate, ctrl.getCurrent);
route.post("/register", validateBody(schemas.registerSchema), ctrl.register);
route.post("/login", validateBody(schemas.loginSchema), ctrl.login);
route.post("/logout", authenticate, ctrl.logout);
route.post("/register");

module.exports = route;
