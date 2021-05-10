<template>
  <div id="app">
    <!-- <button @click="powerOffClick" :class="{ active: isOff }">Power Off</button>
    <button @click="powerOnClick" :class="{ active: isOn }">Power On</button> -->
    <display namespace="display1" name="d1" :config="this.disp1"></display>
    <display namespace="displayTwo" name="display2" :config="this.disp2"></display>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import { mapState, mapActions } from 'vuex'
import Display from './components/Display.vue';

import * as disp1 from '@/assets/data/tv.js';
import * as disp2 from '@/assets/data/tv2.js';

export default {
  name: 'App',
  components: {
    Display
  },
  data() {
    return {
      disp1: disp1.default,
      disp2: disp2.default
    }
  },
  methods: 
      {
      powerOffClick() {
          // this.$store.dispatch('default/powerOff');
      },
      powerOnClick() {
          // this.$store.dispatch('default/powerOn');
      },
      ...mapActions({
      //   setName: 'default/setName'
      }),
  },
  computed: {
    ...mapState([
        // isOn: state => state.default.isOn,
        // isOff: state => state.default.isOff
    ]),
  },
  created() {
    // this.$store.dispatch('default/subscribeAll');
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
    background-color: blue;
}
</style>
