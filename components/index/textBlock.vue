<template>
<div>
  <h3><slot name="title"></slot></h3>
      <hr class="hr_title" color="#9c9999"  size="6px" align="left" width="20%">
       <slot name="text"></slot>
      <hr color="#9c9999"  size="1" width="150">
</div>
</template>

<script>
export default {
  name: "textBlock"
}
</script>

<style scoped>
.hr_title {
    height: 4px;
}
</style>
