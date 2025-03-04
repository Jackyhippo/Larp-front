<template>
  <v-container width="80%">
    <!-- <h1 class="text-center">{{ $t('nav.larpword') }}</h1> -->
    <v-row>
      <!-- 縣市篩選 -->
      <v-col cols="12" md="6">
        <v-select v-model="selectedCity" prepend-inner-icon="mdi-map" :items="cities" label="選擇縣市" clearable></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-col v-for="product of filteredProducts" :key="product._id" cols="12" md="6" lg="4">
        <product-card v-bind="product"></product-card>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage" color="light-green-darken-4"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const ITEMS_PER_PAGE = 9
const currentPage = ref(1)
const products = ref([])
const search = ref('')

const selectedCity = ref(null)

const cities = ['台北市', '新北市', '桃園市', '新竹縣/市', '台中市', '台南市', '高雄市']

const totalPage = computed(() => Math.ceil(products.value.length / ITEMS_PER_PAGE))

const filteredProducts = computed(() => {
  return (
    products.value
      .filter(
        (product) =>
          (!selectedCity.value || product.location === selectedCity.value) &&
          product.name.toLowerCase().includes(search.value.toLowerCase()),
      )
      // 一頁 2 筆
      // 第 1 頁 = 0 ~ 1
      // 第 2 頁 = 2 ~ 3
      // .slice(開始索引, 結束索引)
      // 不包含結束索引
      .slice((currentPage.value - 1) * ITEMS_PER_PAGE, currentPage.value * ITEMS_PER_PAGE)
  )
})
</script>

<style scoped>
.v-select {
  color: #0bebba;
  background-color: darkred;
  border-radius: 10px;
}
.v-text-field {
  color: #0bebba;
  background-color: darkred;
  border-radius: 10px;
}
</style>

<route lang="yaml">
meta:
  login: false
  admin: false
  title: 'nav.larplocation'
</route>
