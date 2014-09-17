define(['jquery', 'javascript/dependencyModule'], function ($, dependencyModule) {
    return {
        init: function () {
            var clicked = 0;
            $('.button').on('click', function () {
                $('input').val('clicked');
                dependencyModule(++clicked);
            });
        }
    };
});