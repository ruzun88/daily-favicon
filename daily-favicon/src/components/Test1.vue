<template>
  <div>
    test 1
  </div>
</template>

<script>
export default {
created() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/mn-test.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  },
}
</script>

<style>

</style>