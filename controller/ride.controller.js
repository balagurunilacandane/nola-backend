const mockData = require('../constants/mock');

const rideController = {};

/**
 * Get Ride
 * this function is used to get the list of the rides
 */
rideController.getRides = async(req, res, next) => {
    var data = mockData.taxi;
    res.send({
        meta: {
            status: 200,
            message: "success"
        },
        data: data
    })
}

module.exports = rideController;