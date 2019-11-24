import Connection from './Connection'
import UIBase from '../ui/UIBase'
var moduleBase = function (id, ctx) {
    UIBase.call(this, ctx, id)
    this.connections = []

    this.connect = function (destination) {
        let connection = new Connection(this.ctx, this)
        connection.connect(destination)
        this.connections.push(connection)
    }

    this.disconnect = function () {

    }

    this.draw = function() {
        for (let key in this.connections) {
            this.connections[key].draw()
        }
    }
}

moduleBase.prototype = new UIBase()
moduleBase.prototype.constructor = moduleBase
export default moduleBase