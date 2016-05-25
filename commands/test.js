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
      var operations = {
        sum: function sum(a, b) {
          return a + b;
        },
        minus: function minus(a, b) {
          return a - b;
        },
        multiply: function multiply(a, b) {
          return a * b;
        }
      };
      process.stdout.write('TEST - EXEC\n');
      process.stdout.write('ARGUMENT1: ' + args.one + '\n');
      process.stdout.write('ARGUMENT2: ' + args.two + '\n');
      process.stdout.write('OPERATION: ' + args.operation + '\n');
      return operations[args.operation](args.one, args.two);
    }
  }, {
    key: 'args',
    get: function get() {
      return [['one', {
        help: 'Give me first number',
        type: 'int'
      }], ['two', {
        help: 'Give me second number',
        type: 'int'
      }], ['operation', {
        help: 'Give me id',
        promptChoices: ['sum', 'minus', 'multiply']
      }]];
    }
  }]);

  return Command;
})();