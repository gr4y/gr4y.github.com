$(function () {
	var projects = $("#projects");
	$.getJSON('https://api.github.com/users/gr4y/repos?callback=?', function(data, status) {
		$.each(data, function() {
			if(!this.fork && this.name != "gr4y.github.com") {
				var projectTmpl = $('#projectTmpl').html();
				$(projects).append(Mustache.to_html(projectTmpl, this));				
			}
		});
	});
});