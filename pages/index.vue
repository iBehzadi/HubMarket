<template>
  <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      <div v-if="products" v-for="product in products" :key="product.id">
        <ProductComponent :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const products = [
  { id: 1, title: 'title 1', description: 'this is a description', url: 'https://picsum.photos/id/1/800/800', price: 768585 },
  { id: 2, title: 'title 2', description: 'this is a description', url: 'https://picsum.photos/id/2/800/800', price: 156753 },
  { id: 3, title: 'title 3', description: 'this is a description', url: 'https://picsum.photos/id/3/800/800', price: 374574 },
  { id: 4, title: 'title 4', description: 'this is a description', url: 'https://picsum.photos/id/4/800/800', price: 3676554 },
  { id: 5, title: 'title 5', description: 'this is a description', url: 'https://picsum.photos/id/5/800/800', price: 5466 },
  { id: 6, title: 'title 6', description: 'this is a description', url: 'https://picsum.photos/id/6/800/800', price: 44665 },
  { id: 7, title: 'title 7', description: 'this is a description', url: 'https://picsum.photos/id/7/800/800', price: 674564 },
  { id: 8, title: 'title 8', description: 'this is a description', url: 'https://picsum.photos/id/8/800/800', price: 344565 },
  { id: 9, title: 'title 9', description: 'this is a description', url: 'https://picsum.photos/id/9/800/800', price: 65463 },
  { id: 10, title: 'title 10', description: 'this is a description', url: 'https://picsum.photos/id/10/800/800', price: 354645 }
]
</script>
