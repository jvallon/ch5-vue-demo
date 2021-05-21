<template>
  <div class="volume-container">
    <font-awesome-icon class="icon mute" :icon="['fas', 'volume-mute']"></font-awesome-icon>
    <font-awesome-icon class="icon down" :icon="['fas', 'minus']" v-if="showButtons"></font-awesome-icon>
    <div class="slider-container">
      <input type="range" min="1" max="100" value="50" class="slider" id="volume">
    </div>
    <font-awesome-icon class="icon up" :icon="['fas', 'plus']" v-if="showButtons"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: 'VolumeHorizontal',
  props: {
    showButtons: { type: Boolean }
  }
}
</script>

<style lang="scss" scoped>
.volume-container {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
}

.icon {
  /* height: 3rem; */
  padding: 1rem;
  font-size: 2.5rem;
}

.slider-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding: 16px;
  // margin-right: 1em;
}

.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background: #d3d3d3;
  outline: 2px;
  outline-color: darkblue;
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 30px; /* Set a specific slider handle width */
  height: 30px; /* Slider handle height */
  background: #313036; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 15px;
}
</style>