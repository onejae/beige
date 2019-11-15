import { store } from '../store'
import { Point } from '../libs/coordinate'

export default function () {
    var self = this
    self.mouseDown = false
    self.selectedObj = null
    self.previousPoint = new Point(0, 0)

    this.onMouseMove = function (event) {
        if (self.selectedObj) {
            let deltaX = event.offsetX - self.previousPoint.x
            let deltaY = event.offsetY - self.previousPoint.y

            let currentPosition = self.selectedObj.rect
            self.selectedObj.move(currentPosition.x + deltaX, currentPosition.y + deltaY)
            store.commit('redraw')
        }
        self.previousPoint.x = event.offsetX
        self.previousPoint.y = event.offsetY
    }

    this.onMouseDown = function (event) {
        self.previousPoint.x = event.offsetX
        self.previousPoint.y = event.offsetY

        for (let key in store.getters.childObjs) {
            let obj = store.getters.childObjs[key]
            if (obj.hittest(event.offsetX, event.offsetY)) {
                self.selectedObj = obj
            }
        }
    }

    this.onMouseUp = function () {
        self.selectedObj = null
    }
}