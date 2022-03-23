import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  // signinUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut } from 'firebase/auth'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    cart: [],
    user: null
  },
  getters: {
    // 與購物車內容同步
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if (item) return item.quantity
      else return null
    },
    cartItems: state => {
      return state.cart
    },
    cartTotal: state => {
      return state.cart.reduce((c, d) => c + d.quantity, 0)
    },
    priceTotal: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
    },
  },

  // 更改狀態
  mutations: {
    addToCart (state, product) {
      let item = state.cart.find( i => i.id === product.id)

      if (item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      } 

      updateLocalStorage(state.cart)
    },
    removeFromCart (state, product){
      let item = state.cart.find(i => i.id === product.id)

      if(item){
        if (item.quantity > 1){
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }

      updateLocalStorage(state.cart)
    },

    // 讓網頁刷新時還保留更動的部分
    updateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart')
      if (cart){
        state.cart = JSON.parse(cart)
      }
    },

    // For user login in
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async login ({commit}, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword (auth, email, password)
      } catch (error) {
          switch (error.code) {
            case 'auth/user-not-found':
              alert('User not found')
              break
            case 'auth/wrong-password':
              alert('Wrong password')
              break
            default:
              alert('Something went wrong')
          }
          return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async register ({commit}, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword (auth, email, password)
      } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert('Email already in use')
              break
            case 'auth/invalid-email':
              alert('Invalid email')
              break
            case 'auth/operation-not-allowed':
              alert('Operation not allowed')
              break
            default:
              alert('Something went wrong')
          }
          return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async logout ({commit}) {
      await signOut(auth)
      
      commit('CLEAR_USER')

      router.push('/login')
    },

    // check the user exist or not
    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER') // logout user
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  },
  modules: {
  }
})
