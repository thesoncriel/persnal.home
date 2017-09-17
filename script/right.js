///자바 스크립트 코드 ^*^




function namosw_init_clock()
{
  var type, i, top, obj, clocks;
  clocks = new Array();
  for (i = 0, top = 0; i < namosw_init_clock.arguments.length; i += 2) {
    obj = eval('document.'+namosw_init_clock.arguments[i]);
    if (obj == null) continue;
    if ((type = namosw_init_clock.arguments[i+1]) < 1 && 11 < type) continue;
    clocks[top++] = obj;
    clocks[top++] = type;
  }
  clocks.months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July',
                            'August', 'September', 'October', 'November', 'December');
  clocks.days   = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
                            'Thursday', 'Friday', 'Saturday');
  clocks.k_days = new Array('일', '월', '화', '수', '목', '금', '토');
  clocks.ampm_str   = new Array('AM', 'PM');
  clocks.k_ampm_str = new Array('오전', '오후');

  if (top > 0) {
    document.namosw_clocks = clocks;
    namosw_clock();
  }
}
function namosw_clock()
{
  var i, type, clocks, next_call, str, hour, ampm, now, year2, year4;
  clocks = document.namosw_clocks;
  if (clocks == null) return;
  next_call = false;
  for (i = 0; i < clocks.length; i += 2) {
    obj   = clocks[i];
    type  = clocks[i+1];
    now   = new Date();
    year2 = now.getYear();
    year4 = year2;
    if (year2 < 1000) year4 = 1900 + year2;
    if (year2 >= 100) year2 = year4;

    if (type == 1 || type == 2) {
      obj.value = clocks.months[now.getMonth()] + ' ' + now.getDate() + ', ' + year4;
      if (type == 2) 
        obj.value = clocks.days[now.getDay()] + ', ' + obj.value;
    } else if (type == 3 || type == 4) {
      obj.value = year2 + '/' + (now.getMonth()+1) + '/' + now.getDate();
    } else if (type == 5 || type == 6) {
      obj.value = (now.getMonth()+1) + '/' + now.getDate() + '/' + year2;
    } else if (type == 8 || type == 9 || type == 10 || type == 11) {
      obj.value = year4 + '년 ' + (now.getMonth()+1) + '월 ' + now.getDate() + '일';
      if (type == 9)
        obj.value += ' ' + clocks.k_days[now.getDay()] + '요일';
    }
    if (type == 4 || type == 6 || type == 7 || type == 10 || type == 11) {
      hour = now.getHours();
      ampm = 0;
      if (hour >= 12) {
	if (hour > 12) hour -= 12;
	ampm = 1;
      }
      if (type == 10 || type == 11) {
	str = clocks.k_ampm_str[ampm] +' '+ hour+'시 '+ now.getMinutes() +'분';
	if (type == 11) str += ' ' + now.getSeconds() +'초';
      } else {
	str = hour +':'+ ((now.getMinutes() < 10) ? '0'+now.getMinutes():now.getMinutes()) +':'+ ((now.getSeconds() < 10) ? '0'+now.getSeconds():now.getSeconds()) +' '+ clocks.ampm_str[ampm];
      }
      if (type == 7) obj.value  = str;
      else           obj.value += ' ' + str;
    }
    if (type == 4 || type == 6 || type == 7 || type == 10 || type == 11)
      next_call = true;
  }
  if (next_call)
    window.setTimeout("namosw_clock();", 1000);
	//나모의 웹 타이머 데이터를 훔친다 ㅡ.ㅡ;;
	getNamoTimer(str);
}

///나모의 실시간 시계 만들기 함수에서 훔쳐온 데이터를 다시 재 조립 함
function getNamoTimer(str){
	if(str.length != 11)
	{
		str = "0" + str;
	}
	//00:00:00 AM
	//alert(str);
	//document.all.clock.innerHTML = str;
	hour0.innerHTML = str.charAt(0);
	hour1.innerHTML = str.charAt(1);
	col0.innerHTML = str.charAt(2);
	min0.innerHTML = str.charAt(3);
	min1.innerHTML = str.charAt(4);
	col1.innerHTML = str.charAt(5);
	sec0.innerHTML = str.charAt(6);
	sec1.innerHTML = str.charAt(7);
	ampm.innerHTML = str.charAt(9) + str.charAt(10);
	
}