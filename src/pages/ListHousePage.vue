<script setup>
import { AppState } from '@/AppState';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, ref } from 'vue';


async function createHouseListing() {
    logger.log('Creating Car')
}
const account = computed(() => AppState.account)

function handleInputValidation(event) {
    const input = event.target;
    const min = parseInt(input.getAttribute('min'), 10);
    const max = parseInt(input.getAttribute('max'), 10);
    let value = parseInt(input.value, 10);

    if (min == 1500) {
        if (input.value.length >= 4) {
            if (input.value < 1500) {
                Pop.error(`Minimum Value is ${min}, Please Fix The Date!`)
            }
        } else {
            return
        }
    } else if (value < min) {
        value = min;
        Pop.error(`Minimum Value is ${min},  Please Refrain From Attempting Lower Inputs!`)
    }

    if (value > max) {
        value = max;
        Pop.error(`Maximum Value is ${max}, Please Refrain From Attempting Higher Inputs!`)
    }

    input.value = value;
}

const editableHouseData = ref({
    bedrooms: 1,
    bathrooms: 1,
    year: 1500,
    price: 0,
    levels: 1,
    imageUrl: '',
    description: ''
})


</script>


<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mt-4 mb-1">List Your House Now!</h2>
                <div v-if="account == null">
                    <p>Please Sign In To List Your Home!</p>
                </div>
                <div class="p-3">
                    <div v-if="account != null" class="p-2 mt-2 bg-dark shadow-large rounded HouseForm">
                        <form @submit.prevent="createHouseListing()" class="container-fluid">
                            <div class="form-floating my-2 row justify-content-around">
                                <div class="form-floating col-md-6 mt-2">
                                    <input v-model="editableHouseData.bedrooms" type="number" class="form-control"
                                        id="bedrooms" placeholder="Bedrooms..." required max="100" min="1"
                                        @input="handleInputValidation" />
                                    <label class="mx-2" for="bedrooms">Bedrooms:</label>
                                </div>
                                <div class="form-floating col-md-6 mt-2">
                                    <input v-model="editableHouseData.bathrooms" type="number" class="form-control"
                                        id="bathrooms" placeholder="Bathrooms..." required max="100" min="1"
                                        @input="handleInputValidation" />
                                    <label class="mx-2" for="bathrooms">Bathrooms:</label>
                                </div>
                            </div>
                            <div class="form-floating my-2 row justify-content-around">
                                <div class="form-floating col-md-6 mt-2">
                                    <input v-model="editableHouseData.year" type="number" class="form-control" id="year"
                                        placeholder="Year..." required min="1500" max="2025"
                                        @input="handleInputValidation" />
                                    <label class="mx-2" for="year">Year Constructed:</label>
                                </div>
                                <div class="form-floating col-md-6 mt-2">
                                    <input v-model="editableHouseData.price" type="number" class="form-control"
                                        id="price" placeholder="Price..." required min="0" max="1000000"
                                        @input="handleInputValidation" />
                                    <label class="mx-2" for="price">Listing Price:</label>
                                </div>
                            </div>
                            <div class="form-floating my-2 row justify-content-around">
                                <div class="form-floating col-md-6 mt-2">
                                    <input v-model="editableHouseData.levels" type="number" class="form-control"
                                        id="levels" placeholder="levels..." required min="1" max="100"
                                        @input="handleInputValidation" />
                                    <label class="mx-2" for="levels">Levels:</label>
                                </div>
                                <div class="form-floating col-md-6 mt-2">
                                    <input v-model="editableHouseData.imageUrl" type="text" class="form-control"
                                        id="imageUrl" placeholder="Image URL..." min="0" maxlength="500" />
                                    <label class="mx-2" for="imageUrl">Image URL:</label>
                                </div>
                            </div>
                            <div class="form-floating my-2 row justify-content-center">
                                <div class="form-floating col-md-12 mt-2">
                                    <textarea v-model="editableHouseData.description" type="text" class="form-control"
                                        id="description" placeholder="description..."> </textarea>
                                    <label class="mx-2 text-dark" for="description">Description:</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-end p-2 mt-2">
                                    <button class="btn btn-success">Create Listing</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
.HouseForm {
    margin-top: 1em;
    min-height: 65dvh;
}

#Description {
    min-height: 25dvh;
}
</style>