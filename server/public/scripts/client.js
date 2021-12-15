$(document).ready(onReady);

function onReady() {
    console.log('So damn ready');

    $('button').on('click', onClick);
}

function onClick() {
    $(this).css('background', 'green');
}