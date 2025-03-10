<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ $t('nav.adminProducts') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-data-table :items="products" :headers="headers" :search="search">
          <!-- 只有一個的情況下，不用用[]包起來 -->
          <template #top>
            <v-toolbar>
              <v-btn prepend-icon="mdi-book-edit" @click="openDialog(null)">{{ $t('adminProduct.new') }}</v-btn>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" variant="underlined"></v-text-field>
            </v-toolbar>
          </template>
          <!-- # 代表 v-slot 的簡寫(插槽) -->
          <template #[`item.image`]="{ value }">
            <v-img :src="value" height="70"></v-img>
          </template>
          <template #[`item.sell`]="{ value }">
            <v-icon v-if="value" icon="mdi-check"></v-icon>
          </template>
          <template #[`item.createdAt`]="{ value }">
            {{ new Date(value).toLocaleDateString() }}
          </template>
          <template #[`item.updatedAt`]="{ value }">
            {{ new Date(value).toLocaleDateString() }}
          </template>
          <template #[`item.category`]="{ value }">
            {{ value }}
          </template>
          <template #[`item.edit`]="{ item }">
            <v-btn icon="mdi-pencil" variant="text" @click="openDialog(item)"></v-btn>
          </template>
          <template #[`item.description`]="{ value }">
            <v-tooltip location="bottom" style="max-width: 900px">
              <template #activator="{ props }">
                <span v-bind="props">
                  {{ value.length > 20 ? value.substring(0, 20) + '...' : value }}
                </span>
              </template>
              <div class="tooltip-content">{{ value }}</div>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog.open" persistent max-width="600">
    <v-form :disabled="isSubmitting" @submit.prevent="submit">
      <v-card>
        <v-card-title>{{ $t(dialog.id ? 'adminProduct.edit' : 'adminProduct.new') }}</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name.value.value"
            :label="$t('product.name')"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
          <v-text-field
            v-model="price.value.value"
            :label="$t('product.price')"
            :error-messages="price.errorMessage.value"
            type="number"
            min="0"
          ></v-text-field>
          <v-select
            v-model="category.value.value"
            :error-messages="category.errorMessage.value"
            :items="categoryOptions"
            :label="$t('product.category')"
            item-title="text"
            item-value="value"
          ></v-select>
          <v-select
            v-model="difficulty.value.value"
            :error-messages="difficulty.errorMessage.value"
            :items="difficultyOptions"
            :label="$t('product.difficulty')"
            item-title="text"
            item-value="value"
          ></v-select>
          <v-select
            v-model="players.value.value"
            :error-messages="players.errorMessage.value"
            :items="playersOptions"
            :label="$t('product.players')"
            item-title="text"
            item-value="value"
          ></v-select>
          <v-select
            v-model="location.value.value"
            :error-messages="location.errorMessage.value"
            :items="locationOptions"
            :label="$t('product.location')"
            item-title="text"
            item-value="value"
          ></v-select>
          <v-select
            v-model="dressCode.value.value"
            :error-messages="dressCode.errorMessage.value"
            :items="dressCodeOptions"
            :label="$t('product.dressCode')"
            item-title="text"
            item-value="value"
          ></v-select>
          <v-checkbox
            v-model="sell.value.value"
            :label="$t('product.onSell')"
            :error-messages="sell.errorMessage.value"
          ></v-checkbox>
          <v-textarea
            v-model="description.value.value"
            :label="$t('product.description')"
            :error-messages="description.errorMessage.value"
          ></v-textarea>
          <VueFileAgent
            ref="fileAgent"
            v-model="fileRecords"
            v-model:raw-model-value="rawFileRecords"
            accept="image/jpeg,image/png"
            deletable
            max-size="1MB"
            :help-text="$t('fileAgent.helpText')"
            :error-text="{ type: $t('fileAgent.errorType'), size: $t('fileAgent.errorSize') }"
          ></VueFileAgent>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">{{ $t('adminProduct.cancel') }}</v-btn>
          <v-btn type="submit" :loading="isSubmitting">{{ $t('adminProduct.submit') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useI18n } from 'vue-i18n'
import { computed, reactive, ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()

const products = reactive([])
const search = ref('')
const headers = computed(() => {
  return [
    // { title: 'ID', key: '_id', sortable: true },
    { title: t('product.name'), key: 'name', sortable: true },
    { title: t('product.image'), key: 'image', sortable: false },
    { title: t('product.description'), key: 'description', sortable: true },
    { title: t('product.price'), key: 'price', sortable: true },
    { title: t('product.category'), key: 'category', sortable: true },
    { title: t('product.difficulty'), key: 'difficulty', sortable: false },
    { title: t('product.players'), key: 'players', sortable: false },
    { title: t('product.location'), key: 'location', sortable: false },
    { title: t('product.sell'), key: 'sell', sortable: true },
    { title: t('product.createdAt'), key: 'createdAt', sortable: true },
    { title: t('product.updatedAt'), key: 'updatedAt', sortable: true },
    { title: t('adminProduct.edit'), key: 'edit', sortable: false },
  ]
})

const getProducts = async () => {
  try {
    const { data } = await apiAuth.get('/product/all')
    products.push(...data.result)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red',
      },
    })
  }
}
getProducts()

