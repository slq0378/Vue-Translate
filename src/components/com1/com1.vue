<template>
  <div>
      <div>dddd</div>
      <p>{{ $t('message.address') }}</p>
      <p>111 {{ $t('message.hello') }}</p>
  </div>
</template>
<script>
export default {
  props: {
    version: {
      type: String,
      default: '版本号为V1.0.0'
    }
  }
}
</script>
<style lang="less" scoped>
</style>
