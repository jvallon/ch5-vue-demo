<template>
<div class="nav-main">

  <nav-list-item v-for="item in items" :key="item.id"
    :label="item.label"
    :icon="item.icon"
    :join="item.pressJoin"
    :routeTo="item.routeTo"
    @clicked="onClick(item)"/>
</div>
</template>

<script>
import NavListItem from '../Navigation/NavListItem.vue'
import navitems from '@/assets/data/navitems.json'

export default {
  components: { NavListItem },
  methods: {
    onClick(item) {
      this.$api.press(item.pressJoin);
      this.$api.release(item.pressJoin);
    }
  },
  created() {

  }
}
</script>

<style lang="scss">

.nav-main {
  height: 100%;
  margin: 0;
}
</style>