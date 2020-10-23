const Gyms = require('../models/Gyms');
const catchAsync = require('../util/catchAsync');

exports.GetRecommenedGym = async (req, res) => {
  console.log(req.body);
  const gyms = await Gyms.find({
    gymType: req.body.type,
  })
    .select('gymName headerImage slug memberships')
    .limit(3);
  // console.log(gyms.memberships.get('month'));
  res.status(200).json({
    status: 'success',
    results: gyms.length,
    data: {
      gyms,
    },
  });
};

exports.GetGyms = catchAsync(async (req, res) => {
  const gyms = await Gyms.find().select(
    '-staff -locations -description -classes -images'
  );
  res.status(200).json({
    status: 'success',
    results: gyms.length,
    data: {
      gyms,
    },
  });
});

exports.CreateGym = catchAsync(async (req, res) => {
  const gym = await Gyms.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      gym,
    },
  });
});

exports.GetGym = catchAsync(async (req, res) => {
  const gym = await Gyms.findOne({ slug: req.params.slug });
  res.status(200).json({
    status: 'success',
    data: {
      gym,
    },
  });
});

exports.UpdateGym = catchAsync(async (req, res) => {
  const updatedGym = await Gyms.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedGym) {
    res.send('there is no gym with that id');
  }

  res.status(202).json({
    status: 'success',
    data: {
      gym: updatedGym,
    },
  });
});

exports.DeleteGym = catchAsync(async (req, res) => {
  try {
    const gym = await Gyms.findOneAndRemove({ slug: req.params.slug });
    res.status(204).json({
      status: 'success',
      message: `The ${gym.gymName} has been delete`,
    });
  } catch (error) {
    console.log(error);
  }
});
