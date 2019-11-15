export default function(name, graphicCtx, audioCtx) {
    this.ctx = graphicCtx
    this.name = name
    this.o = audioCtx.crea
    this.destination = ''

    this.draw = function() {

    }

    this.connectTo = function(target) {
        this.o.connect(target.o)
    }

    this.setNote = function (freq) {
        this.o.frequency.value = freq
    }
}