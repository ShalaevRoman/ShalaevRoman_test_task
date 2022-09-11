<template>
  <div class="allVideos-wrapper">
    <div v-if="allVideos" class="allVideos-content main-wrapper">
      <div v-if="!isMobile" class="allVideos-category">
        <v-list>
          <v-list-group
            v-for="item in dictionary.subNavList"
            :key="item.title"
            v-model="item.active"
            color="secondary"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(key, i) in item.items"
              :key="key.title + i"
            >
              <v-list-item-content>
                <v-list-item-title @click="setCategory(key.type)" class="subNav">{{ key.title + ' ' + `(${countVideos(key.type)})` }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </div>
      <div class="allVideos-list-wrapper">
        <h1 class="list-title" v-text="pageTitle"></h1>
        <div class="list-inputButton-wrapper">
          <div>
            <v-select
              v-model="videoCategory"
              :items="dictionary.allVideos.searchItems"
              :label="dictionary.allVideos.label"
              @change="setCategory(videoCategory)"
              item-text="name"
              item-value="value"
              dense
              solo
              hide-details
              hide-selected
              color="secondary"
            ></v-select>
          </div>
          <v-btn @click="setClass('table')" text><img :src="dictionary.allVideos.columnImg" alt="column"></v-btn>
          <v-btn @click="setClass('row')" text><img :src="dictionary.allVideos.rowImg" alt="row"></v-btn>
        </div>
        <div :class="classForVideosCards" class="list-items-wrapper">
          <div v-for="(video) in items || allVideos"
            :key="video.id"
             class="list-item"
          >
            <img class="video-img" :src="video.covers.main" alt="pic">
            <div class="text-wrapper">
              <p>{{ getDate(video.date) }}</p>
              <h2 v-html="video.title"></h2>
              <span>какой-то рейтинг</span>
            </div>
            <div class="button-wrapper">
              <button type="button" class="btn" :class="[video.access ? 'access' : 'forbidden']">Дивитися</button>
              <button type="button" class="imgBtn">
                <img class="imgHeart" :src="dictionary.allVideos.heartImg" alt="heart">
              </button>
            </div>
          </div>
        </div>
        <Paginate
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'paginate-wrapper'"
          :page-link-class="'paginate-link'"
          :page-class="'paginate-item'"
          :active-class="'paginate-item__active'"
          :prev-link-class="'paginate-link__prev'"
          :next-link-class="'paginate-link__next'"
        />
      </div>
    </div>
    <div v-else><h1>server data is being loaded</h1></div>
  </div>
</template>

<script>
import paginateMixin from '@/mixins/paginate.mixin'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Main',
  props: ['dictionary'],
  mixins: [paginateMixin],
  computed: {
    ...mapGetters('data', ['allVideos', 'newVideos', 'popularVideos', 'saleVideo', 'classForVideosCards', 'isMobile'])
  },
  methods: {
    ...mapActions('data', ['setSelectedCategory', 'setClassForVideosCards']),
    countVideos (val) {
      switch (val) {
        case 'all':
          return this.allVideos.length
        case 'new':
          return this.newVideos.length
        default:
          return 0
      }
    },
    setClass (classForVideoCards) {
      localStorage.setItem('class', classForVideoCards)
      this.setClassForVideosCards(classForVideoCards)
    },
    getDate (date) {
      const dateToString = new Date(date)
      const year = dateToString.getFullYear()
      const month = dateToString.toLocaleString('ua', { month: 'long' })
      const day = dateToString.getDate()
      const result = `${day} ${month} ${year} р`
      return result
    },
    setCategory (category) {
      switch (category) {
        case 'all':
          this.setupPagination(this.allVideos)
          this.pageTitle = 'Усі відео'
          break
        case 'popular':
          this.setupPagination(this.popularVideos)
          this.pageTitle = 'Популярні'
          break
        case 'new':
          this.setupPagination(this.newVideos)
          this.pageTitle = 'Нові відео'
          break
        case 'sale':
          this.setupPagination(this.saleVideo)
          this.pageTitle = 'Розпродаж'
          break
      }
    }
  },
  watch: {
    allVideos () {
      this.setupPagination(this.allVideos)
    }
  },
  data: () => ({
    videoCategory: 'all',
    pageTitle: 'Усі відео'
  }),
  mounted () {
    this.setCategory(this.videoCategory)
  }
}
</script>

<style lang="scss" scoped>
//paginate
.paginate-wrapper {
  display: flex;
  align-self: center;
  align-items: center;
  background: white;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #C4C4C4;
  margin: 80px 0;
}

.allVideos-wrapper {
  background: #E8E8E8;
  height: 100%;

  .allVideos-content {
    display: flex;
  }

  .allVideos-category {
    flex-basis: 260px;
    background: #FFFFFF;
    box-shadow: 0px 64px 44px rgba(0, 0, 0, 0.1);
  }

  .v-list-group  {
    border: 2px solid #E5E5E5;
    margin: 10px;
    background: #E5E5E5;
    border-radius: 4px;
  }

  .v-list-item__title {
    font-weight: 700;
    font-size: 14px;
  }

  .subNav {
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
  }

  .subNav:hover {
    color: #ED3434;
  }

  .allVideos-list-wrapper {
    width: 100%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  .list-title {
    margin: 18px 0;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
    color: #3F3F3F;
    border-bottom: 1px solid #807d7d;
  }

  .list-inputButton-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      width: 150px;
      margin-right: 20px;
    }

    .v-btn {
      width: 50px;
      height: 50px;
      min-width: 0;
    }
  }

  .row {
    display: flex;
    flex-direction: column;

    .list-item {
      margin: 25px 0;
      border-radius: 10px;
      width: 100%;
      height: 160px;
      background: white;
      display: flex;
      align-items: center;

      .video-img {
        width: 173px;
        border-radius: 10px 0 0 10px;
      }

      .text-wrapper {
        padding: 5px;
        margin-left: 10px;

        p {
          color: red;
          border-radius: 5px;
        }

        span {
        }

        h2 {
          padding-top: 25px;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
        }
      }

      .button-wrapper {
        margin: 10px 0;
        margin-left: auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .imgHeart {
          width: 24px;
          height: 24px;
        }

        .forbidden {
          background: #ED3434;
          color: white;
        }

        .btn {
          width: 180px;
          height: 35px;
          border-radius: 5px;
          border: 1px solid gray;
        }

        .imgBtn {
          margin-left: 10px;
        }
      }
    }
  }

  .table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .list-item {
      margin: 20px;
      border-radius: 10px;
      width: 260px;
      height: 430px;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      .video-img {
        width: 100%;
        border-radius: 10px 10px 0 0;
      }

      .text-wrapper {
        width: 100%;
        padding: 5px;

        p {
          position: absolute;
          top: 53%;
          left: 45px;
          padding: 5px 25px;
          color: red;
          background: white;
          border-radius: 5px;
        }

        span {
          display: block;
          text-align: center;
        }

        h2 {
          padding-top: 25px;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          text-align: center;
        }
      }

      .button-wrapper {
        margin: 10px 0;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .imgHeart {
          width: 24px;
          height: 24px;
        }

        .forbidden {
          background: #ED3434;
          color: white;
        }

        .btn {
          width: 180px;
          height: 35px;
          border-radius: 5px;
          border: 1px solid gray;
        }
      }
    }
  }
}
</style>
