
$('#scrape').on('click', () => {
    console.log(this.id);
    $.ajax({
        type: 'GET',
        url: '/scrape',
    });


})

// $( document ).ready( () => {
//     articles = []
//     $.getJSON("/articles", data => {
//         // For each one
//         for (let i in data) {
//             // Display the apropos information on the page
//             article = {
//                 title: data.title,
//                 link: data.link,
//                 snippet: data.snippet
//             }
//             articles.push(article);
//         }
//         console.log(articles)
//     });

//     $.ajax({
//         type: 'POST',
//         url: '/',
//         data: articles
//     });
// });




