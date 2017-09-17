
function HorizonHill(color){
	var str = "<table cellpadding='0' cellspacing='0'>";
	for(var i = 1; i <= 100; i++){
		str += "<tr><td class='horizonClass' style='background-color:" + color + ";opacity:" + (i/100) + ";filter:alpha(opacity=" + (i*1) + ")'></td></tr>";
	}
	str += "</table>";
	//alert(str);
	horizon_hill.innerHTML = str;
}

function HorizonHill_top(){
	var sWidth = screen.availWidth - 600;
	var str = "<table cellpadding='0' cellspacing='0'>";
	var color = RandomColor(180);

	for(var i = 100; i >= 0; i--){
		str += "<tr><td class='horizonClass_top' style='width:" + sWidth + "px;background-color:" + color + ";opacity:" + (i/100) + ";filter:alpha(opacity=" + (i*1) + ")'></td></tr>";
	}
	str += "</table>";
	//alert(str);
	horizon_hill_top.innerHTML = str;
}
function HorizonHill_bottom(){
	var sWidth = screen.availWidth - 600;
	var sHeight = document.body.scrollHeight - 90;
	var str = "<table cellpadding='0' cellspacing='0'>";
	var color = RandomColor(180);
	for(var i = 1; i <= 25; i++){
		str += "<tr><td class='horizonClass' style='top:" + sHeight + "px;width:" + sWidth + "px;background-color:" + color + ";opacity:" + (i/25) + ";filter:alpha(opacity=" + (i*4) + ")'></td></tr>";
	}
	str += "</table>";
	//alert(str);
	horizon_hill_bottom.innerHTML = str;
}

function RandomColor(bright){
	var str = "rgb(";
	var min = bright;
	var max = 255;

	str += parseInt((max - min + 1) * Math.random() + min) + ",";
	str += parseInt((max - min + 1) * Math.random() + min) + ",";
	str += parseInt((max - min + 1) * Math.random() + min) + ")";

	return str;
}