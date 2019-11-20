import ModuleBase from './ModuleBase'

var SourceInput = function (ctx, audioCtx) {
    ModuleBase.call(this, 'sourceInput', ctx)

    this.rect.width = 20
    this.rect.height = 10
    this.audioCtx = audioCtx
    this.source = this.audioCtx.createConstantSource()

    this.start = function () {
        this.source.start()
    }

    this.connect = function (module) {
        this.source.connect(module.o.frequency)
        SourceInput.prototype.connect.call(this, module)
    }
    this.playNote = function (freq) {
        this.source.offset.value = freq
    }
    this.draw = function () {
        SourceInput.prototype.draw.call(this)
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(this.rect.x, this.rect.y, this.rect.width, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
    }
}

SourceInput.prototype = new ModuleBase()
SourceInput.prototype.constructor = SourceInput

export default SourceInput