import Joi from 'joi';
// import errorMessage from '../errorMessage.util';

const fileUploadSchema = Joi.object().keys({
  excelFile: Joi.any()
    .required()
    .messages({
      'any.required': 'Please select an Excel file.',
      'any.invalid':
        'Please select a valid Excel file with .xlsx or .xls extension.',
    })
    .custom((value, helpers) => {
      if (!value || !value.originalname.match(/\.(xlsx|xls)$/)) {
        return helpers.error('any.invalid');
      }
      return value;
    }),
});

export default { fileUploadSchema };
