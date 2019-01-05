function getStyle(obj,style){  
	if(obj.currentStyle) 
	{  
		return obj.currentStyle[style];  
	} 
	else 
	{  
		return getComputedStyle(obj)[style];  
	}  
}

// json格式：
// {
// 	left:200,
// 	top:200,
// 	opacity:0.33
// } 
// forin 遍历对象中所有的属性和值

function animate(obj,json,callback){    //参数：哪个对象，什么属性，到什么程度   callback可选

		clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	// var timer = setInterval(function(){
		var flag = true;  // 标志位
		for(var attr in json)
		{
			if(attr == "opacity")
			{
				var now = parseInt(getStyle(obj,attr)*100)
			}
			else{
				var now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-now)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now + speed;
			if(attr == "opacity"){
				// current = current/100;
				obj.style[attr] = current/100;
				// obj.style[attr] = current;

			}
			else{
				obj.style[attr] = current +"px";
			}
			
			// if(now != json[attr]){
			// 	flag = false;
			// 	// clearInterval(timer);
			// }
			// else{					
			// 	obj.style.attr = now +speed +"px";
			// }

			if(json[attr] !== current){
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(callback)
			{
				callback();
			}
		}	

	},150)
}