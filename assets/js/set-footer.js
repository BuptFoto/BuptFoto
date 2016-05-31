// set-footer.js

$.getJSON('../json/footer-data.json', function(data) {
    $('#footer-info').append($('<p>').attr('id', 'powered-by').html('Powered by '));
    for (var i in data.powered_by) {
        if (i < 1) {
            $('#powered-by').append($('<a>').attr('href', data.powered_by[i].link).attr('target', '_blank').html(data.powered_by[i].name)).append(' ' + data.powered_by[i].version);
        }
        else {
            $('#powered-by').append(' &middot; ').append($('<a>').attr('href', data.powered_by[i].link).attr('target', '_blank').html(data.powered_by[i].name)).append(' ' + data.powered_by[i].version);
        };
    };
    $('#footer-info').append($('<p>').html(function(){var date = new Date(); return '&copy; ' +  date.getFullYear() + ' ';})
        .append($('<a>').attr('href', data.organization.link).attr('target', '_blank').html(data.organization.name))
        .append(data.organization.suffix)
    );
});
