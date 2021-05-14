<template>
  <div id="nav-list-item" class="nav-list" @click="onClick">
    <font-awesome-icon id="icon" :icon="icon" v-if="icon.length > 0"/>
      <span v-else id="icon"></span>
    <span id="label">
      {{ label }}
    </span>
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