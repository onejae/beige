import { Rect, checkRect, Point } from '../libs/coordinate'

// base component of all ui 
// ctx : canvas context
// name : idientifier, must be unique
export default function (name, ctx) {
    this.rect = new Rect(0, 0, 0, 0)
    this.ctx = ctx
    this.name = name

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