var Rect = function (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
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

export { checkRect, Rect, Point }