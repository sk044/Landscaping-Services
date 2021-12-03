exports.GardenerPage = (req, res, next) => {
	res.render('gardener');
};

exports.GardenerLogin = (req, res, next) => {
	res.render('gardenerLogin',{layout: 'login_layout', loginPage: true, pageTitle: 'Login'});
};
