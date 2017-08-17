function Circle(params) {
	this.x = params.x;
	this.y = params.y;
	this.r = params.r;
	this.draw = function (context) {
		context.beginPath();
		context.arc(this.x, this.y, this.r, 0, 360);
		context.stroke();
		context.closePath();
	}
}

function Rectangle(params) {
	this.x = params.x;
	this.y = params.y;
	this.width = params.width;
	this.height = params.height;
	this.draw = function (context) {
		context.strokeRect(this.x, this.y, this.width, this.height);
	}
}

function Star(params) {
	this.r = params.r;
	this.R = params.R;
	this.x = params.x;
	this.y = params.y;
	this.rot = params.rot;
	this.borderWidth = params.borderWidth;
	this.fillStyle = params.fillStyle;
	this.draw = function (cxt) {
		cxt.beginPath();
		for (var i = 0; i < 5; i++) {
			cxt.lineTo(Math.cos((18 + 72 * i - this.rot) / 180 * Math.PI) * this.R + this.x, -Math.sin((18 + 72 * i - this.rot ) / 180 * Math.PI) * this.R + this.y);
			cxt.lineTo(Math.cos((54 + 72 * i - this.rot) / 180 * Math.PI) * this.r + this.x, -Math.sin((54 + 72 * i - this.rot ) / 180 * Math.PI) * this.r + this.y);
		}
		cxt.closePath();

		cxt.lineWidth = this.borderWidth;
		cxt.fillStyle = this.fillStyle;

		cxt.fill();
		cxt.stroke();
	}
}

function Line(params) {
	this.x = params.x;
	this.y = params.y;
	this.len = params.len;
	this.rot = params.rot;
	this.borderWidth = params.borderWidth;
	this.draw = function (cxt) {
		cxt.beginPath();
		cxt.moveTo(this.x, this.y);
		// cxt.lineTo(this.x + this.len, this.y);
		cxt.lineTo(this.x + Math.cos((this.rot) / 180 * Math.PI) * this.len, Math.sin((this.rot) / 180 * Math.PI) * this.len + this.y);
		cxt.closePath();

		cxt.lineWidth = this.borderWidth;

		cxt.stroke();
	}
}

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

	this.addShape = function (shape) {
		this.list.push(shape);
		this.render();
	};

	this.removeShape = function (shape) {
		for (var i = 0, length = this.list.length; i < length; i++) {
			if (this.list[i] === shape) {
				this.list.splice(i, 1);
				break;
			}
		}
		this.render();
	};

	this.render = function () {
		this.context.clearRect(0, 0, this.width, this.height);
		for (var i = 0, length = this.list.length; i < length; i++) {
			this.list[i].draw(this.context);
		}
	}
}