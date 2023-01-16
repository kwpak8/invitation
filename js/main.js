var num = 0;
var naviPage = 1;
var timer = null;
var photoNum = 0;
var photoCurrentX = 0;
var photoTargetX = 0;
var photoMoveNow = false;
var scrollTimer;


function ScrollSetting(){
	var photoScroll = document.getElementById('photoScroll');
	photoScroll.addEventListener("scroll", () => {
	if(!scrollTimer){
		scrollTimer = setTimeout(() => {
			scrollTimer = null;			
			NaviSetting(photoScroll.scrollLeft);
		},100);	
	}
})
}

function NaviSetting(scrollLeft){
	var width = galleryBox.clientWidth;
	var leftWidth = scrollLeft%width;
	//console.log(scrollLeft%width);
	if(leftWidth == 0){
		photoNum = scrollLeft/width + 1;
		//console.log(photoNum);
		PhotoDotSetting(photoNum);
	}else{
		if(leftWidth > width/2){
			photoNum = (scrollLeft-leftWidth)/width + 2;
			console.log(photoNum);
			PhotoDotSetting(photoNum);
		}else{
			photoNum = (scrollLeft-leftWidth)/width + 1;
			console.log(photoNum);
			PhotoDotSetting(photoNum);
		}
	}
	
}



// function ScreenSize(){
	// var sh = screen.height;
	// var galleryBox = document.getElementById('galleryBox');
	// var photoScroll = document.getElementById('photoScroll');
	// var photoList = document.getElementById('photoList');

	// galleryBox.style.height = sh * 0.8;
	// photoScroll.style.height = sh * 0.8;

	// var width = galleryBox.clientWidth;
	
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
// }

function PhotoPopupOpen(photoNum){
	var photoPopup = document.getElementById('photoPopup');
	var bigPhoto = document.getElementById('bigPhoto');
	photoPopup.style.display = "block";
	bigPhoto.style.backgroundImage = "url('images/photo"+photoNum+".jpg')";
}

function PhotoNavi(photoNum){
	if(!photoMoveNow){
		PhotoDotSetting(photoNum);

		photoMoveNow = true;
		var galleryBox = document.getElementById('galleryBox');	
		var photoScroll = document.getElementById('photoScroll');
		photoScroll.style.scrollSnapType = "none";
		var width = galleryBox.clientWidth;

		photoTargetX = width * (photoNum-1);
		PhotoMove(photoTargetX);
	}	
}

function PhotoDotSetting(photoNum){
	var naviBtn = document.getElementsByClassName('photoNaviBtn');	
	for(var i = 0; i < naviBtn.length; i++){
		naviBtn[i].style.color = "#083388";
	}
	naviBtn[photoNum-1].style.color = "#c27e41";
}

function PhotoMove(photoTargetX){
	var photoScroll = document.getElementById('photoScroll');
	photoCurrentX = photoScroll.scrollLeft;
	var diff = Math.abs(photoCurrentX - photoTargetX);
	//console.log((photoCurrentX - photoTargetX)/10);
	if(diff >= 10){
		photoScroll.scrollLeft = photoCurrentX + ((photoTargetX - photoCurrentX)/10);
		// console.log(diff);
	}else if(diff >= 5 && photoCurrentX > photoTargetX){
		photoScroll.scrollLeft -= 1;
		// console.log(diff);
	}else if(diff >= 5 && photoCurrentX < photoTargetX){
		photoScroll.scrollLeft += 1;
		// console.log(diff);
	}else{
		photoScroll.scrollLeft = photoTargetX;
		photoMoveNow = false;
		photoScroll.style.scrollSnapType = "x mandatory";
		return;
	}
	setTimeout(function(){
		PhotoMove(photoTargetX);
	},5);
}

function CopyNum(numIndex) {
	var num = 0;
    switch(numIndex) {
    case 1:
    	num = "1002933869549";
    	break;
    case 2:
    	num = "3560813101783";
    	break;
    case 3:
    	num = "039120127147";
    	break;
    case 4:
    	num = "110473612872";
    	break;
    case 5:
    	num = "3521463029213";
    	break;
    case 6:
    	num = "20710252051482";
    	break;
    default :
    	num = "1002933869549";
    	break;
    }
    navigator.clipboard.writeText(num);
    var numText = num + ' 계좌번호가 복사되었습니다.'
    window.alert(numText);
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
	//console.log(diff + "/" + width/2)
	if(diff > width/2){
		photoScroll.scrollLeft = photoScroll.scrollLeft + (width - diff);
	}else{
		photoScroll.scrollLeft = photoScroll.scrollLeft - diff;	
	}
}

function Setting(){
	var account1 = document.getElementById('account1');
	var account2 = document.getElementById('account2');
	var busanPopup = document.getElementById('busanPopup');
	var photoPopup = document.getElementById('photoPopup');
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

function BusanShow(){
	Setting();
	CloseAll();
	busanPopup.style.display = "block";
}

function CloseAll(){
	Setting();

	account1.style.display = "none";
	account2.style.display = "none";
	busanPopup.style.display = "none";
	photoPopup.style.display = "none";
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