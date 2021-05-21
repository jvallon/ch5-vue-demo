<template>
  <div class="sidebar-container">
    <nav-list class="navlist" :items="navListItems" :namespace="'mainnav'"></nav-list>
    <hr class="divider">
    <volume-horizontal class="volume"></volume-horizontal>
  </div>
</template>

<script>
import NavList from '../Navigation/NavList.vue'
import navitems from '@/assets/data/navitems.json';
import VolumeHorizontal from '../Audio/VolumeHorizontal.vue';

export default {
  components: { NavList, VolumeHorizontal },
  data() {
    return {
      navListItems: navitems,
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  border-left: 1px solid #333;
  display: flex;
  flex-direction: column;
}

.divider {
  width: 95%;
  border: 1px solid #aaa;
  margin-top: auto;
  margin-bottom: 0;
}

</style>