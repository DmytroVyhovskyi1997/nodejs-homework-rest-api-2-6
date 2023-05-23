const express = require('express')
const contact = require('../../models/contacts')
const router = express.Router()

const {HttpError} = require('../../helpers/HttpError');

router.get('/', async (req, res) => {
  try{
    const result = await contact.listContacts();
    res.json(result)
  }catch(error){
res.status(500).json({massage: 'Server error'})
  }
 
})

router.get('/:contactId', async (req, res) => {
  try{
    const {contactId} = req.params;
    const result = await contact.getContactById(contactId);
    if(!result) {
      throw HttpError(404, 'Not found')
    }
  }catch{}
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router;
