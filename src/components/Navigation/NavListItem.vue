<template>
    <router-link :to="routeTo">
  <div id="nav-list-item" class="nav-list-item" @click="onClick" >
      <font-awesome-icon id="icon" :icon="icon" v-if="icon.length > 0"/>
        <span v-else id="icon"></span>
      <span id="label">
        {{ label }}
      </span>
  </div>
    </router-link>
</template>

<script>
export default {
  name: 'NavListItem',
  props: {
    label: { type: String, required: true },
    icon: { type: String, default: "" },
    join: { type: String },
    routeTo: { type: String, default: '/' }
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

a, a:visited {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  background-color: lightblue;
}
.nav-list-item {
  display: flex;
  align-items: center;
  justify-content: left;


  #label {
    grid-column: 2 / span 4;
    font-size: 1.5rem;
    margin: 1rem;
    text-align: left;
    hyphens: auto;
  }

  #icon {
    height: 3rem;
    width: 3rem;
    padding: 1rem;
    font-size: 2.5rem;
  }
}
</style>