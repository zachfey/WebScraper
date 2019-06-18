$('#scrape').on('click', () => {
    console.log(this.id);
    $.ajax({
        type: 'GET',
        url: '/scrape',
    })
    .then(() => {
        location.reload();
    })


})

$(document).ready( () => {
// $('#show-notes').on('click', function () {
    // let notes = []
    $.ajax({
        method: "GET",
        url: "/notes"
    })
        .then(data => {
            // console.log(data)
            for (let i in data) {
                const id = data[i].parent;
                // console.log("$(" + '#' + id +").text(" + data[i].body +")")
                $('#' + id).text(data[i].body)
            }})
            .catch(err => res.json(err))

})

$('.add-note').on('click', function (event) {
    event.preventDefault()
    let id = $(this).data("num")
    // console.log(id)
    let text = $('#' + id).val()
    // console.log(text)
    let note = {
        parent: id,
        body: text
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
        url: "/notes",
        data: JSON.stringify(note)
    }).then(() => 
    location.reload()
    )


})




