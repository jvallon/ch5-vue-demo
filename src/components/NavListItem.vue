<template>
  <div id="nav-list-item">
    <button>
      <font-awesome-icon :icon="icon" v-if="icon.length > 0"/>
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavListItem',
  props: {
    label: { type: String, required: true },
    icon: { type: String, default: "" }
  }
}
</script>

<style lang="scss" scoped>

</style>