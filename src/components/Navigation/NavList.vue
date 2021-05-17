<template>
<div class="nav-main">

  <nav-list-item v-for="item in items" :key="item.id"
    :label="item.label"
    :icon="item.icon"
    :join="item.pressJoin"
    :routeTo="item.routeTo"/>
</div>
</template>

<script>
import NavListItem from '../Navigation/NavListItem.vue'
import navitems from '@/assets/data/navitems.json'

export default {
  components: { NavListItem },
  // props: {
  //   items: { type: Array, required: true }
  // },
  data() {
    return {
      items: navitems
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