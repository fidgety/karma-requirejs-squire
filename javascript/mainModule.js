define(['jquery'], function ($) {
    return {
        init: function () {
            $('.button').on('click', function () {
                $('input').val('clicked');
            });
        }
    };
});