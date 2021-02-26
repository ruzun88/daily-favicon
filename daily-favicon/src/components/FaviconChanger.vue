<script>
export default {
  props: ['propsIconPath'],
  created() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = this.propsIconPath;
    document.getElementsByTagName('head')[0].appendChild(link);

    var link_apple = document.querySelector("link[rel*='apple-touch-icon']") || document.createElement('link');
    link_apple.sizes = '180x180';
    link_apple.rel = 'apple-touch-icon';
    link_apple.href = this.propsIconPath;
    document.getElementsByTagName('head')[0].appendChild(link_apple);
  },
  render() {
    return true
  },
}
</script>