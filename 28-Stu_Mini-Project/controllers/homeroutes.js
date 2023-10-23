const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth');


router.get('/',async (req, res) => {
  try {
    const projectData = await Project.findAll();

    const projects = projectData.map
    res.render('homepage', {
        project,

        logged_in: req.session.logged_in,
    });
}
    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // TODO: Add a comment describing the functionality of this property
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});