const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');
const GardenerController = require('../app/controllers/GardenerController');
const LandscapingController = require('../app/controllers/LandscapingController');

router.get('/', HomeController.homePage);
router.get('/gardener', GardenerController.GardenerPage);
router.get('/login', AuthController.loginPage);
router.get('/gardenerLogin', GardenerController.GardenerLogin);
router.get('/gardenerDetails', LandscapingController.findGardener);
router.get('/gardenerAttendance', LandscapingController.findGardenerAttendance);
router.get('/monthlyRoster', LandscapingController.monthlyRoster);
router.get('/trackRequestbyId', LandscapingController.trackRequestbyId);
router.get('/trackRequestbyStatus', LandscapingController.trackbyStatus);
router.get('/trackEquipRequestbyId', LandscapingController.trackEquipRequestbyId);
router.get('/trackEquipbyStatus', LandscapingController.trackEquipbyStatus);
router.get('/gardenerRoster', LandscapingController.gardenerRoster);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/sign-up', AuthController.signUpPage);
router.post('/sign-up', AuthController.signUp);
router.get('/forgot-password', AuthController.forgotPasswordPage);
router.post('/forgot-password', AuthController.forgotPassword);

module.exports = router; 