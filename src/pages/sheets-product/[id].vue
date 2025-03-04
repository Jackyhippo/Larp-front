<template>
  <v-container width="70%">
    <v-row>
      <v-col cols="12" md="4">
        <v-img :src="product.image" height="450"></v-img>
      </v-col>
      <v-col cols="12" md="8">
        <h1 class="text-left">{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <h1 class="text-left">劇本資訊</h1>
        <div>
          <v-row class="h-100">
            <v-col cols="12" md="6">
              <div class="d-flex">
                <v-icon>mdi-bookshelf</v-icon>
                <p>{{ product.category }}</p>
              </div>
              <div class="d-flex">
                <v-icon>mdi-account-group</v-icon>
                <p>{{ product.players }}</p>
              </div>
              <div class="d-flex">
                <v-icon>mdi-head-lightbulb</v-icon>
                <p>{{ product.difficulty }}</p>
              </div>
              <div class="d-flex">
                <v-icon>mdi-hanger</v-icon>
                <p>{{ product.dressCode }}</p>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
              <v-btn type="submit" prepend-icon="mdi-calendar-range" size="x-large">
                {{ $t('product.reserve') }}
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <h1 class="text-left">店家資訊</h1>
        <h2 class="text-left">劇光燈</h2>
        <div class="d-flex">
          <v-icon>mdi-phone</v-icon>
          <p>02-2331-5796</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-map-marker</v-icon>
          <p>臺北市萬華區康定路 46 之 3 號</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useGoogleSheets } from '@/composables/useGoogleSheets'
// import { useI18n } from 'vue-i18n'

// 取得路由資訊
const route = useRoute()
// const { t } = useI18n()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: '',
  difficulty: '',
  players: '',
  location: '',
  dressCode: '',
})

const SHEET_ID = '1lINlC3oU3whplRxu52pMiTcIoCtVwiXbkoj5deZOYAI' // 你的 Google Sheets ID
const SHEET_INDEX = 0 // 第一個工作表
const { fetchData } = useGoogleSheets(SHEET_ID, SHEET_INDEX) // 引入自定義的 useGoogleSheets

// 在頁面加載時，取得指定的商品資料
onMounted(async () => {
  const productId = route.params.id // 從路由參數獲取商品 id
  console.log('Product ID:', productId)
  const data = await fetchData() // 從 Google Sheets 獲取所有資料
  console.log('222', data)

  // 嘗試匹配 _id，並確保 ID 類型一致
  const foundProduct = data.find((item) => String(item._id) === String(productId))
  if (foundProduct) {
    product.value = foundProduct
  } else {
    console.error(`❌ 找不到 ID 為 ${productId} 的商品`)
  }
})
</script>

<style scoped>
h1 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: white;
}
p {
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  color: white;
}
.v-icon {
  margin-right: 0.5rem;
  color: #0bebba;
}
</style>

<route lang="yaml">
meta:
  title: 'nav.sheetsproduct'
</route>
