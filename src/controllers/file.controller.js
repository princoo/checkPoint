import XLSX from 'xlsx';

const uploadFile = (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ code: 400, message: 'Please provide a data file' });
  }
  const workbook = XLSX.readFile(req.file.path);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  return res.status(200).json({ code: 200, message: jsonData });
};

export default { uploadFile };
