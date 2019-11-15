// each connection will be implemented as class later
// import arrow from '../ui/arrow'
export default function(ctx, parent) {
    this.ctx = ctx
    this.targetObjs = {}
    this.parent = parent
    
    this.draw = function() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = "white"

        for (let key in this.targetObjs) {
            let destPosition = this.targetObjs[key].rect

            let c = parent.getCenter()
            this.ctx.moveTo(c.x, c.y)
            this.ctx.lineTo(destPosition.x, destPosition.y)
        }

        this.ctx.stroke()
    }
    
    this.connect = function(obj) {
        this.targetObjs[obj.name] = obj
    }

    this.disConnect = function(obj) {
        console.log(obj)
    }
}