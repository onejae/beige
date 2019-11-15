<template>
  <div id="app">
    <Board/>
    <Keyboard/>
    <CtrlPanel id="ctrlpanel" :width="500" :height="100"/>
  </div>
</template>

<script>
import Board from './components/Board.vue'
import CtrlPanel from './components/CtrlPanel.vue'
import Keyboard from './components/Keyboard.vue'

export default {
  name: 'Beige',
  components: {
    Board,
    Keyboard,
    CtrlPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
