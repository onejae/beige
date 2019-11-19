import UIBase from './UIBase'

var UIButton = function (ctx, id) {
    UIBase.call(this, ctx, id)

    this.state = 'normal'

    // click event handler
    this.clicked = null

    


}

UIButton.prototype = UIBase()
UIButton.prototype.constructor = UIButton 