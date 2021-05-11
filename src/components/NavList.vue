<template>
<div class="nav-main">

  <ul>
    <li>
      <nav-list-item class="nav-list"></nav-list-item>
    </li>
    <li>
    <nav-list-item class="nav-list"></nav-list-item>

    </li>
  </ul>
</div>
</template>

<script>
import NavListItem from './NavListItem.vue'
export default {
  components: { NavListItem },
}
</script>

<style lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    line-height: 0;
  }
}

.nav-list {
  
  button {
    width: 100%;
    height: 5rem;
    justify-content: left;
    padding: 0 0 0 1rem;
    font-size: 1.25rem;
  }
}

.nav-main {
  height: 100%;
  margin: 0;
}
</style>