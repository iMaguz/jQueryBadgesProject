$.ajax({
    url: 'https://www.codeschool.com/users/imaguz.json',
    dataType: 'jsonp',
    success: function(response) {
    var badgeElements = $.map(response.courses.completed, function (badge, index){
        var badgeDiv = $('<div class="course"></div>');
        $('<h3>'+badge.title+'</h3>').appendTo(badgeDiv);
        $('<img src="'+badge.badge+'">').appendTo(badgeDiv);
        $('<a href="'+badge.url+'" target="_blank" class="btn btn-primary">See Course</a>').appendTo(badgeDiv);
        return badgeDiv;
    });
    $('#badges').html(badgeElements);
    }
});
