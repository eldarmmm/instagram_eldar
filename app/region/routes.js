const express = require('express')
const router = express.Router();
const {getCities, getCountries} = require('./controller')

router.get('/api/region/countries', getCountries)
router.get('/api/region/cities', getCities)
 
module.exports = router;

