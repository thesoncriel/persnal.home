// JavaScript Document

function CrossWord(user_str,R1,G1,B1,R2,G2,B2){
	var str = "";
	var top,left;
	var len = user_str.length;
	var R=0,G=0,B=0;
	for(var i = 0; i < len; i++){
		top = 81-parseInt(i/(len-1)*81 - i/(len-1)*2);
		left = parseInt(i/(len-1)*100);
		//alert("top:" + top + "\nleft:" + left);
		R = Math.abs(parseInt(R1+((1-i)*(R1-R2))/(len-1)));
		G = Math.abs(parseInt(G1+((1-i)*(G1-G2))/(len-1)));
		B = Math.abs(parseInt(B1+((1-i)*(B1-B2))/(len-1)));
		str += "<span class='cross_word_pri' style='color:RGB(" + R + "," + G + "," + B + ");top:" + top + "%;left:" + left + "%'>" + user_str.charAt(i) + "</span>";
	}
	FixPosition();
	cross_word.innerHTML = str;// + "<br>" + window.innerHeight + "<br>" + window.innerWidth;
}
function CrossWord_Easy(user_str,RGB1,RGB2){
	var R1,R2,G1,G2,B1,B2;
	if(user_str.length < 3){
		user_str = "3글자 이상 적어 주세요 ~"
	}
	R1 = RGB_slice(RGB1,0);
	G1 = RGB_slice(RGB1,1);
	B1 = RGB_slice(RGB1,2);
	R2 = RGB_slice(RGB2,0);
	G2 = RGB_slice(RGB2,1);
	B2 = RGB_slice(RGB2,2);
	CrossWord(user_str,R1,G1,B1,R2,G2,B2);
}
function FixPosition(){
	cross_word.style.width = screen.availWidth - 125;
	cross_word.style.height = screen.availHeight - 135 - 75;
	EnterMain.style.top = screen.availHeight - 135 - EnterMain.style.height - 300;
	EnterMain.style.left = screen.availWidth - 250 - EnterMain.style.width - 25;
}



function OpenColorSelector(num){
	var n = 0;
	var str = "";
	ColorSelector.style.width = "90%";
	ColorSelector.style.height = "90%";
	str = "<form id='frmColorSelector'>" + 
		"<table class='ColorChart'>";
	
	for(var r = 1; r <= 5; r++){
		str += "<tr>";
		for(var g = 1; g <= 5; g++){
			str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + (51*r) + "," + (51*g) + "," + 0 + ")'></td>";
		}
		for(var b = 1; b <= 5; b++){
			str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + (51*r) + "," + 0 + "," + (51*b) + ")'></td>";
		}
		for(var b = 1; b <= 5; b++){
			str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + 0 + "," + (51*r) + "," + (51*b) + ")'></td>";
		}
		str += "</tr>";
	}
	for(var r = 1; r <= 5; r++){
		str += "<tr>";
		for(var g = 1; g <= 5; g++){
			str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + (51*r) + "," + (51*g) + "," + 255 + ")'></td>";
		}
		for(var b = 1; b <= 5; b++){
			str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + (51*r) + "," + 255 + "," + (51*b) + ")'></td>";
		}
		for(var b = 1; b <= 5; b++){
			str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + 255 + "," + (51*r) + "," + (51*b) + ")'></td>";
		}
		str += "</tr>";
	}
	str += "<tr>";
	for(var i = 1; i <= 5; i++){
		str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + (51*i) + "," + 0 + "," + 0 + ")'></td>";
	}
	for(var i = 1; i <= 5; i++){
		str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + 0 + "," + (51*i) + "," + 0 + ")'></td>";
	}
	for(var i = 1; i <= 5; i++){
		str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + 0 + "," + 0 + "," + (51*i) + ")'></td>";
	}
	str += "</tr>";
	str += "<tr>";
	for(var i = 0; i < 15; i++){
		str += "<td class='ColorList' id='ct" + (n++) + "' onClick='GetColorCode(this.style.backgroundColor," + num +")' style='background-color:RGB(" + (17*i) + "," + (17*i) + "," + (17*i) + ")'></td>";
	}
	str += "</tr>";
	str += "</table>";
	//str += "<div id='selector'></div></form>";
	ColorSelector.innerHTML = str;
}

