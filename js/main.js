$(function () {
	var projects = $("#projects");
	$.getJSON('http://github.com/api/v2/json/repos/show/gr4y?callback=?', function(data, status) {
		$.each(data.repositories, function() {
			if(!this.fork && this.name != "gr4y.github.com") {
				var projectTmpl = $('#projectTmpl').html();
				$(projects).append(Mustache.to_html(projectTmpl, this));				
			}
		});
	});
});