import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    //cookie only sent over HTTP jo ne client side sikur JS
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    // Preventing Cross-Site Request Forgery (CSRF) attacks
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};
export default generateToken;
