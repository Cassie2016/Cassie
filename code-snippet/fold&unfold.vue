<template>
  <div :class="['need-fold-text', isFold ? 'fold' : 'unfold']">
    <p class="text" ref="textEl">{{ joinedText }}</p>
    <div v-if="showToggleBtn" class="button" @click="toggleFold">
      <p>{{ isFold ? '展开' : '收起' }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from '@vue/composition-api'

export default defineComponent({
  props: {
    textArr: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props) {
    const joinedText = computed(() => props.textArr.join('、') || '')

    // lineHeight 默认单行行高16px
    // maxLine 最多展示3行, 超过3行展示折叠样式
    const useFold = (lineHeight = 16, maxLine = 3) => {
      const textEl = ref<Element | null>(null)
      const isFold = ref(false) // 默认展开，以便计算真实文本高度
      const showToggleBtn = ref(false) // 默认不展示ToggleBtn
      const toggleFold = () => { isFold.value = !isFold.value }

      const textElHeight = computed(() => textEl.value?.clientHeight || 0)

      watch(textElHeight, () => {
        // console.log('textElHeight', textElHeight.value)
        // 通过dom高度判断是否超过maxLine, 如果超过：
        if (textElHeight.value > maxLine * lineHeight) {
          showToggleBtn.value = true // 展示 ToggleBtn
          isFold.value = true // ToggleBtn 状态 为 「收起」
        }
      })

      return {
        showToggleBtn,
        textEl,
        isFold,
        toggleFold
      }
    }

    const { textEl, showToggleBtn, isFold, toggleFold } = useFold()

    return {
      joinedText,
      textEl,
      showToggleBtn,
      isFold,
      toggleFold
    }
  }
})
</script>
<style lang="stylus" scoped>
multi-lines-ellipsis()
  display: -webkit-box
  overflow: hidden
  white-space: normal
  -webkit-box-orient: vertical
  -webkit-line-clamp: arguments
one-line-ellipsis()
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
.need-fold-text
  .text
    line-height: 16px
  &.fold .text
    max-height: 64px
    overflow: hidden
    multi-lines-ellipsis(3)
  &.unfold .button::after
    transform: rotate(180deg)
  .button
    position: relative
    display: flex
    justify-content: center
    padding: 0 10px
    font-size: 14px
    &::after
      width: 10px
      height: 6px
      margin-top: 4px
      margin-left: 4px
      background: url('https://www.baidu.com/img/flexible/logo/pc/result.png') no-repeat 0 0/100% 100%
      transition: transform .3s ease-out
      content: ""
</style>
