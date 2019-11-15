import Connection from './Connection'
import UIBase from '../ui/UIBase'
var moduleBase = function (name, ctx) {
    UIBase.call(this, name, ctx)
    this.connection = new Connection(ctx, this)

    this.connect = function (destination) {
        this.connection.connect(destination)
    }

    this.draw = function(module) {
        module.connection.draw()
    }
}

moduleBase.prototype = new UIBase()
moduleBase.prototype.constructor = moduleBase
export default moduleBase