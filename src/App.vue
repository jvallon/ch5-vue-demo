<template>
  <div id="app">
    <div class="grid-container">
      <div class="header">
        <the-header></the-header>
      </div>
      <div class="main">
        <div class="menu-container">
          <nav-list :items="navListItems" :namespace="'mainnav'"></nav-list>
        </div>
        <div class="nav-area">
          <router-view></router-view>
        </div>
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
import TheHeader from '@/components/Header/TheHeader';
import NavList from '@/components/Navigation/NavList';
import * as disp1 from '@/assets/data/tv.js';
import * as disp2 from '@/assets/data/tv2.js';
import navitems from '@/assets/data/navitems.json';

export default {
  name: 'App',
  components: {
    TheHeader,
    NavList
  },
  data() {
    return {
      navListItems: navitems,
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
html {
  width: 100%;
  height: 100%;
}

/* fixed position to fix scrolling and other anomolies */
body {
  position: fixed; /* fixes android scroll bubbles */
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  margin: 0px; /* fill the screen */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
}

/* 
body::-webkit-scrollbar, .main-controls::-webkit-scrollbar, .page-controls::-webkit-scrollbar {
  width: 10px;   
  display: none;      
  overflow: hidden;
} */

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
  height: 10vh;
  margin: 0px;
  padding: 0px;
  /* border-style: solid; */
}

.footer {
  grid-area: footer;
  min-height: 10vh;
  /* border-style: solid; */
}

.main {
  grid-area: main;
  min-height: 70vh;
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 30vw ;
  grid-template-areas:
    'main menu';
}

.menu-container {
  grid-area: menu;
  max-width: 30vw;
  /* border-style: solid; */
}

.nav-area {
  grid-area: main;
  /* height: 80vh; */
  /* border-style: solid; */
}

</style>
