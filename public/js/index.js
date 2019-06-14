
    $('#scrape').on('click', () => {
        console.log(this.id);
        $.ajax({
            type: 'GET',
            url: '/scrape',
        });
    })
