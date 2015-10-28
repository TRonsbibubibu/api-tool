$(document).ready(function(){
  //发送请求
  $('#submit').click(function () {
  		var method = $('#method').val();
  		var url = $('#url').val();
  		var params = "";
  		var tb_params = $('.params');
  		tb_params.each(function () {
  			params += $(this).find('.key').val()+"="+$(this).find('.value').val()+"&";
  		})
  		params = params.substr(0,params.length-1);

  		$.ajax({
				url: url,
				data: params,
				type: method,
				success: function(msg){
					$("#response").html(JSON.stringify(msg));
				},
				error: function(res, text) {
					alert('修改内容获取失败');
				}
			});
  });
  //增加参数|删除参数
  var html = $('#tb_params tr').first().html();
  html = "<tr class=\"params\">"+html+"</tr>";
  $('#add').click(function () {
  	$('#tb_params').prepend(html)

  	var aDelete = document.getElementsByClassName('delete');
	 for (var i = 0; i <= aDelete.length; i++) {
	  aDelete[i].onclick = function(){
	  	var this_parent = this.parentNode.parentNode.parentNode;
	  	if (this_parent) {
	  		this_parent.removeChild(this.parentNode.parentNode);
	  	};
 	  };
	};
	
  });
  var aDelete = document.getElementsByClassName('delete');
  for (var i = 0; i <= aDelete.length; i++) {
  	aDelete[i].onclick = function(){
  		var this_parent = this.parentNode.parentNode.parentNode;
  		if (this_parent) {
  			this_parent.removeChild(this.parentNode.parentNode);
  		};
  	};
  };
});