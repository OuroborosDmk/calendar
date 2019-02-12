function showDate(){
	var nowDate = new Date();
	var year = nowDate.getYear();
	var month = nowDate.getMonth();
	var day = nowDate.getDate();
	var week = nowDate.getDay();
	var firstday = new Date(year,month,day).getDay();//获取当月第一天为周几
	var maxday = new Date(year,month,0).getDate();//获取当月有多少天
	var finday = new Date(year,month,maxday).getDate();//获取当月最后一天为周几

	if(firstday > 0){
		//添加空格
		subSpace(firstday-1);
		subDate(maxday);
	}
	else if(firstday == 0){
		//不作处理
		subDate(maxday);
	}

}

function prevDate(clicksign){
	var nowDate = new Date();
	var year = nowDate.getYear();
	var month = nowDate.getMonth();
	var day = nowDate.getDate();
	var week = nowDate.getDay();
	var firstday = new Date(year,month,day).getDay();//获取当月第一天为周几
	var maxday = new Date(year,month,0).getDate();//获取当月有多少天
	var finday = new Date(year,month,maxday).getDate();//获取当月最后一天为周几

	if(clicksign >= month){
		year = year - ((clicksign-month)/12+1);
		month = month - clicksign%12;
	}

	if(firstday > 0){
		//添加空格
		subSpace(firstday-1);
		subDate(maxday);
	}
	else if(firstday == 0){
		//不作处理
		subDate(maxday);
	}
}

function nextDate(clicksign){
	var nowDate = new Date();
	var year = nowDate.getYear();
	var month = nowDate.getMonth();
	var day = nowDate.getDate();
	var week = nowDate.getDay();
	var firstday = new Date(year,month,day).getDay();//获取当月第一天为周几
	var maxday = new Date(year,month,0).getDate();//获取当月有多少天
	var finday = new Date(year,month,maxday).getDate();//获取当月最后一天为周几

	if(clicksign >= (12-month)){
		year = year + ((clicksign+month)/12+1);
		month = month + clicksign%12;
	}

	if(firstday > 0){
		//添加空格
		subSpace(firstday-1);
		subDate(maxday);
	}
	else if(firstday == 0){
		//不作处理
		subDate(maxday);
	}
}

function subSpace(spacenum){
	for(var i=0;i<spacenum;i++){
		
	}
}//添加空格

function subDate(maxday){
	for(var i=0;i<maxday;i++){

	}
}//添加日期

export {
	showDate,
	prevDate,
	nextDate,
	subSpace,
	subDate
}