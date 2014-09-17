define(['jquery', 'javascript/dependencyModule'], function ($, depMod) {
    return {
        init: function () {
            $('.button').on('click', function () {
                $('input').val('clicked');
                depMod();
            });
        }
    };

});