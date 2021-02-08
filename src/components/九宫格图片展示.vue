<template>
  <div class="flex-ct-x css-demo pic9-wrapper" data-title="九宫格图片展示">
    <p>我也不知道为什么tom会出现在猪圈里</p>
    <div class="album">
      <img v-for="(item, index) in imgShowList" :key="index" :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=563618251,4116099502&fm=111&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2318478174,2636733903&fm=11&gp=0.jpg',
        'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=420836021,600198932&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3555161318,4283736762&fm=26&gp=0.jpg',
        'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1372701839,3368494188&fm=26&gp=0.jpg',
        'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3376570205,450144025&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3516635999,2848283275&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2384428881,3432665877&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=90335384,2935170884&fm=11&gp=0.jpg'
      ],
      count: 9,
      isAdd: false,
    }
  },
  created() {
    setInterval(() => {
      if (this.isAdd) {
        this.count++
        if (this.count == 9) {
          this.isAdd = false
        }
      } else {
        this.count--
        if (this.count == 1) {
          this.isAdd = true
        }
      }
    }, 1000)
  },
  computed: {
    imgShowList() {
      return this.imgList.slice(0, this.count)
    }
  }
}
</script>

<style lang="scss" scoped>
.pic9-wrapper {
  flex-direction: column;
  height: 500px;
  p {
    margin-bottom: 12px;
  }
  .album {
    width: 342px;
    height: 342px;
    img {
      display: inline-block;
      margin: 0 3px 3px 0;
      width: 110px;
      height: 110px;
      &:only-child {
        width: initial;
        height: initial;
        max-width: 230px;
        max-height: 230px;
      }
      &:nth-child(2):nth-last-child(3) {
        margin-right: 110px;
      }
    }
  }
}
</style>