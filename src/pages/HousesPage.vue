<script setup>
import { housesService } from '@/services/HousesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';


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
        <div class="row" id="houseListingContainer">
            <div class="col-12">
                <h2>Houses For Sale</h2>
            </div>
        </div>

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