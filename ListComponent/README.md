# ListComponent

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 題目 2

function solution(recipes) {
  const newData = []
  let item = []
  let count = 0
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 1; j < recipes[i].length; j++) {
      // if (j == 1) {
      if (item == null) {
        item.push(recipes[i][1])
        item.push(recipes[i][0])
      } else {
        if (a[c][0] == recipes[i][j]) {

          item.push(recipes[i][0])
        }
      }
      count++
      break
    }

  }
  newData.push(item)
  item = []
}

### 題目 3

3-1 請說明 Flux, Redux, Vuex 之間的差異
‧Flux 、Redux 、Vuex 均為單向數據流
‧Flux 可以有多個 Store ，Redux、Vuex 只有一個 Store

3-2 請說明單向資料流與雙向資料流在處理資料更新上的異同
‧單向資料流只能父傳子，雙向資料流父子可互傳
‧單向資料流比較好維護，但如果要跨多層傳遞會比較麻煩，因此衍生出 Vuex 來協助操控
‧雙向資料流操作方便，但可維護性差

3-3 這些設計主要想要解決什麼樣的問題? 優缺點為何
解決資料傳遞結構複雜、跨多層導致的資料流混亂、可讀性差、維護性差的問題
