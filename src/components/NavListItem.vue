<template>
  <div id="nav-list-item">
    <button @click="onClick">
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
    icon: { type: String, default: "" },
    join: { type: String }
  },
  methods: {
    onClick() {
      this.$api.press(this.join);
      this.$api.release(this.join);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>