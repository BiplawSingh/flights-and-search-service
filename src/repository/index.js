/* since there are going to be multiple repos like city repo, flight repo etc.
   we'll be passing each repo as a key value pair to services layer 
*/

module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository')
}