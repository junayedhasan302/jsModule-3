// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.
let n = 5;

// For loop
for (let i = 1; i <= n; i++) {
    console.log("For loop:", i);
}

// While loop
let i = 1;
while (i <= n) {
    console.log("While loop:", i);
    i++;
}

// Do while loop
i = 1;
do {
    console.log("Do while loop:", i);
    i++;
} while (i <= n);