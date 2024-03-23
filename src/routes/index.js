import express from 'express';
import fileController from '../controllers/file.controller';
import asyncWrapperHelper from '../helpers/asyncWrapper.helper';
import Upload from '../helpers/multer.helper';
import validate from '../middlewares/validation/validation.middleware';
import fileUpload from '../utils/validationSchemas/fileUploadSchema';

const fileRouter = express.Router();

fileRouter.post(
  '/file/upload',
  Upload,
  validate(fileUpload.fileUploadSchema),
  asyncWrapperHelper(fileController.uploadFile),
);

export default fileRouter;
