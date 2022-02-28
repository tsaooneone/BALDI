
var btnleft = document.getElementsByClassName("btnleft");
var btnright = document.getElementsByClassName("btnright");
var txt = document.getElementsByClassName("txt");
for (let i = 0; i < btnleft.length; i++) {
	btnleft[i].index = i;
	btnleft[i].onclick = function () {
		var val = txt[this.index].value;
		val--;
		if (val < 1) {
			val = 1;
		}
		txt[this.index].value = val;
		addprice(this.index,val);
		ischoose();
	}
	btnright[i].index=i;
	btnright[i].onclick = function () {
		var val=txt[this.index].value;
		val++;
		txt[this.index].value=val;
		addprice(this.index,val);
		ischoose();
	}
}
