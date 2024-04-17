// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const LanguageController = require('../controllers/languageController');

console.log("language routes");
router.get('/', LanguageController.getAllLanguages);
router.post('/', LanguageController.createLanguage);
router.get('/:id', LanguageController.getLanguageById);
router.put('/:id', LanguageController.updateLanguage);
router.patch('/:id', LanguageController.partialUpdateLanguage);
router.delete('/:id', LanguageController.deleteLanguage);

module.exports = router;