<template>
  <section class="flex p-8 flex-col">
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
      >
        {{ letter }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store/index.js";
import axiosClient from "../axiosClient.js";

const meals = computed(() => {
  return store.state.meals;
});
const letters = computed(() => {
  let result = [];
  let i;
  for (i = 65; i <= 90; i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
});

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
