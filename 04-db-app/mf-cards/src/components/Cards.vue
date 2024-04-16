<template>
  <div>
    <h1 class="text-center font-bold text-3xl my-3">Rick and Morty API</h1>

    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            v-for="personaje in personajes"
            :href="`/personajes/${personaje.id}`"
            :key="personaje.name"
            class="group"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                loading="lazy"
                :src="personaje.image"
                :alt="personaje.name"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{ personaje.species }} | {{ personaje.status }}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ personaje.name }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const personajes = ref([]);

const getPersonajes = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data);
  personajes.value = data.results;
};

onMounted(() => {
  getPersonajes();
});
</script>
