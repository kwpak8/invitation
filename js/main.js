var num = 0;
var naviPage = 1;
var timer = null;


function ScreenSize(){
	var sh = screen.height;
	var galleryBox = document.getElementById('galleryBox');
	var photoScroll = document.getElementById('photoScroll');
	var photoList = document.getElementById('photoList');

	galleryBox.style.height = sh * 0.8;
	photoScroll.style.height = sh * 0.8;

	var width = galleryBox.clientWidth;
	
	// photoScroll.addEventListener("scroll", function (e){
	// 	console.log(e);
	// 	if(timer !== null){
	// 		clearTimeout(timer);
	// 	}
	// 	timer = setTimeout(function(){
	// 		var current = photoScroll.scrollLeft;
	// 		var diff = current%width;
	// 		ScrollSnap(diff, width);
	// 	}, 500);
	// }, false);
}

function ScrollSnap(diff, width){
	var sh = screen.height;
	var galleryBox = document.getElementById('galleryBox');
	var photoScroll = document.getElementById('photoScroll');
	var photoList = document.getElementById('photoList');

	var width = galleryBox.clientWidth;
	var current = photoScroll.scrollLeft;
	var diff = current%width;

	var photoScroll = document.getElementById('photoScroll');
	console.log(diff + "/" + width/2)
	if(diff > width/2){
		photoScroll.scrollLeft = photoScroll.scrollLeft + (width - diff);
	}else{
		photoScroll.scrollLeft = photoScroll.scrollLeft - diff;	
	}
}

function Setting(){
	var account1 = document.getElementById('account1');
	var account2 = document.getElementById('account2');
}

function AccountShow(num){
	Setting();

	if(num == 1)
	{
		account1.style.display = "block";
		account2.style.display = "none";
	}
	else if(num == 2)
	{
		account1.style.display = "none";
		account2.style.display = "block";	
	}
	else{
		account1.style.display = "none";
		account2.style.display = "none";	
	}
}

function CloseAll(){
	Setting();

	account1.style.display = "none";
	account2.style.display = "none";	
}

function NaviNext(){
	var photoList = document.getElementById('photoList');
	var galleryBtnLeft = document.getElementById('galleryBtnLeft');
	var galleryBtnRight = document.getElementById('galleryBtnRight');
	var width = 974;
	if(naviPage < 4){
		naviPage = naviPage + 1;
		var margin = (naviPage-1) * (-974);
		photoList.style.marginLeft = margin;
		
	}else{
		
	}

	NaviBtnSetting();
}

function NaviPrev(){
	var photoList = document.getElementById('photoList');
	var width = 974;
	if(naviPage > 1){
		naviPage = naviPage - 1;
		var margin = (naviPage-1) * (-974);
		photoList.style.marginLeft = margin;
	}else{

	}

	NaviBtnSetting();
}

function NaviBtnSetting(){
	if(naviPage > 1){
		galleryBtnLeft.style.opacity = '100%';
	}

	if(naviPage < 4){
		galleryBtnRight.style.opacity = '100%';
	}

	if(naviPage == 1){
		galleryBtnLeft.style.opacity = '30%';
	}

	if(naviPage == 4){
		galleryBtnRight.style.opacity = '30%';
	}
}