function GradientPreview(RGB1, RGB2){
	if(!(PreCheck(RGB1) && PreCheck(RGB2))){
		return;
	}
	var prestr = "||||||||||||";
	var str = "";
	var len = prestr.length;
	var RGBa = new Array(3);
	var RGBb = new Array(3);
	var R=0,G=0,B=0;
	for(var i = 0; i < 3; i++){
		RGBa[i] = RGB_slice(RGB1,i);
		RGBb[i] = RGB_slice(RGB2,i);
	}
	for (var i = 0; i < len; i++)
	{
		R = Math.abs(parseInt(RGBa[0]+((1-i)*(RGBa[0]-RGBb[0]))/(len-1)));
		G = Math.abs(parseInt(RGBa[1]+((1-i)*(RGBa[1]-RGBb[1]))/(len-1)));
		B = Math.abs(parseInt(RGBa[2]+((1-i)*(RGBa[2]-RGBb[2]))/(len-1)));
		str += "<span style='color:RGB(" + R + "," + G + "," + B + ")'>" + prestr.charAt(i) + "</span>";
	}
	preview.innerHTML = str;
}
function RGB_slice(RGB, n){
	var str = RGB.substring(1+n*2, (3+n*2));
	var tmp = SixteenToDecimal(str);
	return tmp;
}
function PreCheck(RGB){
	if(RGB.length!=7){
		//Debug("PreCheck1")
		return false;
	}
	else if(RGB.charAt(0)!="#"){
		//Debug("PreCheck2")
		return false;
	}
	for(var i = 1; i < 7; i++){
		switch(RGB.charAt(i))
		{
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "A":
		case "B":
		case "C":
		case "D":
		case "E":
		case "F":
		case "a":
		case "b":
		case "c":
		case "d":
		case "e":
		case "f":
			break;
		default:
			//Debug("PreCheck3")
			return false;
		}
	}
	return true;
}


function GetColorCode(rgb, num){
	if(num==1){
		frmBottom.txtRGB1.value = RGBToSixteen(rgb);
	}
	else{
		frmBottom.txtRGB2.value = RGBToSixteen(rgb);
	}
	ColorSelector.innerHTML = "";
	GradientPreview(frmBottom.txtRGB1.value, frmBottom.txtRGB2.value);
	ColorSelector.style.width = "0";
	ColorSelector.style.height = "0";
}


///// RGBToSixteen /////////////////////////
///// 인수: rgb(n,n,n)과 같은 10진수가 섞인 형태의 문자열
///// 리턴: #FFFFFF와 같은 16진수 형태의 컬러 코드
function RGBToSixteen(rgb){
	var RGB = rgb.split(",");
	var R = parseInt(RGB[0].substring(4,RGB[0].length));
	var G = parseInt(RGB[1]);
	var B = parseInt(RGB[2].substring(0,RGB[2].length-1));

	return GetSixteenColorCode(R,G,B);
}
function GetSixteenColorCode(R,G,B){
	//alert(R + "," + G + "," + B);
	
	var sR = DecimalToSixteen(R);
	(sR.length == 1) ? sR = "0"+sR : sR;
	var sG = DecimalToSixteen(G);
	(sG.length == 1) ? sG = "0"+sG : sG;
	var sB = DecimalToSixteen(B);
	(sB.length == 1) ? sB = "0"+sB : sB;
	return "#" + sR + sG + sB;
}



///// SixteenToDecimal ////////////////////
///// 인수: 16진수
///// 리턴: 10진수
function SixteenToDecimal(user_str){
	var len = user_str.length;
	var sum = 0;
	var charNum = 0;
	for(var i = 0; i < len; i++){
		charNum = parseInt(user_str.charAt(i));
		if( (0<=charNum) && (9>=charNum) )
		{
			sum += charNum * Math.pow(16,i);
		}
		else{
			switch(user_str.charAt(i)){
				case "a":
				case "A":
					sum += 10 * Math.pow(16,i);
					break;
				case "b":
				case "B":
					sum += 11 * Math.pow(16,i);
					break;
				case "c":
				case "C":
					sum += 12 * Math.pow(16,i);
					break;
				case "d":
				case "D":
					sum += 13 * Math.pow(16,i);
					break;
				case "e":
				case "E":
					sum += 14 * Math.pow(16,i);
					break;
				case "f":
				case "F":
					sum += 15 * Math.pow(16,i);
					break;
			}
		}
	}
	return sum;
}
function DecimalToSixteen(user_num){
	//alert(user_num);
	var str = "";
	var ext = 0;
	user_num = parseInt(user_num);

	do{

		ext = user_num % 16;
		user_num = parseInt(user_num/16);
		switch(ext){
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				str = ext.toString() + str;
				break;
			case 10:
				str = "A" + str;
				break;
			case 11:
				str = "B" + str;
				break;
			case 12:
				str = "C" + str;
				break;
			case 13:
				str = "D" + str;
				break;
			case 14:
				str = "E" + str;
				break;
			case 15:
				str = "F" + str;
				break;
		}
	}while(user_num > 0)
	return str;
}


///함수 이름: stringReplace
///설명 : 문자열 중 어떤 문자를 새로운 문자로 대체함
///인수 : user_str = 바뀌게 될 전체 문자열
///       oldstr = 문자열 중 바꿀 목표 가 되는 문자
///       newstr = 바꿀 문자열을 대체할 새로운 문자
///부가 : C#엔 있는데 자바스크립트엔 없어서 만들었음 ㅡ.ㅡ;;
function stringReplace(user_str,oldstr,newstr){
	var len = user_str.length;
	var str = "";
	for(var i = 0; i < len; i++){
		if(user_str.charAt(i) == oldstr){
			str += newstr;
		}
		else
		{
			str += user_str.charAt(i);
		}
	}
	return str;
}

function Debug(str){
	preview.innerHTML += str;
}

function TransLayer(){
	hidd.innerHTML = " ";
}

