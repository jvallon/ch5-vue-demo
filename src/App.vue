<template>
  <div id="app">
    <div class="grid-container">
      <div class="header"></div>
      <div class="main">
        <div class="menu-container">
          <nav-list></nav-list>
        </div>
        <div class="nav-area"></div>
      </div>
      <div class="footer"></div>
    </div>
    <!-- <button @click="powerOffClick" :class="{ active: isOff }">Power Off</button>
    <button @click="powerOnClick" :class="{ active: isOn }">Power On</button> -->
    <!-- <display namespace="display1" name="d1" :config="this.disp1"></display>
    <display namespace="displayTwo" name="display2" :config="this.disp2"></display> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import { mapState, mapActions } from 'vuex'
// import Display from './components/Display.vue';
import NavList from '@/components/Navigation/NavList';
import * as disp1 from '@/assets/data/tv.js';
import * as disp2 from '@/assets/data/tv2.js';

export default {
  name: 'App',
  components: {
    // Display,
    NavList
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
  margin: -8px -8px;
}

.active {
    background-color: blue;
}

.grid-container {
  height: 100vh;
  display: grid;
  grid-gap: 5px;
  grid-template-areas: 
    'header header header header header'
    'main main main main main'
    'footer footer footer footer footer';
}

.header {
  grid-area: header;
  min-height: 10vh;
  margin: 0px;
  padding: 0px;
  border-style: solid;
}

.footer {
  grid-area: footer;
  min-height: 10vh;
  border-style: solid;
}

.main {
  grid-area: main;
  min-height: 70vh;
  /* border-style: solid; */
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 30vw 1fr ;
  grid-template-areas:
    'menu main ';
}

.menu-container {
  grid-area: menu;
  max-width: 30vw;
  border-style: solid;
}

.nav-area {
  grid-area: main;
  /* height: 80vh; */
  border-style: solid;
}

</style>
