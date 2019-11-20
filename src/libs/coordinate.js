var Rect = function (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height

    this.getCenter = function () {
        return new Point(this.x + (this.width * 0.5), this.y + (this.height * 0.5))
    }
}
var Point = function (x, y) {
    this.x = x
    this.y = y
}
var checkRect = function (rt, point) {
    if (point.x >= rt.x && point.x < rt.x + rt.width && point.y >= rt.y && point.y < rt.y + rt.height) {
        return true
    }

    return false
}

Point.add = function (a, b) {
    return new Point(a.x + b.x, a.y + b.y)
}

Rect.addByPoint = function (rect, point) {
    return new Rect(rect.x + point.x, rect.y + point.y, rect.width, rect.height)
}


export { checkRect, Rect, Point }