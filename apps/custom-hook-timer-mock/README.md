### 📣 Where to start

#### 🚦 Instruction

1. `/src/app/hooks/useWindowSize/`
- Add new field (`height`)
- Write test on custom hook
- 100% code coverage

2. `/src/app/hooks/useCountDown/`
- Write test on custom hook
- 100% code coverage

3. Make sure you run `nx run custom-hook-timer-mock:test` and it's 100% code coverage (ALL GREEN)


#### 🕹 How to run test

- Using NX
```sh
# Running test the whole exercise with nx
$ nx run custom-hook-timer-mock:test
```

- Using VSCode Extension

Make sure you already install `JEST` extension. So you can `right-click` on **file/folder** or click on play icon of the test you have wrote.

<br/>

*Make sure `100%` code coverage*

----
### 💡 What you learn
- Testing Custom Hook
- Testing Custom Hook + Timer Mock
- Integration Test

###
----
### 📚 Tips/Tricks
```ts
jest.useFakeTimers();

jest.useRealTimers()

// Fast-forward until all timers have been executed
jest.runAllTimers();

// Fast-forward until all timers have been executed
jest.advanceTimersByTime(1000);

jest.clearAllTimers()
```

###
---
### 🌐 Reference
- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [Timer Mocks](https://jestjs.io/docs/timer-mocks)
