const { validationResult } = require("express-validator");

exports.validatorErrorChecker = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(409).json({ errors: errors.array() });
  }
  next();
}