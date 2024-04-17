/*

const language = require('../models/language');

exports.getAllLanguages = async (req, res) => {
  try {
    const language = await language.find();
    res.json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createLanguage = async (req, res) => {
    try {
      const newLanguage = await language.create(req.body);
      res.status(201).json(newLanguage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
 

exports.getLanguageById = async (req, res) => {
  try {
    const language = await language.findById(req.params.id);
    if (!language) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateLanguage = async (req, res) => {
  try {
    const updatedLanguage = await language.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLanguage) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedLanguage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.partialUpdateLanguage = async (req, res) => {
  try {
    const updatedLanguage = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLanguage) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedLanguage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteLanguage = async (req, res) => {
  try {
    const deletedLanguage = await User.findByIdAndDelete(req.params.id);
    if (!deletedLanguage) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

*/

const Language = require('../models/language');

exports.getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLanguage = async (req, res) => {
  try {
    const newLanguage = await Language.create(req.body);
    res.status(201).json(newLanguage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLanguageById = async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLanguage = async (req, res) => {
  try {
    const updatedLanguage = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLanguage) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(updatedLanguage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.partialUpdateLanguage = async (req, res) => {
  try {
    const updatedLanguage = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLanguage) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(updatedLanguage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLanguage = async (req, res) => {
  try {
    const deletedLanguage = await Language.findByIdAndDelete(req.params.id);
    if (!deletedLanguage) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json({ message: 'Language deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

