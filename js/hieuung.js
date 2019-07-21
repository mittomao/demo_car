var share = document.querySelector('.share');//Lấy phần tử đầu tiên trong tài liệu với class = "share":
	var clickShowShare = document.getElementById('click-show-share');//lay du lieu tu cac id
	clickShowShare.addEventListener('click', function(){//tao them su kien khi click
		share.classList.toggle('class_new');//chuyen doi 2 class 
		})
		var button = document.querySelector('.button1');
		button.addEventListener('click',function(){
				console.log('BAN VUA CLICK VAPO TOI');
				document.querySelector('.login_header').classList.toggle('login_new');
		})
//Tao Phan click thay doi anh tren img_display
var vitri = 1;
slideshow(vitri);
function current(n)
{
	slideshow(vitri = n);
}
function slideshow(n)
{
	var i = 0;
	//lay thong tin tu the 
	var img_display = document.getElementsByClassName('img_display');
	for(i = 0 ;i<img_display.length;i++)
	{
		img_display[i].style.display = 'none';// thay doi css cua phan tu thu i 
	}
	img_display[vitri-1].style.display = 'block';
}
// Load Web
// Tao Bien De Load Web
var load = document.getElementsByClassName("loadweb");
// Tao Hieu Ung Cuon Chuot
window.addEventListener("scroll",function(){
	for (var i = 0; i < load.length; i++) {
        var heightload = "duoi";
        var inload = load[i].offsetTop - 400;
        if (window.pageYOffset > inload) {
            if (heightload == "duoi") {
            heightload = "tren";
            load[i].classList.add('goweb');
            }
       }
    }
})