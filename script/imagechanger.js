var nowpage = -1;
var maxpage = 30;

function ImagePicker(num){
	var img_url = new Array(maxpage);

	img_url[0] = "noel.jpg";
	img_url[1] = "071109_morning1.jpg";
	img_url[2] = "071109_morning2.jpg";
	img_url[3] = "071109_morning3.jpg";
	img_url[4] = "071110_mountain1.jpg";
	img_url[5] = "071110_mountain2.jpg";
	img_url[6] = "071110_mountain3.jpg";
	img_url[7] = "071110_mountain5.jpg";
	img_url[8] = "071110_mountain6.jpg";
	img_url[9] = "falling01.jpg";
	img_url[10] = "falling02.jpg";
	img_url[11] = "falling03.jpg";
	img_url[12] = "falling04.jpg";
	img_url[13] = "falling05.jpg";
	img_url[14] = "mongx2.jpg";
	img_url[15] = "mongx3.jpg";
	img_url[16] = "MT_byeok_bang.jpg";
	img_url[17] = "namgaram.png";
	img_url[18] = "steam_shine.jpg";
	img_url[19] = "tong-yeong_mireuk.mt.jpg";
	img_url[20] = "room.jpg";
	img_url[21] = "baram.jpg";
	img_url[22] = "";

	if (nowpage > img_url.length || img_url[num] == "")
	{	
		return "nomore";
	}
	return img_url[num];
}

function DescriptionPicker(num)
{
	var desc = new Array(maxpage);

	desc[0] = "등교길에 찍은 아침 노을.<br>실물은 더 멋졌다는 진실이..";
	desc[1] = "마찬가지로 아침 노을.<br>난 저녁 노을보다 아침 노을이 더 좋더라~ ^*^";
	desc[2] = "경상대 통영 캠퍼스에서 찍은 아침노을 사진.<br>원랜 더 붉은데, 사진기가 폰카라 아쉽다.";
	desc[3] = "진주의 아침.<br>진주 경상대에서 수업받기 전에 돌아다니면서 찍은 것.";
	desc[4] = "우리집 뒷산의 천암산 봉우리에서 찍은 사진.<br>내가 사는 인평동이 훤히 들여다 보인다.";
	desc[5] = "이 날은 운해(?)를 뚫고 나오는 붉은 태양을 볼 수 있었다.";
	desc[6] = "역시 붉은 태양 ^^;";
	desc[7] = "우리집 Mix犬 몽몽이.<br>자세히 보면 Mix犬 답게 초큼 귀여운데 사진빨이 안먹는다.<br>불쌍한 녀석..";
	desc[8] = "산정상에서 볼건 태양 뿐이었나 보다 -.-;;";
	desc[9] = "가을이 다가온다~~<br>잎이 노랗게 말라가는 가을의 나무를 보면 평온함이 느껴진다?";
	desc[10] = "경상대에 다닐 시절, 저 농대 식당을 자주 애용 했더랬지...";
	desc[11] = "그냥 길이 괜찮아 보여서 찍어봤음 -.-";
	desc[12] = "역시 가을길 ㅋㅋ";
	desc[13] = "왜 이런거 밖에 없지 -_-;;<br>좌측의 하얀 건물은 경상대의 자랑(?) 수의학과 건물이다.";
	desc[14] = "우리 얘쁜 몽몽이 ^*^<br>어찌보면 여우 같기도 생겼다. 하얀 여우...;;";
	desc[15] = "X-Form 잡지 말아 줄래? X-犬 아? ^-^ㅗ";
	desc[16] = "친구랑 벽방산에 올라갔었다.<br>그 날은 안개가 자욱해서 별로 앞이 잘 안보였다 ㅠㅠ<br>그래도 통영에서 가장 높은 산이라는거 +_+)b";
	desc[17] = "2003년 경상대 신입시절, 남가람 밴드 동아리의 드러머로 활동 했었다.<br>리허설 전에 찍었는데 그닥 볼만한 사진이 없는듯 -.-;;<br>누구 말마따나 앳띤 모습...";
	desc[18] = "라디에이터에서 증기가 뿜어져 나오는 걸 찍었는데..<br>증기는 거의 안보이고 햇살만 찍혔네 그랴.";
	desc[19] = "친구와 날씨 좋은 날을 택하여 미륵산 정상에 올라서<br>파노라마를 찍어 보았다.<br>물론 여러장을 이어붙여서 포샵질 한 것이지만<br>통영시의 전경이 한눈에 내려다 보이는 사진이다 ^^";
	desc[20] = "내 방이다. 이걸 왜 찍었나.. 싶을 정도로 만화책이 많다 -_-;;";
	desc[21] = "한 때 어렸을 적엔 만화가 지망생이었다.<br>그래서 펜촉도 사고 잉크도 사서 만화를 그리던 때가 있었다. 지금은 추억으로 남았지만 그 덕에 이렇게 보고 그리는 실력(?)은 나름 있는 편..? -.-;; 뭐 아님 말구 ㅋㅋ";
	desc[22] = "";

	return desc[num];
}

function ImageChanger(next){
	var sub_folder = "image/";
	var big_folder = "image/big/";
	var imgstr = "";

	(next) ? nowpage++ : nowpage--;
	imgstr = "image/mem/" + ImagePicker(nowpage);
	image_changer.innerHTML = "<a href='" + imgstr + "' class='imagebox' target='_blank'><img src='" + imgstr + "' class='image_clip'></a>";
	description_clip.innerHTML = DescriptionPicker(nowpage);
	description_clip.style.borderColor = RandomColor(125);
	if(nowpage <= 0)
	{
		frmBase.btnPre.disabled = true;
	}
	else if(ImagePicker(nowpage+1) == "nomore")
	{
		frmBase.btnNext.disabled = true;
	}
	else
	{
		frmBase.btnPre.disabled = false;
		frmBase.btnNext.disabled = false;
	}
}