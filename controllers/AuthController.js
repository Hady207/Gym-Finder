const { promisify } = require('util');

const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: '1h',
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure =
      req.secure || req.headers['x-forwarded-proto'] === 'https';
  }
  res.cookie('jwt_user_token', token, cookieOptions);
  // Remove password from output

  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

const newUserInfo = (req) => {
  const {
    name,
    email,
    password,
    passwordConfirm,
    location,
    height,
    weight,
    gym,
    gymType,
    equipment,
    staff,
  } = req.body;
  const fullname = name.split(' ');
  return (userObj = {
    name: {
      firstName: fullname[0],
      lastName: fullname[1],
    },
    email,
    password,
    passwordConfirm,
    location,
    body: {
      height,
      weight,
    },
    gym,
    preference: {
      gymType,
      equipment,
      staff,
    },
  });
};

exports.signup = async (req, res, next) => {
  const userObj = newUserInfo(req);
  const newUser = await User.create(userObj);
  createSendToken(newUser, 201, req, res);
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return console.log('Please provide email and password');
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password)))
    console.log('Incorrect email or password');

  createSendToken(user, 200, req, res);
};

exports.logout = (req, res, next) => {
  res.cookie('jwt_user_token', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

exports.protect = async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bear')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt_user_token) {
    token = req.cookies.jwt_user_token;
  }

  console.log(token);

  if (!token) {
    return console.log('You are not logged in, Please log in to continue');
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);

  // 3) Check for the decoded user
  const checkedUser = await User.findById(decoded.id);
  if (!checkedUser) {
    res.status(401).json({
      status: 'failed',
      message: 'the jwt signture has been modified',
    });
  }
  // 4) put the user on the request object
  req.user = checkedUser;
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(401).json({
        status: 'fail',
        message: "you don't have the credintials to access this resources",
      });
    }
    next();
  };
};
