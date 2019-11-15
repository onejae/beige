<template>
  <div id="CtrlPanel">
    <button v-on:click="add">Oscillator</button>
    <button>Reverb</button>
    <button>Delay</button>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 100
    }
  },
  methods: {
    add() {
      this.$store.commit("addOsc");
    }
  },
  mounted() {

  }
};
</script>