<template>
  <div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="animation: push"
      uk-scrollspy="cls: uk-animation-slide-left; target: .uk-slideshow-items; delay: 300; repeat: true">
      <ul class="uk-slideshow-items">

        <li v-for="(item, i) in slideList" :key="i">
          <img :src="item.img_src" :alt="item.img_alt" uk-cover>
          <div
            :class="item.class"
          >
            <h2 class="uk-margin-remove">{{ item.title }}</h2>
            <p class="uk-margin-remove">{{ item.describe }}</p>
          </div>
        </li>
      </ul>

      <div class="uk-light">
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
          uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
          uk-slideshow-item="next"></a>
      </div>

    </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    slideList: Array
  }
}
</script>
<style lang="scss" scoped>

</style>
