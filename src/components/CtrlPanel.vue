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
      let newObjName = this.$store.getters.lengthOfChild + 1;
      console.log(newObjName);
      this.$store.commit("addOsc", newObjName);
      this.$store.commit("addOsc", newObjName);
      this.$store.commit("connectToOutput", newObjName);
      this.$store.commit("changeOscType", {
        name: newObjName,
        type: "triangle"
      });
      this.$store.commit("setSource", newObjName);
      let x = Math.random() * 1000 % 50;
      let pm = Math.random() < 0.5 ? -1 : 1 
      this.$store.commit("move", {
        name: newObjName,
        position: { x: 100 + (x * pm), y: 100 + (x * pm) }
      });
      this.$store.commit("redraw");
    }
  },
  mounted() {}
};
</script>