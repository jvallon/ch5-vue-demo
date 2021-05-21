<template>
  <div class="sidebar-container">
    <nav-list class="navlist" :items="navListItems" :namespace="'mainnav'"></nav-list>
    <div class="line"/>
    <volume-horizontal class="volume" :showButtons="true"></volume-horizontal>
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

.line {
  width: 95%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: auto;
  border-bottom: 1px solid #aaa;
}

</style>