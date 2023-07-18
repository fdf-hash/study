<template>
  <Layout>
    <div>
      <div style="margin: 0.5rem 0">
        <PiniaLogo />
      </div>

      <h2>Hello {{ user.name }}</h2>

      <form @submit.prevent="addItemToCart" data-testid="add-items">
        <input type="text" v-model="itemName" />
        <button>Add</button>
      </form>

      <form @submit.prevent="buy">
        <ul data-testid="items">
          <li v-for="item in cart.items" :key="item.name">
            {{ item.name }} ({{ item.amount }})
            <button @click="cart.removeItem(item.name)" type="button">X</button>
          </li>
        </ul>

        <button :disabled="!user.name">Buy</button>
        <button
          :disabled="!cart.items.length"
          @click="clearCart"
          type="button"
          data-testid="clear"
        >
          Clear the cart
        </button>
      </form>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "./layout/default.vue"
import PiniaLogo from "./components/PiniaLogo.vue"

import {ref} from "vue"
import {useUserStore} from "./store/user"
import {useCartStore} from "./store/cart"

const user = useUserStore()
const cart = useCartStore()

const itemName = ref("")

const addItemToCart = () => {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ""
}

const clearCart = () => {
  if (window.confirm("Are you sure you want to clear the cart?")) {
    cart.rawItems = []
  }
}

const buy = async () => {
  const n = await cart.purchaseItems()

  console.log(`Bought ${n} items`)

  cart.rawItems = []
}
</script>

<!-- <script lang="ts">
import Layout from './layout/default.vue'
import PiniaLogo from './components/PiniaLogo.vue'

import { defineComponent, ref } from 'vue'
import { useUserStore } from './store/user'
import { useCartStore } from './store/cart'

export default defineComponent({
  components: { Layout, PiniaLogo },

  setup() {
    const user = useUserStore()
    const cart = useCartStore()

    const itemName = ref('')

    function addItemToCart() {
      if (!itemName.value) return
      cart.addItem(itemName.value)
      itemName.value = ''
    }

    function clearCart() {
      if (window.confirm('Are you sure you want to clear the cart?')) {
        cart.rawItems = []
      }
    }

    async function buy() {
      const n = await cart.purchaseItems()

      console.log(`Bought ${n} items`)

      cart.rawItems = []
    }

    // @ts-ignore
    window.stores = { user, cart }

    return {
      itemName,
      addItemToCart,
      cart,

      user,
      buy,
      clearCart,
    }
  },
})
</script> -->

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
