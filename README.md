# cmdcli-example
Sample project built using cmdcli


## How to run
```
  npm install
  ./bin/test
```

## What's inside?

### [Basic example](src/test.js)
Simple command which performs operations on two numbers

try to run it without any value:
```
  ~/W/d/cmdcli-example ❯❯❯ ./bin/test test                                                                                                                                                                                                                                    master
  ? Provide Give me first number 2
  ? Provide Give me second number 2
  ? Select Give me id (Use arrow keys)
  ❯ sum
    minus
    multiply
```
or with any number of parameters...

### [Login](src/login.js)
Simple login command. Hides your password.
```
  ~/W/d/cmdcli-example ❯❯❯ ./bin/test login                                                                                                                                                                                                                                   master
  ? Provide username test
  ? Provide password ****
```
Also this example demonstrates asynchronous operations.

