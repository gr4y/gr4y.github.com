$(function () {
	
	var projects = $('#projects')
	
	$.getJSON('http://github.com/api/v2/json/repos/show/gr4y?callback=?', function(data, status) {
		$.each(data.repositories, function() {
			
			console.log(this);
			
			var projectName = this.name;
			var projectDescription = this.description;
			var projectLangauge = this.language;
			var projectUrl = this.url;
			var isForked = this.fork;

			var title = document.createElement('h2');
			var text = document.createElement('p');
			var line = document.createElement ('li');
			
			var projectLink = document.createElement('a');
			$(projectLink).attr('href', projectUrl);
			$(projectLink).html(projectName);
			
			$(title).append(projectLink);
			$(line).append(title);
			
			if(isForked) {
				var forkBatch = document.createElement('span');
				$(forkBatch).attr('class', 'forked').text('forked');
				$(line).append(forkBatch);			
			} else {
				$(text).html(projectDescription);
			}
			$(line).append(text).attr('class', 'project');
			$(projects).append(line);
			
		});
	});
	
	$('#content').append(projects);
	
});