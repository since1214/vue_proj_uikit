<template>
  <div class="uk-section uk-flex uk-flex-middle" uk-height-viewport="expand: true">
    <div class="uk-child-width-1-2@m uk-grid-match uk-flex uk-flex-middle" uk-grid>
      <div>
        <div
          class="uk-card uk-card-body"
          uk-scrollspy="cls: uk-animation-slide-left; repeat: true"
        >
          <h3 class="uk-card-title" uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">{{ h3_title }}</h3>
          <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">{{ p_describe }}</p>
        </div>
      </div>
      <div>
        <div
          class="uk-card uk-flex uk-flex-center@m uk-flex-right@l"
          uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
        >
          <img
            :data-src="img_src"
            :data-srcset="img_src_set"
            width="650"
            height="433"
            :alt="img_alt"
            uk-img
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridSection',
  props: {
    h3_title: String,
    p_describe: String,
    img_src: String,
    img_src_set: String,
    img_alt: String
  }
}
</script>
<style lang="scss" scoped>
.uk-grid{
  .uk-card-body{
    padding-left:10%
  }
}
</style>
