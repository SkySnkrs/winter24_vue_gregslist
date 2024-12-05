import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"

class HousesService {
    async createHouse(value) {
        const response = await api.post('api/houses', value)
        const house = new House(response.data)
        AppState.houses.push(house)
        logger.log(house)
    }

    async deleteHouse(houseId){
        await api.delete(`api/houses/${houseId}`)
        const houseIndex = AppState.houses.findIndex(house => houseId == house.id)
        if (houseIndex == -1){
            throw new Error('hey lil bro you messed something up in Delete House')
        }
        AppState.houses.splice(houseIndex, 1)

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