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

    painter.addShape(rec);
    painter.addShape(circle);
    painter.addShape(circle2);

    setTimeout(function(){
        painter.removeShape(circle);
    }, 1000);
}