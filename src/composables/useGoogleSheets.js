import { ref } from 'vue'

export function useGoogleSheets(sheetId, sheetIndex) {
  const products = ref([])

  const fetchData = async () => {
    try {
      const response = await fetch(`https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`)
      const text = await response.text()

      // 解析 Google Sheets JSON
      const jsonData = JSON.parse(text.substring(47, text.length - 2))
      const rows = jsonData.table.rows

      // 轉換成 Vue 可用的格式
      products.value = rows.map((row) => ({
        _id: row.c[0]?.v || null, // 使用 Google Sheets 上的 ID
        name: row.c[1]?.v || '', // 第 2 欄 "名稱"
        price: row.c[2]?.v || '', // 第 3 欄 "價格"
        category: row.c[3]?.v || '', // 第 4 欄 "分類"
        difficulty: row.c[4]?.v || '', // 第 5 欄 "難度"
        players: row.c[5]?.v || '', // 第 6 欄 "人數"
        location: row.c[6]?.v || '', // 第 7 欄 "地點"
        dressCode: row.c[7]?.v || '', // 第 8 欄 "換裝需求"
        image: row.c[9]?.v || '', // 第 9 欄 "劇照"
        description: row.c[10]?.v || '', // 第 10 欄 "說明"
      }))

      console.log('Parsed Products:', products.value)

      return products.value
    } catch (error) {
      console.error('取得 Google Sheets 資料時發生錯誤:', error)
    }
  }

  return { products, fetchData }
}
