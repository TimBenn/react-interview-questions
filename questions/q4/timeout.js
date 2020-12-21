// Read the following code. Please explain the output.

const arr = [10, 15, 20, 5];

// The following code will output the index of 4 and an undefined value for all console logs
// each setTimeout is removed from the call stack and fired in the event loop after the loop runs

for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(`Index: ${i} | Value: ${arr[i]}`);
    }, 3000);
}

// After the loop runs
// 4 | undefined * 4
