
window.onload=function(){
	// 顶部悬浮
	var top1 =document.getElementsByClassName('qng')[0];
	window.onscroll=function(){
		var st =document.documentElement.scrollTop || document.body.scrollTop;
		console.log(st)
		if(st>120){
			top1.style.position ='fixed'
		}else{
			top1.style.position='static'
		}
	}

	// 充值功能
	var selectd=document.getElementById("selectd");
	var chong=document.getElementById("chong");
	selectd.onclick=function(){
		var node=document.createTextNode("¥"+selectd.value);
		chong.replaceChild(node,chong.firstChild);
	}

	//轮播图
	var box = document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:100})
			animate(right,{opacity:100})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-801*index});
			}
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-801*index},function(){
				if(index==7){
					slider.style.left = '-801px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-801*index},function(){
				if(index==0){
					slider.style.left = '-4806px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);





		// 弹幕
		var  skdl2= document.getElementById('skdl2');
		var sliderd = document.getElementById('slider0');
		var indexd = 0;
		var timerd;
		skdl2.onmouseover = function(){
			clearInterval(timerd)
		}
		skdl2.onmouseout = function(){
			timerd = setInterval(nextd, 500);
		}
		function nextd(){
			indexd++;
			if(indexd==14){
				sliderd.style.top = '0px';
				indexd = 1;
			}
			animate(sliderd,{top:-30*indexd});
		}
		timerd = setInterval(nextd, 500);
		
		// 弹窗
		var yu=document.getElementById('yu');
		var le=document.getElementById('le');
		var yo=document.getElementById('yo');
		var jo=document.getElementById('jo');
		var mo=document.getElementById('mo');
		var no=document.getElementById('no');
		yu.onmousemove=function(){
			animate(yu,{marginLeft:0})
		}
		yu.onmouseout=function(){
			animate(yu,{marginLeft:80})
		}
		le.onmousemove=function(){
			animate(le,{marginLeft:0})
		}
		le.onmouseout=function(){
			animate(le,{marginLeft:80})
		}
		yo.onmousemove=function(){
			animate(yo,{marginLeft:0})
			mo.style.display="none";
			no.style.display="block";
		}
		yo.onmouseout=function(){
			animate(yo,{marginLeft:80})
			mo.style.display="block";
			no.style.display="none";
		}
		jo.onmousemove=function(){
			animate(jo,{marginLeft:0})
		}
		jo.onmouseout=function(){
			animate(jo,{marginLeft:80})
		}
}

