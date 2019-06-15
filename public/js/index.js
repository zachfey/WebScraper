
$('#scrape').on('click', () => {
    console.log(this.id);
    $.ajax({
        type: 'GET',
        url: '/scrape',
    });
})

$.getJSON("/articles", data => {
    // For each one
    for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles").append(
            "<p data-id='" + data[i]._id + "'>" + 
            data[i].title + "<br />" + 
            data[i].link + "<br />" +
            data[i].snippet + "</p>");
    }
});


