
<template>
  <div>
    <!-- <button @click="powerOffClick" :class="{ active: isOff }">Power Off</button>
    <button @click="powerOnClick" :class="{ active: isOn }">Power On</button> -->
    <p>{{ getName }}</p>
    <button @click="powerOffClick" :class="{ active: isOff }">Power Off</button>
    <button @click="powerOnClick" :class="{ active: isOn }">Power On</button>
  </div>
</template>

<script>
import {  mapState, mapActions } from 'vuex';
// import { createNamespacedHelpers } from 'vuex';
// const { mapState, mapActions } = createNamespacedHelpers(this.namespace);
import display from '../store/modules/displaymod';

export default {
  name: 'Display',
  components: {
  },
  props: {
    namespace: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    config: {
      required: true
    }
  },
  // data() {
  //     return {
  //         namespace: `display${uid++}`,
  //     }
  // },
  methods: {
    powerOffClick() {
      try {
        this.$store.dispatch(`${this.namespace}/powerOff`);
      } 
      catch (e){
        console.log(e);
      }
    },
    powerOnClick() {
        this.$store.dispatch(`${this.namespace}/powerOn`);
    },
    ...mapActions({
      // setName: `${this.namespace}/setName`
    }),
  },
  computed: {
    ...mapState({
      isOn() { return this.$store.state[this.namespace].isOn;},
      isOff() { return this.$store.state[this.namespace].isOff;},
      getName (state, getters) {  // workaround, mapGetters doesn't allow dynamic namespace
        return getters[this.namespace + '/getName']
      }
    }),
  },
  created() {
    console.log(this.config);
    // register module
    console.log(`registering module ${this.namespace}`)
    this.$store.registerModule(`${this.namespace}`, display, {rawError: true} );
    // setup
    this.$store.dispatch(`${this.namespace}/setName`, this.name);
    this.$store.dispatch(`${this.namespace}/initialize`, this.config);    
    // subscribe 
    this.$store.dispatch(`${this.namespace}/subscribeAll`);
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeDestroy() {
    this.$store.dispatch(`${this.namespace}/unsubscribeAll`);
    console.log(`unregistering module ${this.namespace}`)
    this.$store.unregisterModule(`${this.namespace}`);
  }
}
</script>

<style>

</style>