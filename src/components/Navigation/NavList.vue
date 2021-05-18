<template>
<div class="nav-main">

  <nav-list-item v-for="item in items" :key="item.id"
    
    :namespace="namespace + '/item'+ item.id"
    @clicked="onClick(item)"/>
</div>
</template>

<script>
import NavListItem from '../Navigation/NavListItem.vue'
import listitemmodule from '@/store/modules/navlistitem'

export default {
  components: { NavListItem },
  props: {
    namespace: { type: String, required: true },
    items: { type: Array, required: true }
  },
  methods: {
    onClick(item) {
      this.$api.press(item.pressJoin);
      this.$api.release(item.pressJoin);
    }
  },
  computed: {
    // listItemNamespace(id) { return `${this.namespace}/item${id}`}
  },
  created() {
    this.items.forEach(item => {
      this.$store.registerModule(`${this.namespace}/item${item.id}`, listitemmodule)
      this.$store.dispatch(`${this.namespace}/item${item.id}/initialize`, item)
      this.$store.dispatch(`${this.namespace}/item${item.id}/subscribeAll`)
    });
  }
}
</script>

<style lang="scss">

.nav-main {
  height: 100%;
  margin: 0;
}
</style>