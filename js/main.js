$(function () {
	
	var projects = $('#projects');
	projects.ready(function() {
		$.getJSON('http://github.com/api/v2/json/repos/show/gr4y?callback=?', function(data, status) {
			$.each(data.repositories, function() {
				var projectLink = document.createElement('a');
				$(projectLink).attr('href', this.url);
				$(projectLink).html(this.name);
				
				var title = document.createElement('h2');
				$(title).append(projectLink).attr('class','project-title')

				var language = document.createElement('span');
				$(language).html(this.language);
				
				var forkBatch = document.createElement('span');
				$(forkBatch).attr('class', 'forked').text('forked');

				var text = document.createElement('p');
				var line = document.createElement ('li');					
				$(line).hide().append(title).append(language).append(text).attr('class', 'project');
				this.fork ? $(line).append(forkBatch) : $(text).html(this.description);
				
				if(this.name != "gr4y.github.com") {
					$(projects).append(line);				
				}
				$(line).fadeIn(2000);
			});
		});
	})
});