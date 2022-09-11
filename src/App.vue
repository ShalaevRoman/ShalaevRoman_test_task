<template>
  <v-app>
    <Header :dictionary="dictionary"/>
    <Nav :dictionary="dictionary"/>
    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import dictionary from '@/dictionary/dictionaryUA'
import Nav from '@/components/sections/Nav'
import UAParser from 'ua-parser-js'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Nav,
    Header
  },
  methods: {
    ...mapActions('data', ['getAllVideos', 'setClassForVideosCards', 'changeMobileState'])
  },
  data: () => ({
    dictionary: dictionary
  }),
  async mounted () {
    await this.getAllVideos()
    const classVideo = localStorage.getItem('class')
    if (classVideo) {
      this.setClassForVideosCards(classVideo)
    }
    const { type } = new UAParser().getDevice()
    const isMobile = ['mobile', 'tablet'].includes(type)
    this.changeMobileState(isMobile)
  }
}
</script>

<style lang="scss">
@import '../css/res.css';
@import '../css/adaptive.css';

.v-application {
  height: 100vh;
}
</style>
