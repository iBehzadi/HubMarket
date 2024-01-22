<template>
  <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <!-- product image -->
      <div class="md:w-[40%] border ">
        <img v-if="currentImage" class="rounded-lg object-fit" :src="currentImage">

        <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
          <div v-for="image in images">
            <img @mouseover="currentImage = image" :src="image" @click="currentImage = image" width="70"
              class="rounded-md object-fit border-[3px] cursor-pointer"
              :class="currentImage === image ? 'border-[#ff4646]' : ''">
          </div>
        </div>
      </div>
      <!-- product info -->
      <div class="md:w-[60%] bg-white p-3 rounded-lg ">
        <div v-if="true">
          <p class="mb-2">Title</p>
          <p class="font-light text-[12px] mb-2">Description</p>
        </div>
        <div class="flex items-center pt-1.5">
          <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#ffd000] mr-2">
            <Icon name="material-symbols:star-half-rounded" class="-mt-[17px]" size="12" />
          </span>
          <p class="text-[#ff4646]">Extra 5% offd</p>
        </div>
        <div class="flex items-center my-2">
          <Icon name="ic:baseline-star" color="#ff5353" />
          <Icon name="ic:baseline-star" color="#ff5353" />
          <Icon name="ic:baseline-star" color="#ff5353" />
          <Icon name="ic:baseline-star" color="#ff5353" />
          <Icon name="ic:baseline-star" color="#ff5353" />
          <span class="text-[13px] font-light ml-2">5 212 review 1,000+ orders</span>
        </div>
        <div class="border-b" />

        <div class="flex items-center justify-start gap-2 my-2">
          <div class="text-xl font-bold">$ {{ priceComputed }}</div>
          <span class="bg-[#f5f5f5] border text-[#c08562] px-1.5 text-[9px] font-semibold rounded-sm">70% off</span>
        </div>
        <p class="text-[#009a66] text-xs font-semibold pt-1">
          Free 11-day delivery over $8.28
        </p>
        <p class="text-[#009a66] text-xs font-semibold pt-1">
          Free shopping
        </p>
        <div class="py-2" />

        <button @click="addToCart()" :disabled="isInCart"
          class="px-6 py-2 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-[#ff851a] to-[#ffac2c]">
          <div v-if="isInCart">Is Added</div>
          <div v-else="isInCart">Add to cart</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const route = useRoute()
let currentImage = ref('')
onMounted(() => {
  watchEffect(() => {
    currentImage.value = 'https://picsum.photos/id/77/800/800'
    images.value[0] = 'https://picsum.photos/id/67/800/800'
  })
})
const priceComputed = computed(() => {
  return '26.40'
})
const images = ref([
  '',
  'https://picsum.photos/id/212/800/800',
  'https://picsum.photos/id/213/800/800',
  'https://picsum.photos/id/234/800/800',
  'https://picsum.photos/id/211/800/800',
  'https://picsum.photos/id/222/800/800'
])

const isInCart = computed(()=>{
  let res = false
  userStore.cart.forEach(prod => {
    if(route.params.id == prod.id) {
      res = true
    }
  })
  return res
})
function addToCart() {
  alert('added')
}
</script>

