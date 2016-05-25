export class Command {
  get args() {
    return [
      ['username'],
      ['password', {
        isPassword: true,
      }],
    ];
  }

  print(results) {
    process.stdout.write('TEST - PRINT\n');
    process.stdout.write(`RESULT: ${results}\n`);
  }

  exec(args) {
    process.stdout.write('TEST - EXEC\n');
    return this.login(args.username, args.password);
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      process.stdout.write(`LOGIN AS: ${username}\n`);
      setTimeout(() => {
        if (username === 'fail' && password === 'fail') {
          reject('Invalid username or password');
        } else {
          resolve('Successfully signed in');
        }
      }, 1000);
    });
  }
}
