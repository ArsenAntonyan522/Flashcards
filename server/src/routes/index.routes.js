const router = require('express').Router(); 
const catRoutes = require('./cat.routes'); 
const manRoutes = require('./man.routes');
const schoolRoutes = require('./school.routes');
const formatResponse = require('../utils/formatResponse'); 

router.use('/cats', catRoutes); 
router.use('/men', manRoutes); 
router.use('/schools', schoolRoutes)

router.use('*', (req, res) => {
  res.status(404).json(formatResponse(404, 'Not found'));
});

module.exports = router;