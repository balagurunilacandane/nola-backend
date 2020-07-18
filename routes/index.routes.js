const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller.js');

/**
 * rides Api
 * to the list of the taxi
 */
 router.get('/rides', controller.Ride.getRides);

/**
 * booking and unbooking api
 * these are the api used for updating the taxi availablitiy
 */
 router.put('/book/:id', controller.Book.updateBooking);
 router.put('/unbook/:id', controller.Unbook.updateUnbooking);

module.exports = router;