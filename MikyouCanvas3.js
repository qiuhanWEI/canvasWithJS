/**
 * Created by XJ on 2017/7/29.
 */
function Painter(obj) {
    var canvas=document.createElement('canvas');
    canvas.width=obj.width;
    canvas.height=obj.height;
    this.width=obj.width;
    this.height=obj.height;
    document.body.appendChild(canvas);

    this.cxt = canvas.getContext("2d");
    this.shape_list=[];
}


Painter.prototype={
    add:function (shape) {
        this.shape_list.push(shape);
        // this.clear();
        this.render();
    },
    pop:function () {
        this.shape_list.pop();
        // this.clear();
        this.render();
    },
    render : function() {
        this.cxt.clearRect(0,0,this.width,this.height);
        for(var i= 0, length=this.shape_list.length; i<length; i++) {
            this.shape_list[i].draw(this.cxt);
        }
    },
    remove:function (shape) {
        for(var i= 0, length=this.shape_list.length; i<length; i++) {
            if (this.shape_list[i]===shape){
                this.shape_list.splice(i,1);
            }
        }
        // this.clear();
        this.render();
    }
    // clear:function () {
    //     this.cxt.clearRect(0,0,this.width,this.height);
    // }
};

function Shape() {
    this.leftTopX=0;
    this.leftTopY=0;
    this.rightButtomX=0;
    this.rightButtomY=0;
}
// Shape.prototype={
//     getId:(function () {
//         var i=1;
//         return function () {
//             i++;
//         }
//     })()
//
// };

function Circle(obj) {
    this.x=obj.x;
    this.y=obj.y;
    this.r=obj.r;
}

Circle.prototype= new Shape();
Circle.prototype={
    leftTopX:this.x-this.r,
    leftTopY:this.y-this.r,
    rightButtomX:this.x+this.r,
    rightButtomY:this.y+this.r
};
Circle.prototype.draw=function (cxt) {
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.r,0,360);
    cxt.stroke();
    cxt.strokeRect(this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
    cxt.closePath();
};

function Rectangle(obj) {
    this.x=obj.x;
    this.y=obj.y;
    this.width=obj.width;
    this.height=obj.height;
}
Rectangle.prototype= new Shape();
Rectangle.prototype={
    leftTopX:this.x,
    leftTopY:this.y,
    rightButtomX:this.x+this.width,
    rightButtomY:this.y+this.height
};
Rectangle.prototype.draw=function (cxt) {
    cxt.strokeRect(this.x, this.y, this.width, this.height);
};