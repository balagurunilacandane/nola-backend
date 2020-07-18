const mockData = require('../constants/mock');
const unbookController = {};

/**
 * Unbooking
 * This function is invoked when the user unbooking the taxi
 */
unbookController.updateUnbooking = async(req, res, next) => {
    if(req.params.id) {
        var data = [];
        mockData.taxi.filter((item) => {
             if(item.id === req.params.id) {
                 data.push({
                     ...item,
                     isAvailable: true,
                 })
             }  else {
                 data.push(item)
             } 
         })
         res.send({
             meta: {
                 status: 200,
                 message: "unbooked the taxi successfully"
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

module.exports = unbookController;