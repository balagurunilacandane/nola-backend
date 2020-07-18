const mockData = require('../constants/mock')
const io = require('socket.io')(4000);
const socketLib = {}
io.on('connection', socket => {
    /**
     * socket listening on booking
     */
    socket.on('book', function (id, paramsData) {
        var bookData = [];
        if (paramsData && paramsData.length) {
            paramsData.filter((item) => {
                if (item.id == id) {
                    bookData.push({
                        ...item,
                        isAvailable: false
                    })
                } else {
                    bookData.push(item)
                }
            })
        } else {
            mockData.taxi.filter((item) => {
                if (item.id == id) {
                    bookData.push({
                        ...item,
                        isAvailable: false
                    })
                } else {
                    bookData.push(item)
                }
            })
        }
        /**
         * socket emiting the book value
         */
        socket.emit('recieveBookingData', bookData)
    })

    /**
      * socket listening on unbooking
      */
    socket.on('unbook', function (id, paramsData) {
        var unbookData = [];
        if (paramsData && paramsData.length) {
            paramsData.filter((item) => {
                if (item.id == id) {
                    unbookData.push({
                        ...item,
                        isAvailable: true
                    })
                } else {
                    unbookData.push(item)
                }
            })
        } else {
            mockData.taxi.filter((item) => {
                if (item.id == id) {
                    unbookData.push({
                        ...item,
                        isAvailable: true
                    })
                } else {
                    unbookData.push(item)
                }
            })
        }
        /**
         * socket emiting the unbook value
         */
        socket.emit('recieveUnbookingData', unbookData)
    })
});
