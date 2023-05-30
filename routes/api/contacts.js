const express = require("express");

const router = express.Router();
const {
  getAll,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateFavorite,
} = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateFavorite
);

router.delete("/:id", isValidId, removeContact);

module.exports = router;
