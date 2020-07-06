<template>
  <div class="bar">
    <div class="end"></div>
    <div class="middle mastered" 
      :style="{gridColumnStart: 2, gridColumnEnd: mastered}">
    </div>
    <div class="middle working"
      :style="{gridColumnStart: mastered, gridColumnEnd: mastered+working}">
    </div>
    <div class="middle unseen"
      :style="{gridColumnStart: mastered+working, gridColumnEnd: 102}">
    </div>
    <div class="end"></div>
  </div>
</template>

<script>

export default {
  name: 'ProgressBar',
  props: {
    mastered: {
      type: Number,
      required: true,
      default: 0
    },
    working: {
      type: Number,
      required: true,
      default: 0
    }
  },

}
</script>

<style scoped>
  .bar {
    width: 100%;
    height: 50px;
    grid: 1fr 75% 1fr/2fr repeat(100, 1fr) 2fr;
    display: grid;
  }

  .end {
    grid-row: 1/4;
    background-color: rgb(0, 0, 0);
  }

  .middle {
    grid-row: 2
  }

  .mastered {
    background-color: rgb(120, 204, 35);
  }

  .working {
    background-color: rgb(45, 136, 255);
  }

  .unseen {
    background-color: rgb(151, 0, 0);
  }
</style>