
const mockData = require('../constants/mock');
const bookController = {};

/**
 * Booking
 * This function is invoked when the user booking the taxi
 */
bookController.updateBooking = async(req, res, next) => {
    if(req.params.id) {
       var data = [];
       mockData.taxi.filter((item) => {
            if(item.id === req.params.id) {
                data.push({
                    ...item,
                    isAvailable: false,
                })
            }  else {
                data.push(item)
            } 
        })
        return res.send({
            meta: {
                status: 200,
                message: "Booked the taxi successfully"
            },
            data: data
        })
    }
    else{
        return res.send({
            meta: {
                status: 400,
                message: "Bad Request! Please pass the id"
            },
        })
    }
}



module.exports = bookController;