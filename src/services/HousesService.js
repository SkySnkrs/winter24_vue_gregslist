import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
    async createHouse(value) {
        const response = await api.post('api/houses', value)
        logger.log(response)
    }

    async getHouses(){
        const response = await api.get('api/houses')
        logger.log('getHouses Request Successful, Drawing Data Now!')
        const houses = response.data.map(house => new House(house))
        AppState.houses = houses
        logger.log('Appstate Updated House Listings!')
    }
}

export const housesService = new HousesService()