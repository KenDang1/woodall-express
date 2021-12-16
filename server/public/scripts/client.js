/**
 *  This code is running on Andre's computer
 */

$(document).ready(onReady);

function onReady() {
    console.log('So damn ready');

    $('#commentForm').on('submit', onAddComment);

    // grab data from the server and render
    // when the refresh button is clicked
    $('#refresh').on('click', refresh);

    // ..  and grab data and render
    // immediately on page load, too.
    refresh();
};

    // Make a network request
    // Make a HTTP request
    // Make an AJAX request
    // AJAX = "Asynchronous Javascript and XML"
    let ajaxOptions = {
        method: 'GET',
        url:    '/comments'
    }

    $.ajax(ajaxOptions)
        .then((reponse) => {
            console.log('AJAX request complete!!', reponse);
        render(reponse);
    });

    console.log(`
        Made a network request, but 
        no one has time to wait 
        for that....
    `)



function onAddComment(event) {
    // don't reload the page!
    event.preventDefault();

    // prepare our message object
    // to POST to the server
    let comment = {
        author:     $('#authorInput').val(),
        message:    $('#messageInput').val()
    }
    console.log('comment', comment);
    
// send data to server
$.ajax({
    method: 'POST',
    url:    '/comments',
    // send the comment to the server
    // in the request "body"
    // this weill become req.body
    // on the server
    data: comment
})
    .then((reponse) => {
        console.log('POST reponse', reponse);
        
        // refresh..
        // GET /comments from the server again
        // and render to the DOM
        refresh();
    })

};

function refresh() {
    // make a network request
    // make a HTTP request
    // make an AJAX request
    // AJAX === "Asynchronous Javascript and XML"
    let ajaxOptions = {
        method: 'GET',
        url:    '/comments'
    };
    $.ajax(ajaxOptions)
        .then((reponse) => {
            console.log('AJAX request completed', reponse);
            render(reponse);
        });
    console.log(`
        Made a network request, but 
        no one has time to wait 
        for that....
    `)
    
};

    // render function
    function render(comments) {
        // Do some jQuery to render comments (state) to the DOM
        // looping through the comments array
        $('#comments').empty();
        for (let comment of comments) {
        $('#comments').append(`
            <li>
             ${comment.message}
                <div>
                    - by ${comment.author}
                </div>
            </li>
        `)
    }
}