const { City } = require('../models/index');

class CityRepository{
    // since we're going to receive objects in the function, we're restructuring it then and there 
    async createCity({ name }){
        try{
            const city = await City.create({ name });
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({ 
              where: {
                id: cityId
              }  
            });
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;
