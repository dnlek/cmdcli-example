export class Command {
  get args() {
    return [
      ['one', {
        help: 'Give me first number',
        type: 'int',
      }],
      ['two', {
        help: 'Give me second number',
        type: 'int',
      }],
      ['operation', {
        help: 'Give me id',
        promptChoices: ['sum', 'minus', 'multiply'],
      }],
    ];
  }

  print(results) {
    process.stdout.write('TEST - PRINT\n');
    process.stdout.write(`RESULT: ${results}\n`);
  }

  exec(args) {
    const operations = {
      sum: (a, b) => a + b,
      minus: (a, b) => a - b,
      multiply: (a, b) => a * b,
    };
    process.stdout.write('TEST - EXEC\n');
    process.stdout.write(`ARGUMENT1: ${args.one}\n`);
    process.stdout.write(`ARGUMENT2: ${args.two}\n`);
    process.stdout.write(`OPERATION: ${args.operation}\n`);
    return operations[args.operation](args.one, args.two);
  }
}
