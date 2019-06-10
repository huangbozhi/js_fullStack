<template>
  <div class="header">
    <div class="content-wrappeer">
      <div class="avatar">
        <img src="seller.avatar" alt="" width="64" height="64">
      </div>

      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}} / {{seller.deliveryTime}}送达</div>
        <div class="support" v-if="seller.support">
          <span class="icon" :class="classMap[seller.support[0].type]"></span>
          <span class="text">{{seller.support[0].description}}</span>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position relative
    overflow hidden
    color #ffffff
    background rgba(7, 17, 27, 0.5)
  .content-wrappeer
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img 
        border-radius 2px
    .content
      display inline-block
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          display inline-block
          vertical-align top
          height 18px
          width 30px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .support
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat

          &.decrease
            bg-image('decrease_1')

          &.discount
            bg-image('discount_1')

          &.guarantee
            
</style>

