import { path } from '@/constantas/apiPath'

const state = {
  allVideos: [],
  selectedCategory: '',
  classForVideosCards: 'table',
  isMobile: false
}

const mutations = {
  SET_CLASS_FOR_VIDEOS: (state, payload) => {
    state.classForVideosCards = payload
  },
  SET_SELECTED_CATEGORY: (state, payload) => {
    state.selectedCategory = payload
  },
  SET_ALL_VIDEOS: (state, payload) => {
    state.allVideos = payload
  },
  SET_MOBILE_STATE: (state, payload) => {
    state.isMobile = payload
  }
}

const actions = {
  getAllVideos: async ({ commit }) => {
    const response = await fetch(path)
    const data = await response.json()
    await commit('SET_ALL_VIDEOS', data)
  },
  setSelectedCategory: ({ commit }, arrayVideos) => {
    commit('SET_SELECTED_CATEGORY', arrayVideos)
  },
  setClassForVideosCards: ({ commit }, newClass) => {
    commit('SET_CLASS_FOR_VIDEOS', newClass)
  },
  changeMobileState: ({ commit }, boolean) => {
    commit('SET_MOBILE_STATE', boolean)
  }
}

const getters = {
  allVideos: state => state.allVideos,
  newVideos: state => state.allVideos.filter(video => new Date(video.date).getMonth() + 1 === 7),
  popularVideos: state => state.allVideos.filter(video => video.options.popular === true),
  saleVideo: state => state.allVideos.filter(video => video.options.sale === true),
  selectedCategory: state => state.selectedCategory,
  classForVideosCards: state => state.classForVideosCards,
  isMobile: state => state.isMobile
}

export default {
  state,
  mutations,
  actions,
  getters
}
