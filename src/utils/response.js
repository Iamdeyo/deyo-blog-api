const response = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};

export default response;
