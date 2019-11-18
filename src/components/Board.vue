<template>
  <div class="Board">
    <canvas ref="canvas" :width="width" :height="height" class="canvas"></canvas>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Interaction from "../ui/Interaction"

export default {
  data: function() {
    return {
      interaction: new Interaction()
    }
  },
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 400
    }
  },
  mounted() {
    this.$refs.canvas.addEventListener("mousedown", this.interaction.onMouseDown)
    this.$refs.canvas.addEventListener("mouseup", this.interaction.onMouseUp)
    this.$refs.canvas.addEventListener("mousemove", this.interaction.onMouseMove)

    this.$store.commit("setCtx", this.$refs.canvas.getContext("2d"));
    this.$store.commit("setAudioCtx", new AudioContext());

    this.$store.commit("initSourceInput");
    this.$store.commit("initFinalGain");
    this.$store.commit("move", {name: "sourceInput", position:{x:30, y:200}})
    this.$store.commit("move", {name: "finalGain", position:{x:450, y:200}})

    let newObjName = this.$store.getters.lengthOfChild;
    this.$store.commit("addOsc", newObjName);
    this.$store.commit("connectToOutput", newObjName);
    this.$store.commit("changeOscType", {name: newObjName, type: "triangle"});
    this.$store.commit("setSource", newObjName);
    this.$store.commit("move", {name: newObjName, position:{x:100, y:100}})

    this.draw();
  },
  computed: mapState(["childObjs", "ctx", "sourceInput", "finalGain", "redraw"]),
  watch: {
    childObjs: function() {
      this.draw();
    }
    ,redraw: function() {
      this.draw();
    }
  
  },
  methods: {
    draw() {
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(0, 0, this.width, this.height);

      for (let key in this.childObjs) {
        this.childObjs[key].draw();
      }

      this.sourceInput.draw()
      this.finalGain.draw()
    }
  }
};
</script>