import UIBase from '../ui/UIBase'

var FinalGain = function (ctx, audioCtx) {
    UIBase.call(this, 'finalGain', ctx)
    this.rect.width = 20
    this.rect.height = 10
    this.audioCtx = audioCtx
    this.finalGain = this.audioCtx.createGain()

    this.finalGain.connect(this.audioCtx.destination)

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
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(this.rect.x, this.rect.y, this.rect.width, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
    }
}

FinalGain.protytype = new UIBase()
FinalGain.prototype.constructor = FinalGain

export default FinalGain