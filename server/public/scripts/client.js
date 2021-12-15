/**
 *  This code is running on Andre's computer
 */

$(document).ready(onReady);

function onReady() {
    console.log('So damn ready');

    $('button').on('click', onClick);
    $('#commentForm').on('submit', onAddComment);

    // TODO
    // write some code to get the data from the 
    // GET /comments endpoint
    // and then render that data to the DOM


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

};

function onAddComment(event) {
    event.preventDefault();
    let comment = {
        author:     $('#authorInput').val(),
        message:    $('#messageInput').val()
    }

// send data to server
$.ajax({
    method: 'POST',
    url:    '/comments',
    // send the comment to the server
    // in the request "body"
    data:   comment
})
    .then((reponse) => {
        console.log('POST reponse', reponse);
        
        // refresh..
        // GET /comments from the server again
        // and render to the DOM
        refresh();
    })

};    

    // render function
    function render(comments) {
        // Do some jQuery to render comments (state) to the DOM
        // looping through the comments array

        $('#comments').empty();
        for (let comment of comments)
        $('#comments').append(`
            <li>
             ${comment.message}!!!
                <div>
                - by ${comment.author}
                </div>
            </li>
        `)
    }



    function onClick() {
        $(this).css('background', 'green');
    };