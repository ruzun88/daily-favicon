<template>
  <div>
    <favicon-changer :propsIconPath='iconPath'></favicon-changer>
  </div>
</template>

<script>
import FaviconChanger from './FaviconChanger.vue';
export default {
  components: { FaviconChanger },
  data() {
    return {
      iconPath: '/kr-test.png',
    }
  }
}
</script>

<style>

</style>