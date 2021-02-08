<template>
  <div id="app">
    <component1 />
    <component2 />
    <component3 />
    <component4 />
    <component5 />
    <component6 />
    <component7 />
    <component8 />
    <component9 />

    <component100 />
  </div>
</template>

<script>
import component1 from '@/components/朋克风按钮.vue'
import component2 from '@/components/打字机效果.vue'
import component3 from '@/components/水球动画.vue'
import component4 from '@/components/橡皮擦效果.vue'
import component5 from '@/components/卡片集.vue'
import component6 from '@/components/手风琴效果.vue'
import component7 from '@/components/文字渐入效果.vue'
import component8 from '@/components/hover展示按钮边框动画.vue'
import component9 from '@/components/九宫格图片展示.vue'


import component100 from '@/components/太阳系.vue'

export default {
  components: {
    component1,
    component2,
    component3,
    component4,
    component5,
    component6,
    component7,
    component8,
    component9,

    component100,
  },
  computed: {
    count() {
      return document.getElementsByClassName('css-demo').length
    }
  }
}
</script>
<style lang='scss'>
body, html, #app {
  width: 100%;
  height: 100%;
}
#app {
  overflow-y: auto;
}
::-webkit-scrollbar{
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb{
  border-radius: 1em;
  background-color: rgba(50,50,50,.3);
}
::-webkit-scrollbar-track{
  border-radius: 1em;
  background-color: rgba(50,50,50,.1);
}
.css-demo {
  position: relative;
  border-top: 1px solid #ccc;
  &::after {
    content: attr(data-title);
    position: absolute;
    left: 50%;
    top: 0;
    padding: 0 12px;
    color: #fff;
    line-height: 30px;
    background-color: #1e9fff;
    border-radius: 0 0 5px 5px;
    transform: translateX(-50%);
  }
}
</style>

