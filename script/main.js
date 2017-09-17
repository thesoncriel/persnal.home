
function title_box(user_str){
	var width = screen.availWidth - 700;
	var str = "<table cellpadding='0' cellspacing='0'>" +
	"<tr>" +
	"<td class='cella'><br></td>" + 
	"<td class='cellb'><br></td>" +
	"<td class='cellc'><br></td>" +
	"<td><br></td>" +
	"</tr>" +
	"<tr>" +
	"<td class='celld'><br></td>" +
	"<td class='celle'><br></td>" +
	"<td class='cellf'><br></td>" +
	"<td><br></td>" +
	"</tr>" +
	"<tr>" +
	"<td class='cellg'><br></td>" +
	"<td><br></td>"+
	"<td><br></td>"+
	"<td><br></td>"+
	"</tr>"+
	"<tr>"+
	"<td><br></td>"+
	"<td><br></td>"+
	"<td><br></td>"+
	"<td><span class='mainTitle' style='width:" + width + "px'>" + user_str + "</span></td>" +
	"</tr>"+
	"</table>";

	tableTitle.innerHTML = str;
}

function title_menu_sel(num){
	var str = "<p class='m01'><span class='m01a'>WHO</span><span class='m01b'>Am</span><span class='m01c'>I</span><span class='m01d'>?</span></p>";
	title_box(str);
}

function DocLayout(){
	document.all.first_word0.style.color = RandomColor(125);
	first_word1.style.color = RandomColor(125);
	first_word2.style.color = RandomColor(125);
	first_word3.style.color = RandomColor(125);
	bottom_box.style.top = (document.body.scrollHeight - 150) + "px";
	bottom_line0.style.top = (document.body.scrollHeight - 90) + "px";
	bottom_line1.style.top = (document.body.scrollHeight - 75) + "px";


}