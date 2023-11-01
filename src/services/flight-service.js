const { FlightRepository, AirplaneRepository } = require('../repository/index');

const { validateTime } = require('../utils/helper');

class FlightService {

    constructor(){
        //creating object of AirplaneRepo class
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if( !validateTime(data.departureTime, data.arrivalTime) ){
                throw { error: 'Arrival time cannot be lesser than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
    }

    async getAllFlightData(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw(error);
        }
        
    }
}

module.exports = FlightService;

/*
the data that we will recieve will be of this type:
flightNumber, airplaneId, etc... 
but the number of seats will be fetched from Airplane table
*/

