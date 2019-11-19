import { Rect, checkRect, Point } from '../libs/coordinate'

// base component of all ui 
// ctx : canvas context
// id : idientifier, must be unique
export default function (ctx, id, type) {
    this.rect = new Rect(0, 0, 0, 0)
    this.ctx = ctx
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
        this.rect.x = x
        this.rect.y = y
    }

    this.hittest = function (x, y) {
        return checkRect(this.rect, new Point(x, y))
    }

    this.getCenter = function () {
        return new Point(this.rect.x + (this.rect.width * 0.5), this.rect.y + (this.rect.height * 0.5))
    }
}