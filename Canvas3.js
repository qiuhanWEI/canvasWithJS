/**
 * Created by XJ on 2017/7/29.
 */
// var mCanvas;
// var cxt;
function initCanvas() {
    // mCanvas = document.getElementById("canvas");
    // cxt = mCanvas.getContext("2d");
    // initMikyouCanvas(mCanvas,cxt);
    // var painter=new Painter(mCanvas,cxt);
    var painter=new Painter({
        width:600,
        height:600
    });
    // drawRect(100, 100, 200, 200);
    // drawCircle(420,200,100);

    // var circle=new Circle(420,200,100);
    var circle=new Circle({
        x:420,
        y:200,
        r:100
    });
    // var circle3=new Circle(420,200,100);
    // console.log(circle === circle3)
    // circle.draw();
    // var circle2=new Circle(420,200,50);
    var circle2=new Circle({
        x:420,
        y:200,
        r:50
    });
    var rec=new Rectangle({
        x:100,
        y:100,
        width:200,
        height:200
    });

    painter.add(rec);
    painter.add(circle);
    painter.add(circle2);
    // painter.add(circle3);
    // painter.pop();
    // painter.pop();
    // painter.pop();
    // painter.remove(rec);
    // painter.render();
    // console.log(painter);
    // console.log(circle.__proto__);
}