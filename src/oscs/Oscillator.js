import ModuleBase from './ModuleBase'

var Osc = function (name, ctx, audioCtx) {
    ModuleBase.call(this, name, ctx)
    this.rect.width = 50
    this.rect.height = 50

    // audio
    this.o = audioCtx.createOscillator()
    this.o.type = "sine"
    this.o.frequency.value = 0
    this.o.start()

    // user interface

    this.draw = function () {
        Osc.prototype.draw.call(this)
        ctx.fillStyle = "grey"
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)

        // draw knobs
        ctx.font = "30px Arial";
        ctx.fillStyle = "white"
        ctx.fillText("type : " + this.o.type, this.rect.x, this.rect.y)
    }
}

Osc.prototype = new ModuleBase()
Osc.prototype.constructor = Osc

export default Osc