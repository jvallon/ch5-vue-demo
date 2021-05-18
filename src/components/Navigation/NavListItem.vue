<template>
  <div id="nav-list-item" class="nav-list-item" @click="onClick()" >
    <router-link :to="routeTo" class="rlink">
      <font-awesome-icon class="icon" :icon="icon" v-if="icon.length > 0"/>
        <span v-else class="icon"></span>
      <span class="label">{{ label }}</span>
    </router-link>
  </div>
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
      this.$emit('clicked');
    }
  }
}
</script>

<style lang="scss" scoped>


.router-link-exact-active {
  background-color: lightblue;
}


.nav-list-item {
  .rlink {
    display: flex;
    align-items: center;
    justify-content: left;
    text-decoration: none;
    color: black;
  }

  .label {
    font-size: 1.5rem;
    margin: 1rem;
    text-align: left;
    hyphens: auto;
  }

  .icon {
    height: 3rem;
    width: 3rem;
    padding: 1rem;
    font-size: 2.5rem;
  }
}

</style>