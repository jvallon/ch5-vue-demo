<template>
  <nav-list-item></nav-list-item>
</template>

<script>
import NavListItem from './NavListItem.vue'
export default {
  components: { NavListItem },
}
</script>

<style>
.nav-list {
  height: 100%;
  
  button {
    height: 7rem;
    justify-content: left;
    padding: 0 0 0 1rem;
    font-size: 1.25rem;
  }
}

</style>