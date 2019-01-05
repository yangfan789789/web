window.onload=function(){
	
	//放大镜功能
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var slider = document.getElementById("slider");
	var Bimg = document.getElementById("Bimg");
	var box = document.getElementById('box'); 
	var mainpl=document.getElementById('mainpl');
	img1.onmouseover=function(){
	    slider.style.display='block';
		img2.style.display='block';
 	}
	img1.onmouseout=function(){
	    slider.style.display='none';
		img2.style.display='none';
 	}
  
    img1.onmousemove=function(ev){
		var ev=ev||event;
		  
		var oL=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
		var oT=ev.clientY-box.offsetTop-slider.offsetHeight/2;
		  
		var oMaxw=img1.offsetWidth-slider.offsetWidth;
		var oMaxh=img1.offsetHeight-slider.offsetHeight;
		  
		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;
		
		var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
		var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
	}
	//购物车功能
	var shop=document.getElementById("shop");
	var gouwu=document.getElementById("gouwu");
	var ppll=document.getElementById("ppll");
	
	shop.onclick=function(){
		gouwu.style.display='block';


		ppll.style.border="5px solid black";
		ppll.style.width="400px";
		ppll.style.height="218px";
		ppll.style.backgroundColor="white";
		ppll.style["margin"] = "218px auto";//?前面那个怎么设置
	}
	var jixu=document.getElementById("jixu");
	var jieshuan=document.getElementById("jieshuan");
	var fuhao=document.getElementById("fuhao");
	jixu.onclick=function(){
		gouwu.style.display='none';
	}
	jieshuan.onclick=function(){
		gouwu.style.display='none';
	}
	fuhao.onclick=function(){ 


		  
		gouwu.style.display='none';
	}
	
	//图片切换
	var lefttf=document.getElementById('lefttf');
	var righttf=document.getElementById('righttf');
	var picture1=document.getElementById('picture1');
	var picture2=document.getElementById('picture2');
	var newimg=document.createElement('img');
	var oldimg=document.getElementById('oldimg');
	var newimg1=document.createElement('img');
	


	righttf.onclick=function(){
		oldimg.src="img/pp1.jpeg";	
		Bimg.src = "img/pp1.jpeg";
		Bimg.style.width="800px";
		Bimg.style.height="800px";
	}
	lefttf.onclick=function(){
		oldimg.src="img/pp0.jpeg";
		Bimg.src = "img/pp0.jpeg";
		Bimg.style.width="800px";
		Bimg.style.height="800px";	
	}
	picture1.onclick=function(){
		oldimg.src="img/pp0.jpeg";
		Bimg.src = "img/pp0.jpeg";
		Bimg.style.width="800px";
		Bimg.style.height="800px";	
	}
	picture2.onclick=function(){
		oldimg.src="img/pp1.jpeg";	
		Bimg.src = "img/pp1.jpeg";
		Bimg.style.width="800px";
		Bimg.style.height="800px";
	}



	//增减数量
	var decrease =document.getElementById("decrease");
	var add = document.getElementById("add");
	var num = document.getElementById("num");
	var numv = num.value;
	decrease.onclick = function(){
		if(numv == 1){
			this.style.cursor = "not-allowed";
		}else if(numv>1){
			// this.style.cursor = "default";
			if(add.style.cursor == "not-allowed"){
				add.style.cursor = "default";
			}
			this.style.cursor = "default";
			--numv;
			num.innerHTML = numv;
			num.value = numv;
		}
				
	}
	add.onclick = function(){
		if(numv == 5){
			this.style.cursor = "not-allowed";
		}else if(numv<5){
			if(decrease.style.cursor == "not-allowed"){
				decrease.style.cursor = "default";
			}
			this.style.cursor = "default";
			++numv
			num.innerHTML = numv;
			num.value = numv;
		}
	}

	var buttonlit=document.getElementById("buttonlit");
	var buttonbig=document.getElementById("buttonbig");
	var litrun=document.getElementById("litrun");
	var bigrun=document.getElementById("bigrun");

	buttonlit.onclick=function(){
		litrun.style.display="block";
		bigrun.style.display="none";
		buttonlit.className="litn";
		buttonbig.className="";
		buttonlit.style.borderColor="#ff0000";
		buttonbig.style.borderColor="gray";
	}
	buttonbig.onclick=function(){
		litrun.style.display="none";
		bigrun.style.display="block";
		buttonbig.className="litn";
		buttonlit.className="";
		buttonbig.style.borderColor="#ff0000";
		buttonlit.style.borderColor="gray";
	}
}
