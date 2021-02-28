<template>
  <div>
    <FaviconChanger :propsIconPath='iconPath'></FaviconChanger>
  </div>
</template>

<script>
// import FaviconChanger from './FaviconChanger.vue';
export default {
  // components: { FaviconChanger },
  data() {
    return {
      iconPath: '/mn-test.png',
    }
  }
}
</script>

<style>

</style>