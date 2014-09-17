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

        it('should add a value to a hidden field when button is clicked', function () {
            mainModule.init();
            $('.fixture .button').trigger('click');

            $('.fixture input').val().should.equal('clicked');
        });

        it('should call dependencyModule when button is clicked', function (done) {
            proxyRequire(['javascript/mainModule'], {
                'javascript/dependencyModule': function () {
                    done();
                },
                jquery: $ //here is the magic - it makes sure we're using the same jquery context
            }, function (mainModule) {
                mainModule.init();
                $('.fixture .button').trigger('click');
            });
        });

        it('should call dependencyModule with click count each time the button is clicked', function (done) {
            var dependencyModuleSpy = sinon.spy();
            proxyRequire(['javascript/mainModule'], {
                'javascript/dependencyModule': dependencyModuleSpy,
                jquery: $
            }, function (mainModule) {
                mainModule.init();
                $('.fixture .button').trigger('click');
                $('.fixture .button').trigger('click');

                dependencyModuleSpy.calledWith(1).should.equal(true);
                dependencyModuleSpy.calledWith(2).should.equal(true);
                dependencyModuleSpy.callCount.should.equal(2);
                done();
            });
        });
    });
});
