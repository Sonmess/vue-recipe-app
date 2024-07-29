<template>
  <header class="bg-white shadow-md h-16 flex items-center gap-2 px-5">
    <router-link :to="{ name: 'home' }" class="inline-flex h-full items-center"
      >Home
    </router-link>
    <menu class="flex gap-4 ml-auto h-full gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full hover:bg-purple-100 transition-colors"
        >Search meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full hover:bg-purple-100 transition-colors"
        >Meals by letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center h-full hover:bg-purple-100 transition-colors"
        >Meals by ingredient
      </router-link>
    </menu>
  </header>
</template>
