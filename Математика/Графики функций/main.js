window.onload = function () {
	let cnv = document.getElementById('cnv');
	let ctx = cnv.getContext('2d');

	let w = window.innerWidth;
	let h = window.innerHeight;

	cnv.width = w;
	cnv.height = h;

	let border = 3;
	let sw = 25;
	let sh = sw;
	let sx = ~~(w / sw);
	let sy = ~~(h / sh);

	let centerY = sw * 14 + border;
	let centerX = sw * 28;
	
	let k;

	let interval = setInterval(update, 100);

	function update() {

	ctx.clearRect(0, 0, w, h);

	let a = document.getElementById('inpA').value;
	a = Number(a);

	let b = document.getElementById('inpB').value;
	b = Number(b);

	let value = document.getElementById('inp').value;
	value = Number(value);

	for (let i = 0; i < sx + 1; i++) {
		ctx.fillStyle = "gray";
		ctx.fillRect(i * sw, 0, border, h - (h % sh) + border);
	}

	for (let i = 0; i < sy + 1; i++) {
		ctx.fillStyle = 'gray';
		ctx.fillRect(0, i * sh, w - (w % sw) + border, border);
	}

	ctx.lineWidth = border;
	ctx.strokeStyle = 'black';
	ctx.beginPath();
	ctx.moveTo((w / 2 - sw * 3) - border, sw * sx / 2.3);
	ctx.lineTo((w / 2 - sw * 3) - border, sw * 3);
	ctx.moveTo((w / 2 - sw * 3) - border, sw * 3);
	ctx.lineTo((w / 2 - sw * 3) - border + sw / 2, sw * 3 + sw / 2);
	ctx.moveTo((w / 2 - sw * 3) - border, sw * 3);
	ctx.lineTo((w / 2 - sw * 3) - border - sw / 2, sw * 3 + sw / 2);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo((w / 2 - sw * 3) - border, sw * sx / 4.4);
	ctx.lineTo((w / 2 + 30 * sw), sw * sx / 4.4);
	ctx.moveTo((w / 2 - sw * 3) - border, sw * sx / 4.4);
	ctx.lineTo((w / 2 - 30 * sw - border), sw * sx / 4.4);
	ctx.moveTo((w / 2 + 30 * sw), sw * sx / 4.4);
	ctx.lineTo((w / 2 + 30 * sw) - sw / 2, sw * sx / 4.4 + sw / 2);
	ctx.moveTo((w / 2 + 30 * sw), sw * sx / 4.4);
	ctx.lineTo((w / 2 + 30 * sw) - sw / 2, sw * sx / 4.4 - sw / 2);
	ctx.stroke();

	for (let i = 1; i < 25; i++) {
		ctx.beginPath();
		ctx.moveTo((w / 2 - sw * 3) - border, sw * (i + 3));
		ctx.lineTo((w / 2 - sw * 3) - border + sw / 2.5, sw * (i + 3));
		ctx.moveTo((w / 2 - sw * 3) - border, sw * (i + 3));
		ctx.lineTo((w / 2 - sw * 3) - border - sw / 2.5, sw * (i + 3));
		ctx.stroke();
	}

	for (let i = 1; i < sx - 1; i++) {
		ctx.beginPath();
		ctx.moveTo(sw * i, sw * sx / 4.4);
		ctx.lineTo(sw * i, sw * sx / 4.4 - sw / 2.5);
		ctx.moveTo(sw * i, sw * sx / 4.4);
		ctx.lineTo(sw * i, sw * sx / 4.4 + sw / 2.5);
		ctx.stroke();
	}

	ctx.beginPath();
	ctx.font = "bold 25px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("y", (w / 2 - sw * 3) - border + sw, sw * 3 + 1 * sw);

	ctx.beginPath();
	ctx.font = 'bold 25px Arial';
	ctx.fillStyle = "black";
	ctx.fillText("x", (w / 2 + 30 * sw) - sw, sw * sx / 4.4 - sw);

	ctx.beginPath();
	ctx.font = 'bold 25px Arial';
	ctx.fillStyle = "black";
	ctx.fillText("1", centerX + sw - 2 * border, centerY - sw + border);

	ctx.lineWidth = border;

	ctx.moveTo(centerX, centerY);

	if (k % 2 == 0 && k > 0) { 
		for (let x = 1; x < 500; x++) {
			let y = -((x) ** k / 7 ** (k - 1) + b * 7);
			ctx.beginPath();
			ctx.moveTo(centerX + ((x + a * 7) - 1) * sw / 7, centerY + -(((x) - 1) ** k / 7 ** (k - 1) + b * 7) * sw / 7);
			ctx.lineTo(centerX + (x + a * 7) * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		} 

		for (let x = 0; x > -500; x--) {
			let y = -((x) ** k / 7 ** (k - 1) + b * 7);
			ctx.beginPath();
			ctx.moveTo(centerX + ((x + a * 7) - 1) * sw / 7, centerY + -(((x) - 1) ** k / 7 ** (k - 1) + b * 7) * sw / 7);
			ctx.lineTo(centerX + (x + a * 7) * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		}
	} else if (k % 2 == 1 && k > 1) {
		for (let x = 1; x < 500; x++) {
			let y = -((x) ** k / 7 ** (k - 1) + b * 7);
			ctx.beginPath();
			ctx.moveTo(centerX + ((x + a * 7) - 1) * sw / 7, centerY + -(((x) - 1) ** k / 7 ** (k - 1) + b * 7) * sw / 7);
			ctx.lineTo(centerX + (x + a * 7) * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		} 

		for (let x = 0; x > -500; x--) {
			let y = -((x) ** k / 7 ** (k - 1) + b * 7);
			ctx.beginPath();
			ctx.moveTo(centerX + ((x + a * 7) - 1) * sw / 7, centerY + -(((x) - 1) ** k / 7 ** (k - 1) + b * 7) * sw / 7);
			ctx.lineTo(centerX + (x + a * 7) * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		}

	} else if (k == 1) {
		for (let x = 1; x < 500; x++) {
			let y = -(x ** k + b * 7);
			ctx.beginPath();
			ctx.moveTo(centerX + ((x + a * 7) - 1) * sw / 7, centerY + -((x - 1) ** k + b * 7) * sw / 7);
			ctx.lineTo(centerX + (x + a * 7) * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		} 

		for (let x = 0; x > -500; x--) {
			let y = -(x ** k + b * 7);
			ctx.beginPath();
			ctx.moveTo(centerX + ((x + a * 7) - 1) * sw / 7, centerY + -((x  - 1) ** k + b * 7) * sw / 7);
			ctx.lineTo(centerX + (x + a * 7) * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		}
	} else if (k < 0 && k % 2 == 0 || k % 2 == 1) {
		for (let x = 1; x < 500; x++) {
			let y = -(x ** k / 12 ** (k - 1));
			ctx.beginPath();
			ctx.moveTo(centerX + (x - 1) * sw / 7, centerY + -((x - 1) ** k / 12 ** (k - 1)) * sw / 7);
			ctx.lineTo(centerX + x * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		} 

		for (let x = 0; x > -500; x--) {
			let y = (x ** k / 7 ** (k - 1));
			ctx.beginPath();
			ctx.moveTo(centerX + (x - 1) * sw / 7, centerY + ((x - 1) ** k / 7 ** (k - 1)) * sw / 7);
			ctx.lineTo(centerX + x * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		}
	} else if (k % 2 != 0 && k % 2 != 1 && k > 0) {
		for (let x = 1; x < 500; x++) {
			let y = -(x ** k / 7 ** (k - 1));
			ctx.beginPath();
			ctx.moveTo(centerX + (x - 1) * sw / 7, centerY + -((x - 1) ** k / 7 ** (k - 1)) * sw / 7);
			ctx.lineTo(centerX + x * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		} 

		for (let x = 0; x > -500; x--) {
			let y = (x ** k / 7 ** (k - 1));
			ctx.beginPath();
			ctx.moveTo(centerX + (x - 1) * sw / 7, centerY + ((x - 1) ** k / 7 ** (k - 1)) * sw / 7);
			ctx.lineTo(centerX + x * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		}
	} else if (k == -1) {
		for (let x = 1; x < 1000; x++) {
			let y = -(x ** k / 7 ** (k - 1));
			ctx.beginPath();
			ctx.moveTo(centerX + (x - 1) * sw / 7, centerY + -((x - 1) ** k / 7 ** (k - 1)) * sw / 7);
			ctx.lineTo(centerX + x * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		} 

		for (let x = 0; x > -1000; x--) {
			let y = -(x ** k / 7 ** (k - 1));
			ctx.beginPath();
			ctx.moveTo(centerX + (x - 1) * sw / 7, centerY + -((x - 1) ** k / 7 ** (k - 1)) * sw / 7);
			ctx.lineTo(centerX + x * sw / 7, centerY + y * sw / 7);
			ctx.stroke();
		}
	} else if (k == -3) {
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			ctx.arc(centerX + a * sw, centerY + b * sw, -k * sw, 0, Math.PI*2, true); 
			ctx.stroke(); 
	}

	document.onkeydown = function (e) {
		if (e.keyCode == 13) {
			k = value;
		}
	}

	}

}