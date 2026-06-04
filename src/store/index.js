import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bTitle: '',
    bFoot: true,
    bLoading: false,
    navIndex: 'top',
    newItem: 'http://mini.eastday.com/mobile/190121151817438.html',
    topName: '主页',
    newsList: []
  },
  getters: {
    bTitle: (state) => state.bTitle,
    bFoot: (state) => state.bFoot,
    bLoading: (state) => state.bLoading,
    navIndex: (state) => state.navIndex,
    newItem: (state) => state.newItem,
    topName: (state) => state.topName,
    newsList: (state) => state.newsList
  },
  mutations: {
    SET_TITLE(state, payload) {
      state.bTitle = payload;
    },
    SET_FOOT(state, payload) {
      state.bFoot = payload;
    },
    SET_LOADING(state, payload) {
      state.bLoading = payload;
    },
    SET_NAV_INDEX(state, payload) {
      state.navIndex = payload;
    },
    SET_NEW_ITEM(state, payload) {
      state.newItem = payload;
    },
    SET_TOP_NAME(state, payload) {
      state.topName = payload;
    },
    SET_NEWS_LIST(state, payload) {
      state.newsList = payload;
    }
  },
  actions: {
    setTitle({ commit }, payload) {
      commit('SET_TITLE', payload);
    },
    setFoot({ commit }, payload) {
      commit('SET_FOOT', payload);
    },
    setLoading({ commit }, payload) {
      commit('SET_LOADING', payload);
    },
    setNavIndex({ commit }, payload) {
      commit('SET_NAV_INDEX', payload);
    },
    setNewItem({ commit }, payload) {
      commit('SET_NEW_ITEM', payload);
    },
    setTopName({ commit }, payload) {
      commit('SET_TOP_NAME', payload);
    },
    setNewsList({ commit }, payload) {
      commit('SET_NEWS_LIST', payload);
    }
  }
});
