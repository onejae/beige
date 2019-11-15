<template>
  <div class="Keyboard">
    <canvas ref="canvas" :width="width" :height="height" class="canvas"></canvas>
  </div>
</template>

<script>
import { checkRect, Rect, Point } from "../libs/coordinate.js";

var noteFreq = [
  16.35,
  17.32,
  18.35,
  19.45,
  20.6,
  21.83,
  23.12,
  24.5,
  25.96,
  27.5,
  29.14,
  30.87
];

function aKey() {
  this.frequency = 0;
  this.rt = new Rect(0, 0, 0, 0);
  this.color = "white";
}

function keyCompare(a, b) {
  if (a.color == b.color) return 0;
  if (a.color == "white") return -1;

  return 1;
}

export default {
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 80
    }
  },
  data: function() {
    return {
      keys: [],
      mouseDown: false
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.ctx.fillStyle = "black";
    this.$refs.canvas.addEventListener("mousedown", this.onMouseDown);
    this.$refs.canvas.addEventListener("mouseup", this.onMouseUp);
    this.$refs.canvas.addEventListener("mousemove", this.onMouseMove);

    // initialize virtual keyboard
    let prevWhiteX = 0;
    const widthOfWhiteKey = 25;
    const widthOfBlackKey = 13;

    for (let i = 0; i < 55; i++) {
      let v = i % 12;
      let key = new aKey();

      // black keys
      key.freq = noteFreq[i % 12] * Math.pow(2, Math.floor(i / 12 + 1)) * 4;
      if (v == 1 || v == 3 || v == 6 || v == 8 || v == 10) {
        key.rt = new Rect(
          prevWhiteX - widthOfWhiteKey * 0.3,
          0,
          widthOfBlackKey,
          this.height * 0.6
        );
        key.color = "black";
      } else {
        // white keys
        key.rt = new Rect(prevWhiteX, 0, widthOfWhiteKey, this.height);
        key.color = "white";
        prevWhiteX = key.rt.x + widthOfWhiteKey;
      }

      this.keys.push(key);
    }

    this.keys.sort(keyCompare);

    this.draw();
  },
  watch: {},
  methods: {
    onMouseDown(e) {
      // find a touched key
      let l = this.keys.length;

      for (var i = l - 1; i >= 0; i--) {
        let k = this.keys[i];
        k.pressed = false;
        if (checkRect(k.rt, new Point(e.offsetX, e.offsetY))) {
          this.mouseDown = true;
          k.pressed = true;
          this.$store.commit("playNote", k.freq);

          break;
        }
      }

      for (let j = i - 1; j >= 0; j--) {
        this.keys[j].pressed = false;
      }
      this.draw();
    },
    onMouseUp() {
      this.mouseDown = false;
      this.keys.forEach(k => {
        k.pressed = false;
      });
      this.$store.commit("playNote", 0);
      this.draw();
    },
    onMouseMove(e) {
      if (this.mouseDown) {
        let l = this.keys.length;

        for (var i = l - 1; i >= 0; i--) {
          let k = this.keys[i];
          k.pressed = false;
          if (checkRect(k.rt, new Point(e.offsetX, e.offsetY))) {
            this.mouseDown = true;
            k.pressed = true;
            this.$store.commit("playNote", k.freq);
            break;
          }
        }

        for (let j = i - 1; j >= 0; j--) {
          this.keys[j].pressed = false;
        }

        this.draw();
      }
    },
    draw() {
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.width, this.height);
      this.ctx.stroke();
      // draw keyboard
      this.keys.forEach(k => {
        this.ctx.beginPath();

        if (k.pressed) {
          this.ctx.fillStyle = "#FDDFDF";
        } else {
          this.ctx.fillStyle = k.color;
        }
        this.ctx.fillRect(k.rt.x, k.rt.y, k.rt.width, k.rt.height);

        this.ctx.strokeStyle = "black";
        this.ctx.rect(k.rt.x, k.rt.y, k.rt.width, k.rt.height);
        this.ctx.stroke();
      });
    }
  }
};
</script>