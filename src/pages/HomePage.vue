<script setup>

</script>

<template>
  <div class="container">
    <section class="row mb-3">
      <div class="col-12">
        <h1 class="text-center">Gregslist</h1>
      </div>
    </section>

    <section class="row">
      <div class="col-12">
        <div class="d-flex justify-content-center">
          <router-link :to="{ name: 'Cars' }">
            <button class="btn btn-success mx-2">Cars 🚗</button>
          </router-link>
          <router-link :to="{ name: 'Houses' }">
            <button class="btn btn-primary mx-2">Houses 🏘️</button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
