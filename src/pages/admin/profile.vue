<template>
  <v-container>
    <v-card class="pa-6" elevation="3">
      <v-card-title>管理員個人資料</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-avatar size="120">
              <v-img v-if="profileImage" :src="profileImage" alt="Profile Picture" />
              <v-icon v-else size="120">mdi-account-circle</v-icon>
            </v-avatar>
            <v-file-input v-model="imageFile" label="上傳圖片" accept="image/*" @change="uploadImage" />
          </v-col>
          <v-col cols="12" md="8">
            <v-form ref="profileForm">
              <v-text-field v-model="admin.name" label="姓名" required />
              <v-text-field v-model="admin.phone" label="電話" required />
              <v-text-field v-model="admin.email" label="電子郵件" type="email" required />
              <v-textarea v-model="admin.address" label="地址" />
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="saveProfile">儲存</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const admin = ref({
  name: '',
  phone: '',
  email: '',
  address: '',
})

const profileImage = ref(null)
const imageFile = ref(null)

const uploadImage = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      profileImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const saveProfile = () => {
  console.log('Saving profile', admin.value)
}
</script>

<route lang="yaml">
meta:
  layout: admin
  login: true
  admin: true
  title: 'nav.adminProfile'
</route>
