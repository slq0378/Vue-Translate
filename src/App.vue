<template>
  <div id="app">
      <router-view class="router-view"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      routerViewClass: 'router-init',
      viewTransition: 'vux-pop-in'
    }
  },
}

</script>
<style lang="less">

body {
  /*background-color: #fbf9fe;*/
}

.router-init {
  min-height: 100vh;
}

.router-fade-in-left {
  min-height: 100vh;
  -webkit-animation: fadeInLeft 0.5s;
  animation: fadeInLeft 0.5s;
}

.router-fade-in-right {
  min-height: 100vh;
  -webkit-animation: fadeInRight 0.5s;
  animation: fadeInRight 0.5s;
}

#app {
  min-height: 101%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4c2c2d;
}

@keyframes fadeInLeft {
  from {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.router-view {
  width: 100%;
  min-height: 100vh;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
