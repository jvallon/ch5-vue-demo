<template>
  <div id="app">
    <div class="grid-container">
      <div class="header">
        <the-header></the-header>
      </div>
      <div class="main">
        <div class="sidebar-container">
          <the-sidebar></the-sidebar>
        </div>
        <div class="nav-area">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TheHeader from '@/components/Header/TheHeader';
import TheSidebar from '@/components/Sidebar/TheSidebar';
import navitems from '@/assets/data/navitems.json';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheSidebar,
    // NavList
  },
  data() {
    return {
      navListItems: navitems
    }
  },
  methods: {
  },
  computed: {
  },
  created() {
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
  /* grid-gap: 5px; */
  grid-template-areas: 
    'header'
    'main'
}

.header {
  grid-area: header;
  min-height: 10vh;
  margin: 0px;
  padding: 0px;
  /* border-style: solid; */
}

.footer {
  grid-area: footer;
  max-height: 10vh;
  /* border-style: solid; */
}

.main {
  grid-area: main;
  height: 90vh;
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: 1fr 30vw ;
  grid-template-areas:
    'main sidebar';
}

.sidebar-container {
  grid-area: sidebar;
  max-width: 30vw;
  /* border-style: solid; */
}

.nav-area {
  grid-area: main;
  /* height: 80vh; */
  /* border-style: solid; */
}

</style>
