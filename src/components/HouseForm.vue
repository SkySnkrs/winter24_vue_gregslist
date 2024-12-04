<script setup>
import { House } from '@/models/House';


const props = defineProps({
    houseProp: { type: House, required: true }
})


</script>


<template>
    <div class="row" id="houseListing">
        <div class="col-md-5 rounded p-2">
            <img v-if="houseProp.imgUrl != undefined" :src="houseProp.imgUrl" alt=""
                class="img-fluid shadow-lg rounded">
            <div class="text-start mt-2 p-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    :data-bs-target="'#' + houseProp.id">
                    See More Info!
                </button>
            </div>
        </div>
        <div class="col-md-7 text-center">
            <p class="fs-6">{{ houseProp.description }}
            </p>
        </div>
        <div class="modal fade" :id="houseProp.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Price ${{ houseProp.price }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Levels: {{ houseProp.levels }}</p>
                        <p>Bedrooms: {{ houseProp.bedrooms }}</p>
                        <p>Bathrooms: {{ houseProp.bathrooms }}</p>
                        <p>Year: {{ houseProp.year }}</p>
                        <p>Listed By: {{ houseProp.creator.name }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    object-fit: cover;
    object-position: center;
    max-height: 25dvh;
    aspect-ratio: 1/1;
    padding: 1em;
    border-radius: 8px;
}

#houseInformation {
    overflow-y: scroll;
    max-height: 30dvh;
}

#houseListing {
    border-radius: 8px;
    box-shadow: 1px 1px darkgrey;
    border: 1px solid black;
    background-color: whitesmoke;
    margin: 0.5em;
    padding: 0.5em;
    min-height: 30dvh;
    display: flex;
    align-items: center;
}
</style>