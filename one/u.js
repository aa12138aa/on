function random(l,u){
	return Math.floor(Math.random()*(u-l+1))+l;
}

function changeBG(){
	var colorArr=new Array("#1e245a","#b1285a","#f44336","##f43686","#be255a");
	var i=random(0,5);
	document.getElementById("imgBg").style.background=colorArr[i];
}