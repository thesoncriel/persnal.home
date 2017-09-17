function ArrowMaster(){
	var num,pix,siz,rgb,top,left;
	var sWidth = screen.availWidth - 125;
	var sHeight = screen.availHeight - 210;
	var pixMin = 2;
	var pixMax = 8;
	var sizMin = 1;
	var sizMax = 4;
	var bright = 150;
	var loopNum = 60;
	var str = "";
	for(var i = 0; i < loopNum; i++)
	{
		num = parseInt( (3-0+1)*Math.random()+0 );
		pix = parseInt( (pixMax-pixMin+1)*Math.random()+pixMin );
		siz = parseInt( (sizMax-sizMin+1)*Math.random()+sizMin );
		rgb = RandomColor(bright);
		top = parseInt( (sHeight-1+1)*Math.random()+1 );
		left = parseInt( (sWidth-1+1)*Math.random()+1 );
		str += ArrowMaker(num,pix,siz,rgb,top,left);
	}
	random_polygon.innerHTML = str;
}
function ArrowMaster_right(){
	var num,pix,siz,rgb,top,left;
	var sWidth = 240;
	var sHeight = screen.availHeight - 210;
	var pixMin = 2;
	var pixMax = 8;
	var sizMin = 1;
	var sizMax = 4;
	var bright = 150;
	var loopNum = 60;
	var str = "";
	for(var i = 0; i < loopNum; i++)
	{
		num = parseInt( (3-0+1)*Math.random()+0 );
		pix = parseInt( (pixMax-pixMin+1)*Math.random()+pixMin );
		siz = parseInt( (sizMax-sizMin+1)*Math.random()+sizMin );
		rgb = RandomColor(bright);
		top = parseInt( (sHeight-1+1)*Math.random()+1 );
		left = parseInt( (sWidth-1+1)*Math.random()+1 );
		str += ArrowMaker(num,pix,siz,rgb,top,left);
	}
	random_polygon.innerHTML = str;
}
function ArrowMaster_top(){
	var num,pix,siz,rgb,top,left;
	var sWidth = screen.availWidth - 550;
	var sHeight = document.body.scrollHeight - 230;
	var pixMin = 2;
	var pixMax = 8;
	var sizMin = 1;
	var sizMax = 4;
	var bright = 200;
	var loopNum = 80;
	var str = "";
	for(var i = 0; i < loopNum; i++)
	{
		num = parseInt( (3-0+1)*Math.random()+0 );
		pix = parseInt( (pixMax-pixMin+1)*Math.random()+pixMin );
		siz = parseInt( (sizMax-sizMin+1)*Math.random()+sizMin );
		rgb = RandomColor(bright);
		top = parseInt( (sHeight-1+1)*Math.random()+1 );
		left = parseInt( (sWidth-1+1)*Math.random()+1 );
		str += ArrowMaker(num,pix,siz,rgb,top,left);
	}
	random_polygon.innerHTML = str;
}

/////////////////////////////////////////////////
///이름 : ArrowMaker
///설명 : 대각선 방향을 가리키는 간단한 화살표를 알고리즘(?)에 기인하여 만들어 냄
///       만들어진 화살표는 bmp 방식을 따 왔으나 실제론 <table>태그로 만들어낸 표이다.
///인수 : num = 화살표의 방향. 0=좌측상단 1=우측상단 2= 우측하단 3=좌측하단
///       pix = 화살표의 가로/세로 높이. 기본적으로 화살표의 원형은 정사각형으로써 실제론 가로/세로의 셀 개수를 나타냄
///       siz = 각 화살표을 이루는 픽셀의 크기
///       rgb = 화살표의 색깔. rgb(n,n,n)의 형태로 넣어 주어야 한다.
///       top = 화살표의 y 좌표. 픽셀 단위
///      left = 화살표의 x 좌표. 픽셀 단위
//////////////////////////////////////////////////
function ArrowMaker(num, pix, siz, rgb, top, left){
	var str = "<table border='0' cellpadding='0' cellspacing='1' style='position:absolute;top:" + top + "px;left:" + left + "px'>";
	var trs = "<td class='arrow_blank'></td>";
	var dot = "<td style='width:" + siz + "px;height:" + siz + "px;background-color:" + rgb + "'></td>";
	var ja = new Array(4);

	switch(num){
		case 0:
			ja[0] = pix;
			ja[1] = 0;
			ja[2] = -pix;
			ja[3] = 1;
			break;
		case 1:
			ja[0] = -pix;
			ja[1] = 0;
			ja[2] = pix;
			ja[3] = 1;
			break;
		case 2:
			ja[0] = -pix;
			ja[1] = (pix-1);
			ja[2] = 1;
			ja[3] = -1;
			break;
		case 3:
			ja[0] = 1;
			ja[1] = (pix-1);
			ja[2] = -pix;
			ja[3] = -1;
			break;
	}

	for(var i = 0; i < pix; i++){
		str += "<tr>";
		for(var j = 0; j < ja[0] - i*ja[3]; j++){
			str += dot;
		}
		for(var j = 0; j < ja[1] + i*ja[3]; j++){
			str += trs;
		}
		for(var j = 0; j < ja[2] - i*ja[3]; j++){
			str += dot;
		}
		str += "</tr>";
	}

	str += "</table>";
	return str;

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

function BrightColor(rgb, bright){
	var str = "rgb(";
	var tmp = "";
	var tmpN = 0;
	var RGB = new Array(3);
	var len = rgb.length;
	var i=4;
	
	for(var n = 0; n < 3; n++){
		do{
			tmp += rgb.charAt(i);
			i++;
		}while( ((rgb.charAt(i) != ",") == (rgb.charAt(i) != ")")) );

		tmpN = parseInt(tmp);
		str += parseInt(tmpN + ((255 - tmpN) * bright/100));

		if(n < 2)
		{
			str += ","
		}
		tmp = "";
		i++;
	}
	str += ")";
	return str;
}