const dialog = ref({
  open: false,
  id: '',
})
const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    name.value.value = item.name
    price.value.value = item.price
    description.value.value = item.description
    category.value.value = item.category
    sell.value.value = item.sell
    difficulty.value.value = item.difficulty
    players.value.value = item.players
    location.value.value = item.location
    dressCode.value.value = item.dressCode
  }
  dialog.value.open = true
}
const closeDialog = () => {
  resetForm()
  dialog.value.id = ''
  dialog.value.open = false
  fileAgent.value.deleteFileRecord()
}

const schema = yup.object({
  name: yup.string().required(t('api.productNameRequired')),
  price: yup
    .number()
    .typeError(t('api.productPriceRequired'))
    .required(t('api.productPriceRequired'))
    .min(0, t('api.productPriceTooSmall')),
  description: yup.string().required(t('api.productDescriptionRequired')),
  category: yup
    .string()
    .required(t('api.productCategoryRequired'))
    .oneOf(['硬核推理', '情感沈浸', '恐怖驚悚', '機制陣營', '歡樂搞笑', '真相還原'], t('api.productCategoryInvalid')),
  sell: yup.boolean().required(t('api.productSellRequired')),
  difficulty: yup
    .string()
    .required(t('api.productDifficultyRequired'))
    .oneOf(['新手入門', '新手進階', '中等難度', '中等偏難', '高手挑戰'], t('api.productDifficultyInvalid')),
  players: yup
    .string()
    .required(t('api.productPlayersRequired'))
    .oneOf(['3人', '4人', '5人', '6人', '7人', '8人', '9人', '10人以上'], t('api.productPlayersInvalid')),
  location: yup
    .string()
    .required(t('api.productLocationRequired'))
    .oneOf(['台北市', '新北市', '桃園市', '新竹縣/市', '台中市', '台南市', '高雄市'], t('api.productLocationInvalid')),
  dressCode: yup
    .string()
    .required(t('api.productDressCodeRequired'))
    .oneOf(['需換裝', '不需換裝'], t('api.productDressCodeInvalid')),
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    price: 0,
    description: '',
    category: '',
    sell: false,
    difficulty: '',
    players: '',
    location: '',
    dressCode: '',
  },
})
const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const sell = useField('sell')
const difficulty = useField('difficulty')
const players = useField('players')
const location = useField('location')
const dressCode = useField('dressCode')
const categoryOptions = computed(() => [
  { text: '硬核推理', value: '硬核推理' },
  { text: '情感沈浸', value: '情感沈浸' },
  { text: '恐怖驚悚', value: '恐怖驚悚' },
  { text: '機制陣營', value: '機制陣營' },
  { text: '歡樂搞笑', value: '歡樂搞笑' },
  { text: '真相還原', value: '真相還原' },
])
const difficultyOptions = computed(() => [
  { text: '新手入門', value: '新手入門' },
  { text: '新手進階', value: '新手進階' },
  { text: '中等難度', value: '中等難度' },
  { text: '中等偏難', value: '中等偏難' },
  { text: '高手挑戰', value: '高手挑戰' },
])
const playersOptions = computed(() => [
  { text: '3人', value: '3人' },
  { text: '4人', value: '4人' },
  { text: '5人', value: '5人' },
  { text: '6人', value: '6人' },
  { text: '7人', value: '7人' },
  { text: '8人', value: '8人' },
  { text: '9人', value: '9人' },
  { text: '10人以上', value: '10人以上' },
])
const locationOptions = computed(() => [
  { text: '台北市', value: '台北市' },
  { text: '新北市', value: '新北市' },
  { text: '桃園市', value: '桃園市' },
  { text: '新竹縣/市', value: '新竹縣/市' },
  { text: '台中市', value: '台中市' },
  { text: '台南市', value: '台南市' },
  { text: '高雄市', value: '高雄市' },
])
const dressCodeOptions = computed(() => [
  { text: '需換裝', value: '需換裝' },
  { text: '不需換裝', value: '不需換裝' },
])

const fileAgent = ref(null)
const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return
  if (dialog.value.id.length === 0 && fileRecords.value.length === 0) {
    createSnackbar({
      text: t('api.productImageRequired'),
      snackbarProps: {
        color: 'red',
      },
    })
    return
  }
  try {
    const fd = new FormData()
    // fd.append(key, value)
    fd.append('name', values.name)
    fd.append('price', values.price)
    fd.append('description', values.description)
    fd.append('category', values.category)
    fd.append('sell', values.sell)
    fd.append('difficulty', values.difficulty)
    fd.append('players', values.players)
    fd.append('location', values.location)
    fd.append('dressCode', values.dressCode)
    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }
    if (dialog.value.id.length > 0) {
      await apiAuth.patch('/product/' + dialog.value.id, fd)
    } else {
      await apiAuth.post('/product', fd)
      // const { data } = await apiAuth.post('/product', fd)
      // console.log(data)
    }
    products.splice(0, products.length)
    getProducts()
    createSnackbar({
      text: t(dialog.value.id.length > 0 ? 'adminProduct.editSuccess' : 'adminProduct.newSuccess'),
      snackbarProps: {
        color: 'green',
      },
    })
    closeDialog()
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red',
      },
    })
  }
})
</script>

<style scoped>
/* 限制 Tooltip 內容的寬度 */
.tooltip-content {
  font-size: 18px;
  white-space: normal; /* 允許換行 */
  word-break: break-word; /* 長單字可換行 */
  padding: 8px;
  background: rgba(9, 141, 91, 0.9) !important;
  color: #c7ca04;
  border-radius: 10px;
  text-align: center;
}
</style>

<route lang="yaml">
meta:
  layout: admin
  login: true
  admin: true
  title: 'nav.adminProducts'
</route>
