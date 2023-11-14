import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// Middleware function to protect routes/ kerkim per JWT
const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  // check nese token ekziston
  if (token) {
    try {
      // verifiko me jwt secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Ffind user ne db prej decoded JWT
      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      console.error(error);

      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };
