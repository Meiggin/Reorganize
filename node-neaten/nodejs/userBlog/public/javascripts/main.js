function Main(){
	this.init();
}

$.extend(Main.prototype,{


	init:function(){
		console.log("init");
		// var _this =this; //this 解决方案 保存this
		$.ajax({
			url:"/list",
			data:{limit:2,offset:0},
			success:(result)=>{ // 箭头函数解决this 指向
				// console.log(result);
				this.renderList(result.list);
				this.renderPagination(result.total);
			}
		})
	},

	renderList:function(list){
		console.log(list);
		for(var i=0;i<list.length;i++){

			$li = $("<li>").html(`

					<div class="media">
		  <div class="media-left">
		    <a href="#">
		      <img class="media-object" src="http://localhost:3000${list[i].pathname}" alt="...">
		    </a>
		  </div>
		  <div class="media-body">
		    <h4 class="media-heading">${list[i].title}</h4>
		  	<pre>${list[i].content}</pre>  
		   </div>
		</div>
				`);

			$li.click(function(){
				location.href="/detail.html";
			})
			$("#list").append($li);
		}
	},

	renderPagination:function(total){
		// console.log(total);
		var _this =this;
		for(var i=0;i<total;i+=2){
			$li = $("<li>").html(`<a>${i/2+1}</a>`);

			$li.click(function(){
				// console.log($(this).index());
				_this.rerenderList($(this).index());
			})
			$(".pagination").append($li);
		}
	},

	rerenderList:function(index){
		console.log(index);
		$("#list").empty();
		$.ajax({
			url:"/list",
			data:{limit:2,offset:index*2},
			success:(result)=>{ // 箭头函数解决this 指向
				// console.log(result);
				this.renderList(result.list);
			}
		})
	}


})

new Main();