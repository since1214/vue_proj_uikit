<template>
  <div class="home">
    <PageHero
      bgSrc="https://cdn.shopify.com/s/files/1/1036/4113/t/41/assets/what-is-PITAKA.mp4?v=14968913825085196816"
      src="https://cdn.shopify.com/s/files/1/1036/4113/t/32/assets/what-is-PITAKA-fv.mp4"
    />
    <GridSection
      h3_title="First Section"
      p_describe="First Section's Describe"
      img_src="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80"
      img_src_set="https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=650&h=433&q=80 650w, https://images.unsplash.com/photo-1522201949034-507737bce479?fit=crop&w=1300&h=866&q=80 1300w"
      img_alt="First Section Img"
    />
    <SlideShow v-bind:slideList="slidelist" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHero from '@/components/PageHero.vue'
import GridSection from '@/components/GridSection.vue'
import SlideShow from '@/components/SlideShow.vue'

const imgUrlPhoto = require('@/assets/images/photo.jpg')
const imgUrlDark = require('@/assets/images/dark.jpg')
const imgUrlLight = require('@/assets/images/light.jpg')

export default {
  name: 'Home',
  data: function () {
    return {
      slidelist: [
        {
          id: 1,
          img_src: imgUrlPhoto,
          img_alt: '',
          tilte: 'Center',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          class: 'uk-position-center uk-position-small uk-text-center uk-light'
        },
        {
          id: 2,
          img_src: imgUrlDark,
          img_alt: '',
          tilte: 'Bottom',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          class: 'uk-position-bottom uk-position-medium uk-text-center uk-light'
        },
        {
          id: 3,
          img_src: imgUrlLight,
          img_alt: '',
          tilte: 'Overlay Bottom',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          class: 'uk-overlay uk-overlay-primary uk-position-bottom uk-text-center'
        },
        {
          id: 4,
          img_src: imgUrlDark,
          img_alt: '',
          tilte: 'Overlay Bottom Right',
          describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          class: 'uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small'
        }
      ]
    }
  },
  components: {
    PageHero,
    GridSection,
    SlideShow
  }
}
</script>
