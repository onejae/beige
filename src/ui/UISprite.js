import UIBase from "./UIBase"

var UISprite = function(ctx, id) {
    UIBase.call(this, ctx, id, "sprite")
    this.color = "white"

    this.setColor = function(color) {
        this.color = color
    }
    this.draw = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height)
    }
}

UISprite.prototype = new UIBase()
UISprite.prototype.constructor = UISprite