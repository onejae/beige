import { Rect, checkRect, Point } from '../libs/coordinate'

// base component of all ui 
// ctx : canvas context
// id : idientifier, must be unique
export default function (ctx, id, type) {
    this.rect = new Rect(0, 0, 0, 0)
    this.ctx = ctx
    this.parent = null
    this.childs = []

    if (type) {
        this.type = type
    }
    else {
        this.type = "notype"
    }
    if (id) {
        this.id = id
    }
    else {
        this.id = this.type + '_' + new Date().getTime()
    }

    this.move = function (x, y) {
        // position sets based on their parent 
        let basePos = new Point(0, 0)
        if (this.parent) {
            basePos.x = this.parent.rect.x
            basePos.y = this.parent.rect.y
        }

        this.rect.x = basePos.x + x
        this.rect.y = basePos.y + y
    }

    this.hittest = function (x, y) {
        return checkRect(this.rect, new Point(x, y))
    }

    this.getCenter = function () {
        return this.rect.getCenter()
    }

    this.addChild = function (obj) {
        obj.parent = this
        this.childs.push(obj)
    }
}