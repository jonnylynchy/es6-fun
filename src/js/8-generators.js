// =================================
// Fibonacci using ES2015 Generators
// =================================
// 
// https://jsfiddle.net/jonnylynchy/uvncwkkz/
//
// 0. pass in initial numbers (previous: 0, current: 1)
// 1. calculate the new number (current + previous)
// 2. previous is set to current
// 3. current is set to next
// 4. go to step 1 passing in previous and next

// Be careful to not set max too high!
const previous = 0, current = 1, max = 100000;
for(let fib of f(current, previous)) {
  if(fib.current >= max){
    break;
  }
  console.log(fib.next);
}

function* f(current, previous){
  while(true){
    next = current + previous;
    previous = current;
    current = next;
    yield {current, previous, next};
  }
}
