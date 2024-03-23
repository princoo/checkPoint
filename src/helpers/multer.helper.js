import multer from 'multer';
import path from 'path';

const uploadFile = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.xlsx' && ext !== '.xls') {
    cb(new Error('Only Excel files are allowed (XLSX or XLS)'), false);
    return;
  }
  cb(null, true);
};

const Upload = (req, res, next) => {
  const upload = multer({
    storage: uploadFile,
    fileFilter,
  }).single('excelFile');

  upload(req, res, (err) => {
    if (err) {
      res.status(400).send({ code: 400, message: err.message });
    } else {
      next();
    }
  });
};

export default Upload;
