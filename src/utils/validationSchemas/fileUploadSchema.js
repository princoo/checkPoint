import Joi from 'joi';
import errorMessage from '../errorMessage.util';

const fileUploadSchema = Joi.object().keys({
  excelFile: Joi.binary().min(1).messages(errorMessage('image')),
});

export default { fileUploadSchema };
