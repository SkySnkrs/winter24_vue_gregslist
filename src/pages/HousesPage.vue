<script setup>
import { AppState } from '@/AppState';
import HouseForm from '@/components/HouseForm.vue';
import { housesService } from '@/services/HousesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)

onMounted(() => {
    getHouses()
})

async function getHouses() {
    try {
        await housesService.getHouses()
    }
    catch (error) {
        Pop.error(error);
        logger.log('Houses Page', error)
    }
}



</script>


<template>
    <section class="container">
        <div class="row">
            <div class="col-12 text-start mt-2 p-2">
                <router-link :to="{ name: 'Listing' }">
                    <button class="btn btn-success">List Your House</button>
                </router-link>
            </div>
        </div>
        <div class="row" id="houseListingContainer">
            <div class="col-12">
                <h2>Houses For Sale</h2>
            </div>
        </div>
        <section class="row">
            <div v-for="house in houses" v-bind:key="house.id" class="col-md-6">
                <HouseForm :houseProp="house" />
            </div>
        </section>
    </section>
</template>


<style lang="scss" scoped>
#houseListingContainer {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-bottom: 1em;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
</style>