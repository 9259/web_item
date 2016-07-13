window.onload = function () {
//banner滚动特效
	        var oDiv = document.getElementById('warp');
            //获取ul
            var oUl = document.getElementById('img');
            var aLi = oUl.getElementsByTagName('li');
            //获取可点击的按钮
            var oNum = document.getElementById('num');
            var aBtns = oNum.getElementsByTagName('a');
            var iNow = 0;
            var timer = null;
             
            //封装
            function autoPlay(){
                for(var i=0;i<aBtns.length;i++){
                    aBtns[i].className = '';
                }
                aBtns[iNow].className = 'on';
                oUl.style.left = -iNow * aLi[0].offsetWidth + 'px';
            }
             
            //自动播放
            timer = setInterval(function(){
                if(iNow==aBtns.length - 1){
                    iNow=-1;
                }
                iNow++;
                autoPlay();
            },2000)
             
             
            //鼠标移入停止 和 开启
            oDiv.onmouseover = function(){
                clearInterval(timer);
            }
            oDiv.onmouseout = function(){
                timer = setInterval(function(){
                    if(iNow==aBtns.length - 1){
                        iNow=-1;
                    }
                    iNow++;
                    autoPlay();
                },2000)
            }
             
            //循环添加事件
            for(var i=0;i<aBtns.length;i++){
                //为每个按钮添加索引值
                aBtns[i].index = i;
                aBtns[i].onmouseover = function(){
                    //传递索引值，让当前项hover的时候，把当前对应的索引值 传递至iNow
                    iNow = this.index;
                    autoPlay();
                }
            }
                      
//左边导航栏显示隐藏            
            var dls=document.getElementsByTagName('dl');
            var righList=document.getElementsByClassName("right-list");
            for(var i=0;i<dls.length;i++){
                dls[i].onmouseover=function(){
                    this.className='list';
                }
                dls[i].onmouseout=function(){
                    this.className='';
                }
            }
        
//导航定位条       
            window.onscroll = function(){ 		
			    var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
				var menus = document.getElementById("menu-nav").getElementsByTagName("a");
				var items = getByClassName(document.getElementById("content"), "item");
				var currentId = "";
				
				for ( var i=0; i< items.length; i++ ){ 
				    var _item = items[i];
				    var _itemTop = _item.offsetTop;
					if( top > _itemTop - 200 ){ 
					    currentId = _item.id;
					} else { 
					    break;
					}
					if(currentId){
					        for(var j=0;j<menus.length;j++){
					            var _menus=menus[j];
					            var _href=_menus.href.split("#");
					            if(_href[_href.length-1]!=currentId){
					                //removeClass(_menus,"current");
					                _menus.className="";
					            }else{
					                //addClass(_menus,"current");
					                _menus.className="current";
					            }
					        }
					    }
				}	
			}
}


//导航定位条     定义getByClassName函数，让函数实现根据class name获取对象并返回，有多个的Class是不可用
function getByClassName(obj,cls){
    var elements=obj.getElementsByTagName("*");  //获得传入的Obj下所有的节点
    var result=[];
    for(var k=0;k<elements.length;k++){
        if(elements[k].className==cls){     //判断elements的className是否等于我们要找的cls
            result.push(elements[k]);
        }
    }
    return result;
}

function hasClass( obj, cls ){ 
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)")); //去掉首尾的空格
}

function removeClass( obj, cls ){ 
	if( hasClass( obj, cls )){ 
	    //remove
		var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		obj.className = obj.className.replace(reg,"");
	}
	/*if(obj.className==cls){
		obj.className='';
	}*/
}
//定义getByClassName函数，让函数实现给对象增加class 
function addClass(obj,cls){
    if(!hasClass(obj,cls)){
        obj.className+=" "+cls;  //给这个obj加上这个class
    }
   /*if(obj.className!=cls){
   	obj.className=cls;
   }*/
}