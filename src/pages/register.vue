<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <h1 class="text-center">{{ $t('nav.register') }}</h1>
      </v-col>
      <v-divider></v-divider>
      <!-- 一般會員註冊 -->
      <v-col cols="6" sm="4">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            :label="$t('user.account')"
            minlength="4"
            maxlength="20"
            counter
          />
          <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" :label="$t('user.email')" />
          <v-text-field
            v-model="password.value.value"
            type="password"
            :error-messages="password.errorMessage.value"
            :label="$t('user.password')"
            minlength="4"
            maxlength="20"
            counter
          />
          <v-text-field
            v-model="passwordConfirm.value.value"
            type="password"
            :error-messages="passwordConfirm.errorMessage.value"
            :label="$t('user.passwordConfirm')"
            minlength="4"
            maxlength="20"
            counter
          />
          <div class="text-center">
            <v-btn :loading="isSubmitting" type="submit" color="green">
              {{ $t('register.submit') }}
            </v-btn>
          </div>
        </v-form>
      </v-col>
      <!-- 管理員註冊 -->
      <v-col cols="6" sm="4" class="position-relative">
        <v-overlay
          v-model="isOverlayVisible"
          contained
          persistent
          class="admin-overlay d-flex align-center justify-center"
          :class="{ 'move-left': isMoving }"
        >
          <v-btn @click="moveOverlay">
            {{ isMoving ? '成為一般會員' : '想成為管理員' }}
          </v-btn>
        </v-overlay>
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            :label="$t('user.account')"
            minlength="4"
            maxlength="20"
            counter
          />
          <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" :label="$t('user.email')" />
          <v-text-field
            v-model="password.value.value"
            type="password"
            :error-messages="password.errorMessage.value"
            :label="$t('user.password')"
            minlength="4"
            maxlength="20"
            counter
          />
          <v-text-field
            v-model="passwordConfirm.value.value"
            type="password"
            :error-messages="passwordConfirm.errorMessage.value"
            :label="$t('user.passwordConfirm')"
            minlength="4"
            maxlength="20"
            counter
          />
          <!-- 管理員註冊選擇框 -->
          <v-checkbox v-model="isAdmin" :label="$t('user.isAdmin')" :rules="[(v) => v === true || $t('api.userAdminRequired')]" />
          <div class="text-center">
            <v-btn :loading="isSubmitting" type="submit" color="green">
              {{ $t('register.submit') }}
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import validator from 'validator'
import { useI18n } from 'vue-i18n'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const { t } = useI18n()
const { api } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()

// 驗證用
const schema = yup.object({
  account: yup
    // 資料型態是文字
    .string()
    // 必填
    .required(t('api.userAccountRequired'))
    // 最短長度
    .min(4, t('api.userAccountTooShort'))
    // 最長長度
    .max(20, t('api.userAccountTooLong'))
    // 自訂驗證(自訂驗證名稱, 錯誤訊息, function)
    .test('isAlphanumeric', t('api.userAccountInvalid'), (value) => validator.isAlphanumeric(value)),
  email: yup
    .string()
    .required(t('api.userEmailRequired'))
    .test('isEmail', t('api.userEmailInvalid'), (value) => validator.isEmail(value)),
  password: yup
    .string()
    .required(t('api.userPasswordRequired'))
    .min(4, t('api.userPasswordTooShort'))
    .max(20, t('api.userPasswordTooLong')),
  passwordConfirm: yup
    .string()
    .required(t('api.passwordConfirmRequired'))
    // oneOf(陣列, 訊息)  必須要是陣列內其中一個值
    // .ref(欄位名稱)     取得欄位的值
    // .ref(password)     password 欄位的值
    .oneOf([yup.ref('password')], t('api.userPasswordNotMatch')),
})

// 建立表單，注意 useForm 要在 useField 前面(先有表單才能使用欄位)
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
})
// 建立欄位 (名稱要跟上方驗證相同)
const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

// 新增管理員選擇框
const isAdmin = ref(false) // 管理員選項，預設為 false
const isOverlayVisible = ref(true) // 預設遮罩為顯示狀態
const isMoving = ref(false)
// 切換遮罩方向
const moveOverlay = () => {
  isMoving.value = !isMoving.value
}

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/user', {
      account: values.account,
      email: values.email,
      password: values.password,
      role: isAdmin.value ? 1 : 0, // 根據選擇設置角色
    })
    createSnackbar({
      text: t('register.success'),
      snackbarProps: {
        color: 'green',
      },
    })
    router.push('/login')
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
.admin-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: rgb(22, 201, 126); /* 半透明黑色遮罩 */
  transition: transform 0.5s ease-in-out;
}
.position-relative {
  position: relative;
}
.move-left {
  transform: translateX(-100%);
}
</style>

<route lang="yaml">
meta:
  title: 'nav.register'
</route>
