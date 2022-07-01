<script setup lang="ts">
const msg = 'hello world'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <!--    <Suspense>-->
    <div class="main-layout" style="position: relative; color: red;">
      <component :is="Component"></component>
    </div>
    <!--    </Suspense>-->
  </RouterView>
</template>

<style lang="less">
.main-layout {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.test-div {
  position: absolute;
  z-index: 1;
  display: flex;
  width: 100px;
  padding: 9px;
  font-size: 18px;
  color: red;
  cursor: pointer;

  .ant-card-grid-hoverable:hover {
    box-shadow:
      0 3px 6px -4px rgb(0 0 0 / 48%),
      0 6px 16px 0 rgb(0 0 0 / 32%),
      0 9px 28px 8px rgb(0 0 0 / 20%);
  }

  .ant-card-grid {
    box-shadow:
      1px 0 0 0 #434343,
      0 1px 0 0 #434343,
      1px 1px 0 0 #434343,
      1px 0 0 0 #434343 inset,
      0 1px 0 0 #434343 inset;
  }

  .ant-calendar-selected-day .ant-calendar-date {
    color: rgb(0 0 0 / 80%);
  }
}
</style>
