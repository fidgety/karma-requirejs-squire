define(['jquery'], function ($) {
    $('.button').on('click', function () {
        $('input').val('clicked');
    });
});