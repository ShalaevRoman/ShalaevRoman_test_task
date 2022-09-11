<template>
  <div class="drawer_wrapper">
    <v-app-bar-nav-icon v-show="isMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      left
    >
      <div class="drawer-btn-wrapper main-wrapper">
        <div class="drawer-link-container">
          <v-btn
            text
            tag="a"
            v-for="(link, index) in dictionary.header.navBarInfo.list"
            :key="index + link.id"
            v-html="link.name"
            :to="link.path"
            active-class="nav-link-active"
            width="100%"
            height="100px"
          >
          </v-btn>
        </div>
        <div class="drawer-button-container">
          <v-btn
            text
            tag="a"
            v-html="dictionary.header.navBarInfo.buttonText"
            width="100%"
            height="100px"
            color="white"
          >
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Drawer',
  props: ['dictionary'],
  data: () => ({
    group: null,
    drawer: false
  }),
  computed: {
    ...mapGetters('data', ['isMobile'])
  }
}
</script>

<style scoped lang="scss">
.v-app-bar__nav-icon {
  color: white !important;
  position: absolute;
  height: 50px;
  width: 50px;
  top: 7px;
  left: 0;
}

.drawer-btn-wrapper,
.drawer-link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.nav-link-active {
  background: #F05858;
}

.drawer-button-container {
  background: #ED3434;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
