define([
    'jquery',
    'proclaim',
    'proxyRequire',
    'javascript/mainModule'
], function ($, proclaim, proxyRequire, mainModule) {

    describe('Main module', function () {
        beforeEach(function () {
            var html = '<div class="fixture"><div class="button"></div><input type="hidden" name="name"/></div>';

            $('body').append(html);
        });

        afterEach(function () {
            $('.fixture').remove();
        });

        it('should add a value to a hidden field when button is clicked', function (done) {
            mainModule.init();
            $('.button').trigger('click')
            proclaim.equal($('.fixture input').val(), 'clicked');
            done();
        });

        it('should call dependencyModule when button is clicked', function (done) {
            proxyRequire(['javascript/mainModule'], {
                'javascript/dependencyModule': function () {
                    done();
                },
                jquery: $
            }, function (mainModuleProxied) {
                mainModuleProxied.init();
                $('.button').trigger('click')
            })
        });

        it.skip('should call dependencyModule with click count each time the button is clicked', function (done) {

        });
    });
});
