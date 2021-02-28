<template>
  <div>
    <FaviconChanger :propsIconPath='iconPath'></FaviconChanger>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconPath: '/kr-test.png',
    }
  }
}
</script>

<style>

</style>