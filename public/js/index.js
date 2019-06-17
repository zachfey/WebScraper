
$('#scrape').on('click', () => {
    console.log(this.id);
    $.ajax({
        type: 'GET',
        url: '/scrape',
    });


})

$('.add-note').on('click', function () {
    let note = {
        id: $(this).data("num"),
        body: 'test note'
    }

    console.log(note);
    $.ajax({
        //     type: 'POST',
        //     url: '/notes',
        //     data: note
        headers: {
            "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/notes",
        data: JSON.stringify(note)
    }).then(() => location.reload())


})




