<template>
  <header class="header-wrapper">
    <Drawer :dictionary="dictionary"/>
    <div class="header-content main-wrapper">
      <img class="header-logo" :src="dictionary.header.imgPath" alt="logo">
      <div class="header-input-wrapper">
        <v-text-field
          v-model="searchItem"
          @input="debounceMethod"
          @submit="debounceMethod"
          :label="dictionary.header.inputText"
          @focusout="changeHandler"
          append-icon="mdi-magnify"
          solo
          height="10"
          hide-details
          dense
        ></v-text-field>
        <ul class="search-list" v-show="showList">
          <li v-for="item in selectedCategory"
              class="search-list-item"
              :key="item.title"
              @click="showList = false"
          >
            <p v-if="item">{{ item.title }}<br>{{ item.theme }}</p>
            <img v-if="item" :src="item.covers.main" alt="pic">
            <p v-else>Nothing found</p>
          </li>
        </ul>
      </div>
      <div class="header-userName-wrapper">
        <img :src="dictionary.header.authUser.userPicPath" alt="user">
        <p v-show="!isMobile" class="header-text" v-html="dictionary.header.authUser.name"></p>
        <img v-show="!isMobile" :src="dictionary.header.authUser.bellPicPath" alt="bell">
      </div>
    </div>
  </header>
</template>

<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import Drawer from '@/components/sections/Drawer'
export default {
  name: 'Header',
  components: {
    Drawer
  },
  props: ['dictionary'],
  methods: {
    ...mapActions('data', ['setSelectedCategory']),
    changeHandler (e) {
      e.target.value = ''
      this.searchItem = ''
      this.showList = false
    },
    debounceMethod: _.debounce(function () {
      if (this.searchItem) {
        this.showList = true
        const result = this.allVideos.filter(video => video.title.toLowerCase().includes(this.searchItem.toLowerCase()) || video.theme.toLowerCase().includes(this.searchItem.toLowerCase()))
        if (result) {
          this.setSelectedCategory(result)
        } else this.setSelectedCategory(false)
      }
    }, 500)
  },
  computed: {
    ...mapGetters('data', ['allVideos', 'selectedCategory', 'isMobile'])
  },
  data: () => ({
    showList: false,
    searchItem: ''
  })
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  background-color: #232323;
  .main-wrapper {
    width: 80%;
    margin: 0 auto;
  }

  .header-content {
    display: flex;
    padding: 12px 0;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .header-input-wrapper {
    padding: 0 15px;
    flex-basis: 60%;
    position: relative;
  }

  .search-list {
    position: absolute;
    background: white;
    //border: 1px solid #bbbbbb;
    border-radius: 5px;
    z-index: 99;
    width: 100%;
    left: 0;
  }

  .search-list-item {
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .search-list-item:hover {
    background: #F05858;
  }

  .header-userName-wrapper {
    color: white;
    display: flex;

    p {
      padding: 0 10px;
    }
  }
}
</style>
