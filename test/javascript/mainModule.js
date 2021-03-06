define([
    'jquery',
    'proxyRequire',
    'sinon',
    'javascript/mainModule'
], function ($, proxyRequire, sinon, mainModule) {

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
            true.should.equal(false);
            done();
        });

        it.skip('should call dependencyModule when button is clicked', function (done) {

        });

        it.skip('should call dependencyModule with click count each time the button is clicked', function (done) {

        });
    });
});
