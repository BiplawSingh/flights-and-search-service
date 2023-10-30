function validateTime(departure, arrival){
    let departureTime = new Date(departure);
    let arrivalTime = new Date(arrival);

    return departureTime < arrivalTime;
}

module.exports = {
    validateTime
}