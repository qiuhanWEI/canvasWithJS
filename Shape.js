
function Shape() {
    this.leftTopX = 0;
    this.leftTopY = 0;
    this.rightButtomX = 0;
    this.rightButtomY = 0;
}


function Circle(params) {
    this.x = params.x;
    this.y = params.y;
    this.r = params.r;
    // 组合继承
    Shape.call(this);

}

Circle.prototype = new Shape();
Circle.prototype = {
    leftTopX: this.x - this.r,
    leftTopY: this.y - this.r,
    rightButtomX: this.x + this.r,
    rightButtomY: this.y + this.r
};
Circle.prototype.draw = function (context) {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 360);
    context.stroke();
    //context.strokeRect(this.x - this.r, this.y - this.r, 2 * this.r, 2 * this.r);
    context.closePath();
};

function Rectangle(params) {
    this.x = params.x;
    this.y = params.y;
    this.width = params.width;
    this.height = params.height;
    Shape.call(this);
}
Rectangle.prototype = new Shape();
Rectangle.prototype = {
    leftTopX: this.x,
    leftTopY: this.y,
    rightButtomX: this.x + this.width,
    rightButtomY: this.y + this.height
};
Rectangle.prototype.draw = function (context) {
    context.strokeRect(this.x, this.y, this.width, this.height);
};



// Painter
function Painter(params) {
    
    var canvas = document.createElement('canvas');
    canvas.width = params.width;
    canvas.height = params.height;
    document.body.appendChild(canvas);

    this.width = params.width;
    this.height = params.height;
    this.context = canvas.getContext("2d");
    this.list = new Array();

    this.addShape = function(shape) {
        this.list.push(shape);
        this.render();
    }
    
    this.popShape = function() {
        this.list.pop();
        this.render();
    }

    this.removeShape = function(shape) {
        for (var i = 0, length = this.list.length; i < length; i++) {
            if (this.list[i] === shape) {
                this.list.splice(i, 1);
                break;
            }
        }
        this.render();
    }

    this.render = function() {
        this.context.clearRect(0, 0, this.width, this.height);
        for (var i = 0, length = this.list.length; i < length; i++) {
            this.list[i].draw(this.context);
        }
    }
}