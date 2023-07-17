const { City } = require('../models/index');

class CityRepository{
    // since we're going to receive objects in the function, we're restructuring it then and there 
    async createCity({ name }){
        //here the mapping to the name key-value pair will be done implicity
        try{
            const city = await City.create({ 
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
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
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    //first we need to fetch exactly what data we want to update
    async updateCity(cityId, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
        } catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;
