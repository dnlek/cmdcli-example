'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Command = exports.Command = (function () {
  function Command() {
    _classCallCheck(this, Command);
  }

  _createClass(Command, [{
    key: 'print',
    value: function print(results) {
      process.stdout.write('TEST - PRINT\n');
      process.stdout.write('RESULT: ' + results + '\n');
    }
  }, {
    key: 'exec',
    value: function exec(args) {
      process.stdout.write('TEST - EXEC\n');
      return this.login(args.username, args.password);
    }
  }, {
    key: 'login',
    value: function login(username, password) {
      return new Promise(function (resolve, reject) {
        process.stdout.write('LOGIN AS: ' + username + '\n');
        setTimeout(function () {
          if (username === 'fail' && password === 'fail') {
            reject('Invalid username or password');
          } else {
            resolve('Successfully signed in');
          }
        }, 1000);
      });
    }
  }, {
    key: 'args',
    get: function get() {
      return [['username'], ['password', {
        isPassword: true
      }]];
    }
  }]);

  return Command;
})();