const { CityService } = require('../services/index');

const cityService = new CityService();

/**
 * POST -> for creating
 * data -> req.body
 */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create city',
            err: error
        });
    }
}

// DELETE -> /city/:id -> can be found in url params
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted the city',
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete city',
            err: error
        });
    }
}

// GET -> /city/:id 
const get = async(req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the city',
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the city',
            err: error
        });
    }
}

//PATCH -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all the cities',
            err: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch cities',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}