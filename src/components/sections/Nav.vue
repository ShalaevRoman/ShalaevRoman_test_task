<template>
  <div class="nav-wrapper">
    <div class="nav-content">
      <v-card
        class="mx-auto overflow-hidden"
      >
        <v-app-bar
          color="#414141"
          dark
          height="60px"
        >
          <div class="main-btn-wrapper main-wrapper">
            <div class="main-link-container">
              <v-btn
                text
                tag="a"
                v-for="(link, index) in dictionary.header.navBarInfo.list"
                :key="index + link.id"
                height="100%"
                v-html="link.name"
                :to="link.path"
                active-class="nav-link-active"
              >
              </v-btn>
            </div>
            <div class="main-button-container">
              <v-btn
                text
                tag="a"
                v-html="dictionary.header.navBarInfo.buttonText"
              >
              </v-btn>
            </div>
          </div>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
        >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: ['dictionary'],
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
}

.main-wrapper {
  width: 80%;
  margin: 0 auto;
  height: 100%;
}

.main-btn-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-link-container {
  height: 100%;

  .nav-link-active {
    background: #ED3434;
  }
  a {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }
}

.main-button-container {
  height: 40px;

  a {
    background: #ED3434;
    border-radius: 5px;
    width: 340px;
  }
}
</style>
