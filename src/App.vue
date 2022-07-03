<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RouterView v-slot="{ Component }">
    <component
      :is="Component"
      msg="Hello Vue 3 + TypeScript + Vite"
    ></component>
  </RouterView>
</template>

<style lang="less">
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  button {
    margin-bottom: 20px;
  }
}
</style>
