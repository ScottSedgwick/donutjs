function drawArc(ctx, cX, cY, outerR, innerR, startAngle, endAngle, color, lineColor, lineWidth) {
	startAngle = startAngle - Math.PI / 2
	endAngle = endAngle - Math.PI / 2
	
	var startSin = Math.sin(startAngle);
	var startCos = Math.cos(startAngle);
	var endSin = Math.sin(endAngle);
	var endCos = Math.cos(endAngle);
	
	var innerStartX = cX + innerR * startCos;
	var innerStartY = cY + innerR * startSin;
	
	var outerStartX = cX + outerR * startCos;
	var outerStartY = cY + outerR * startSin;
	
	var innerEndX = cX + innerR * endCos;
	var innerEndY = cY + innerR * endSin;
	
	var outerEndX = cX + outerR * endCos;
	var outerEndY = cY + outerR * endSin;
	
	ctx.fillStyle = color;
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	ctx.moveTo(innerStartX, innerStartY);
	ctx.lineTo(outerStartX, outerStartY);
	ctx.arc(cX, cY, outerR, startAngle, endAngle, false);
	ctx.lineTo(innerEndX, innerEndY);
	ctx.arc(cX, cY, innerR, endAngle, startAngle, true);
	ctx.fill();
	if (lineWidth > 0) {
		ctx.stroke();
	}
}

function arc(x, y, outerR, innerR, startAngle, endAngle, color, lineColor, lineWidth)
{
	this.x = x;
	this.y = y;
	this.outerR = outerR;
	this.innerR = innerR;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.color = color;
	this.lineColor = lineColor;
	this.lineWidth = lineWidth;
	this.draw = arcDraw;
}

function arcDraw(ctx) 
{
	drawArc(ctx, this.x, this.y, this.outerR, this.innerR, this.startAngle, this.endAngle, this.color, this.lineColor, this.lineWidth);
}