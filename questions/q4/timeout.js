// Read the following code. Please explain the output.

const arr = [10, 15, 20, 5];

for (var i = 0; i < arr.length; i++) {
	setTimeout(() => {
  	console.log(`Index: ${i} | Value: ${arr[i]}`);
  }, 3000)
}
