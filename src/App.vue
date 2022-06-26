<script setup lang="ts"></script>

<template>
  <RouterView v-slot="{ Component }">
    <!--    <Suspense>-->
    <div class="main-layout">
      <component :is="Component"></component>
    </div>
    <!--    </Suspense>-->
  </RouterView>
</template>

<style>
.main-layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
