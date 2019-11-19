import UIBase from '../ui/UIBase'

var SourceInput = function(ctx, audioCtx) {
    UIBase.call(this, ctx, 'sourceInput')

    this.rect.width = 20
    this.rect.height = 10
    this.audioCtx = audioCtx
    this.source = this.audioCtx.createConstantSource()

    this.start = function () {
        this.source.start()
    }

    this.connect = function (destination) {
        this.source.connect(destination)
    }
    this.playNote = function (freq) {
        this.source.offset.value = freq
    }
    this.draw = function () {
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(this.rect.x, this.rect.y, this.rect.width, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
    }
}

SourceInput.protytype = new UIBase()
SourceInput.prototype.constructor = SourceInput

export default SourceInput