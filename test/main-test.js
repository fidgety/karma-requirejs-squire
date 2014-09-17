var tests = [];

for (var file in window.__karma__.files) {
    if (/.*test\/javascript.*\.js/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: '/base',

    paths: {
        jquery: 'javascript/jquery/jquery',
        proclaim: 'test/thirdparty/proclaim',
        squire: 'test/thirdparty/squire/squire'
    },

    packages: [{
        name: 'sinon',
        location: 'test/thirdparty/sinon',
        main: 'lib/sinon'
    }],

    shim: {
    }
});

define('proxyRequire', ['squire'], function (Squire) {
    return function proxyRequire(modules, dependencyMocksHash, callback) {
        var injector = new Squire();

        injector.mock(dependencyMocksHash).
        require(modules, callback);
    };
});

require(tests, function () {
    // start test run once requirejs is done
    mocha.setup('bdd');
    mocha.ignoreLeaks();
    mocha.run();

    chai.should();
});
