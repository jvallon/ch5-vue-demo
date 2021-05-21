<template>
  <div class="container">
    <div class="header">
      <img class="logo" src="@/assets/bmw-logo.png"/>
      <div class="title">{{ roomName }}</div>
      <div></div>
      <div class="toolbar">
        <font-awesome-icon class="icon" :icon="['fas', 'power-off']"></font-awesome-icon>
        <font-awesome-icon class="icon" :icon="['fas', 'cog']"></font-awesome-icon>
        <font-awesome-icon class="icon" :icon="['fas', 'calendar-alt']"></font-awesome-icon>
        <font-awesome-icon class="icon" :icon="['fas', 'bell']"></font-awesome-icon>
      </div>
    </div>
    <div class="line"></div>
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

<style lang="scss" scoped>
.line {
  width: 98%;
  margin: 0 1%;
  border-bottom: 1px solid #aaa;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo {
  height: 4rem;
  margin-left: 1rem;
  margin-right: 1rem;
  max-height: 5rem;
}

.title {
  font-size: 2rem;
  margin: 1rem 0;
  text-align: left;
}

.toolbar {
  min-width: 30vw;
  margin-left: auto;
  align-self: right;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
}

.icon {
  margin-left: .25rem;
  padding: 1rem;
  font-size: 2.25rem;
}
</style>