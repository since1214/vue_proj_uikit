<template>
  <div class="hero-container">
    <div class="page-hero uk-inline">
      <video
        :src="bgSrc"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
        class="uk-dark"
      ></video>
      <div class="uk-overlay-primary uk-position-cover"></div>
      <div class="uk-position-center">
        <a href="#modal-media-video" uk-toggle>
          <span class="uk-icon uk-icon-image play-btn"></span>
        </a>
      </div>
    </div>

    <div id="modal-media-video" class="uk-flex-top" uk-modal>
      <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <video :src="src" controls playsinline uk-video></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    bgSrc: String,
    src: String
  }
}
</script>

<style lang="scss" scoped>
.uk-icon-image {
  &.play-btn {
    background-image: $play-btn-image;
    width: 200px;
    height: 200px;
    @media screen and (max-width: 640px) {
      width: 120px;
      height: 120px;
    }
  }
}
.page-hero {
  max-height: calc(100vh - 80px);
  overflow: hidden;
  video {
    margin-top: -80px;
    @media screen and (max-width: 640px) {
      margin-top: 0;
    }
  }
}
</style>
