const express = require('express');
const router = express.Router()



// @route       GET api/auth
//@dec          Test Route 
//@acesss       Public
router.get('/', (req, res) => res.send('auth route'))



module.exports = router