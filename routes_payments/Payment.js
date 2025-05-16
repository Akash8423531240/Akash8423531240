const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.post('/create', auth.verifyToken, paymentController.createPaymentSession);
router.post('/verify', paymentController.verifyPayment);

module.exports = router;
