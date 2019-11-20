import UIBase from './UIBase'

var UIButton = function (ctx, id) {
    UIBase.call(this, ctx, id, "button")

    this.state = 'normal'

    // click event handler
    this.clicked = null

    


}

UIButton.prototype = new UIBase()
UIButton.prototype.constructor = UIButton 