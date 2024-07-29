<template>
  <section class="p-8 pb-0">
    <h1 class="">Search by name</h1>

    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}">
              <img :src="meal.strMealThumb" :alt="meal.strMeal" :title="meal.strMeal" class="rounded-t-xl h-48 object-cover w-full" />
            </router-link>

            <div class="p-3">
              <h3 class="font-bold">{{ meal.strMeal }}</h3>
              <p class="pt-2 line-clamp-5">{{ meal.strInstructions }}</p>
            </div>

            <div class="p-3 flex justify-between items-center gap-5">
              <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white transition:colors">Youtube</a>
              <router-link :to="{name: 'mealDetail', params: {id: meal.idMeal}}" class="px-3 py-2 rounded border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition:colors">View</router-link>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from '../store';
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => {
    return store.state.searchedMeals;
});

const searchMeals = () => {
    store.dispatch('searchMeals', keyword.value);
};

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
})
</script>
