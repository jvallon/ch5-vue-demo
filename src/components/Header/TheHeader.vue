<template>
  <div>
    <div class="header-container">
      <img class="logo" src="@/assets/logo.png"/>
      <div class="title">{{ roomName }}</div>
      <div></div>
      <div class="subheader">
        <font-awesome-icon class="icon" :icon="['fas', 'power-off']"></font-awesome-icon>
        <font-awesome-icon class="icon" :icon="['fas', 'cog']"></font-awesome-icon>
        <font-awesome-icon class="icon" :icon="['fas', 'calendar-alt']"></font-awesome-icon>
        <font-awesome-icon class="icon" :icon="['fas', 'bell']"></font-awesome-icon>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'TheHeader',
  components:{
    
  },
  props: {
    roomName: {
      type: String,
      default: 'Room Name'
    }
  }
}
</script>

<style>
hr {
  height: 0;
  width: 95%;
  border-width: 1px;
  color: #333;
}

.header-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo {
  height: 3rem;
  /* width: 2rem; */
  margin-left: 1rem;
  max-height: 5rem;
}

.title {
  font-size: 2rem;
  margin: 1rem;
  text-align: left;
}

.subheader {
  margin-left: auto;
  margin-right: 1rem;
  align-self: right;
  display:flex;
  flex-direction: row-reverse;
  gap: 2rem;
}

.icon {
  padding: 1rem;
  font-size: 2.25rem;
}
</style>