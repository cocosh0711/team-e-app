import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    REPLACE_USER: function(state, user) {
      state.user = user
    },
  },
  actions: {
    signIn: function(store) {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = {
            uid: result.user.uid,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
          }
          store.commit("REPLACE_USER", user)
        })
    },
    signOut: function(store) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.commit("REPLACE_USER", null)
        })
    },
  },
  getters: {
    userName: function(state) {
      if (state.user) {
        return state.user.displayName
      } else {
        return "名無し"
      }
    },
  },
})
