
$(function() { //切换显隐
	var Cas = $("#case1");
	Cas.click(function() {
		$(".select").slideToggle("slow");
	})
});

$(document).bind("click",function(event){ //点击其他地方隐藏
      var e = event || window.event;   
      var elem = e.srcElement||e.target;   
      while(elem)   
      {   
          if(elem.id == "list")   
          {   
              return;   
          }   
          elem = elem.parentNode;        
      }   
     
     $('#select1').hide();  
   });

$(function() {  //下拉框的高度大于180px时，显示滚动条，反之隐藏
	var iTarget = 150;
	var sel_h = $("#select1").height();
	if(sel_h > iTarget) {
		$("#select1").css({
			"height" : "150px",
			"overflow-y" : "scroll"
		});	
	}
});

function ensure() {//判断是否选中checkbox的值
	var result= "";
	var check_array = document.getElementsByName("check");
	for(var i = 0;i < check_array.length;i ++) {
		if(check_array[i].checked == true) {
			result = result + check_array[i].value;
			var Cas = document.getElementById("case1");
			Cas.value = result;
			var sel = document.getElementById("select1");
			sel.style.display = "none";
		}
		
	}
	
}