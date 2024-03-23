const uploadFile = (req, res) => {
  res.status(200).json({ code: 200, message: req.file });
  console.log('first');
};

export default { uploadFile };
