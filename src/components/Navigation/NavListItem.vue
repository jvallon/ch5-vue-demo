<template>
  <div id="nav-list-item" class="nav-list-item" @click="onClick()"
    :class="{ active: isActive, disabled: isDisabled }"
    v-show="!isHidden">
    <router-link :to="route" class="rlink">
      <font-awesome-icon class="icon" :icon="icon" v-if="icon.length > 0"/>
        <span v-else class="icon"></span>
      <span class="label">{{ label }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavListItem',
  props: {
    namespace: {type: String, default: "nav"},
  },
  methods: {
    onClick() {
      this.$emit('clicked');
    }
  },
  computed: {
    ...mapState({
      label() { return this.$store.state[this.namespace].label },
      icon() { return this.$store.state[this.namespace].icon },
      route() { return this.$store.state[this.namespace].route },
      isActive(){ return this.$store.state[this.namespace].isActive },
      isDisabled() { return this.$store.state[this.namespace].isDisabled },
      isHidden() { return this.$store.state[this.namespace].isHidden}
    })
  }
}
</script>

<style lang="scss" scoped>


/* .router-link-exact-active {
  background-color: lightblue;
} */

.active {
  background-color: red;
}

.disabled { 
  pointer-events: none;

  .icon {
    color: lightgrey;
  }

  .label {
    color: lightgrey;
  }
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