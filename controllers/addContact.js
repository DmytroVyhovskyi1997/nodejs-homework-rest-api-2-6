const { Contact } = require("../models/contact");
const { HttpError } = require("../helpers");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  if (!result) {
    throw  HttpError(404, "Not found");
  }
  res.status(201).json(result);
};

module.exports = addContact;
