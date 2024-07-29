<template>
  <section class="w-[800px] mx-auto flex justify-center flex-col">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img
      class="w-full object-fit"
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      :title="meal.strMeal"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div><strong>Category:</strong> {{ meal.strCategory }}</div>
      <div><strong>Area:</strong> {{ meal.strArea }}</div>
      <div><strong>Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul>
                <li v-for="(ingredient, index) in mealIngredients" :key="index">
                    {{ ingredient }}
                </li>
            </ul>
        </div>

        <div>
            <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        </div>
    </div>
    <!-- <pre>{{ meal }}</pre> -->
  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();

const meal = computed(() => {
  return store.state.mealDetail;
});

const mealIngredients = computed(() => {
    let ingredients = [];
    if (meal) {
        let index = 1;
        let lastIngredient = '';
        do {
            const key = 'strIngredient' + index;
            lastIngredient = meal.value[key] || '';
            if (lastIngredient) {
                ingredients.push(lastIngredient);
                index++;
            }
        } while(lastIngredient.length > 0);
    }
    return ingredients;
});

const fetchMealDetail = (mealId) => {
  store.dispatch("fetchMealDetail", mealId);
};

onMounted(() => {
  const mealId = route.params.id;
  fetchMealDetail(mealId);
});
</script>
