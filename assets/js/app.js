$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn(); });
	
	contact_list.mouseleave(function(){ scontacts.fadeOut(); });

	//自动生成目录
	var outline="";
	$(".article_body > h2").each(function(){
		function extract(obj, tag){
			var $this=$(obj);
			var id = $this.attr("id");
			var text = $this.html();
			return "<"+tag+"><a href='#"+ id +"'>"+ text +"</a></"+tag+">";
		};
		outline += extract(this, "dt");
		
		$(this).nextUntil("h2", "h3").each(function(){
			outline += extract(this, "dd");
		})
	});
	if(""==outline)
		$(".article-outline").hide();
	else
		$(".article-outline").append("<dl>"+ outline +"</dl>");
});