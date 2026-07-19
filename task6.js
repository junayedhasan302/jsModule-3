// Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

let sum = 0, n=20;
for(let i=1; i<=n; i++){
    sum+=i;
}
console.log("Summation of 1 to 20: ",sum);
console.log("Summation of 1 to 20 using formulla: ",(n*(n+1))/2);
