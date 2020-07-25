const Gyms = require('../models/Gyms');

exports.GetGyms = async (req, res) => {
  try {
    const gyms = await Gyms.find();
    res.status(200).json({
      status: 'success',
      results: gyms.length,
      data: {
        gyms,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.CreateGym = async (req, res) => {
  try {
    const gym = await Gyms.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        gym,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.GetGym = async (req, res) => {
  try {
    const gym = await Gyms.findOne({ slug: req.params.slug });
    res.status(200).json({
      status: 'success',
      data: {
        gym,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.UpdateGym = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

exports.DeleteGym = async (req, res) => {
  try {
    const gym = await Gyms.findOneAndRemove({ slug: req.params.slug });
    res.status(204).json({
      status: 'success',
      message: `The ${gym.gymName} has been delete`,
    });
  } catch (error) {
    console.log(error);
  }
};
