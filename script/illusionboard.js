var pic = 0;

function eventClick_Board_pic(obj, num){
	pic = num;
	frmBoard.imgPic0.style.borderColor = "#cccccc";
	frmBoard.imgPic1.style.borderColor = "#cccccc";
	frmBoard.imgPic2.style.borderColor = "#cccccc";
	frmBoard.imgPic3.style.borderColor = "#cccccc";
	obj.style.borderColor = "#ff5454";
}


function eventClick_Submit(){
	var str = frmBoard.txtArea.value;
	var subject = frmBoard.txtSubject.value;
	var name = frmBoard.txtName.value;
	var para = "";
	var len = str.length;
	for (var i = 0; i < len; i++)
	{
		if(str.charAt(i) == "\n")
		{
			para += "<br>";
		}
		para += str.charAt(i);
	}
	MakeBoard(subject, name, para);

	frmBoard.txtSubject.value = "";
	frmBoard.txtName.value = "";
	frmBoard.txtArea.value = "";
}

function MakeBoard(subject, name, para){
	var rgb0 = RandomColor(150);
	var rgb1 = BrightColor(rgb0, 50);
	var board = "<table cellpadding='0' cellspacing='0' class='board_table' style='border-color:" + rgb0 + ";margin-left:" + RandomLeft() + "px'>"+
		"<tr>"+
		"<td colspan='2' class='board_subject' style='border-bottom-color:" + rgb0 + ";background-color:" + rgb1 + "'>" + subject + "<div class='board_date'>" + getToday() + "</div></td>"+
		"</tr>"+
		"<tr>"+
		"<td class='board_pic'><img src='image/board_" + Board_pic() + ".gif' class='board_img'><br><span class='board_name'>" + name + "</span></td>"+
		"<td class='board_para'>" + para + "</td>"+
		"</tr>"+
		"</table><br><hr size='1' style='color:" + rgb1 + "'><br>";
	
	Board_here.innerHTML += board;
	eventClick_Board_pic(frmBoard.imgPic0);
	ArrowMaster_top();
	HorizonHill_bottom();
	DocLayout();
}
function Board_pic(){
	switch(pic)
	{
		case 1:
			return "normal";
		case 2:
			return "angry";
		case 3:
			return "sad";
		default:
			return "smile";
	}
}
function getToday(){
	var today = new Date();
	var str = "";
	if(today.getYear() < 1000)
	{
		str = "- " + (today.getYear()+1900) + "/";
	}
	else
	{
		str = "- " + today.getYear() + "/";
	}
	var tmp = today.getMonth() + 1;
	str += ((parseInt(tmp) < 10)? "0" + tmp: tmp) + "/";
	tmp = today.getDate();
	str += ((parseInt(tmp) < 10)? "0" + tmp: tmp) + " -";

	return str;
}
function RandomLeft(){
	var Max = 150;
	
	return parseInt( (Max+1) * Math.random() );
}