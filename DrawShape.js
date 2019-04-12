function startDraw() {

    // init Painter
    var painter = new Painter({
        width: 800,
        height: 800
    });

    var circle = new Circle({
        x: 400,
        y: 400,
        r: 100
    });

    var circle2 = new Circle({
        x: 400,
        y: 400,
        r: 50
    });

    var rec = new Rectangle({
        x: 150,
        y: 150,
        width: 200,
        height: 200
    });

    //r:小圆半径；R: 大圆半径；x,y：中心坐标点；rot：旋转角度；
    var star = new Star({
        r: 50,
        R: 100,
        x: 250,
        y: 250,
        rot: 0,
	    borderWidth: 1,
	    fillStyle: "#333"
    });

    var line = new Line({
        x: 100,
        y: 500,
        len: 400,
        rot: 0,
	    borderWidth: 1
    });

    painter.addShape(rec);
    painter.addShape(star);
    painter.addShape(line);
    painter.addShape(circle2);

    setTimeout(function(){
	    painter.addShape(circle);
    }, 1000);

    setTimeout(function(){
        painter.removeShape(circle);
    }, 3000);

    // change1
    // change2
    // change3
    // change4
    // change5
    // change6
}