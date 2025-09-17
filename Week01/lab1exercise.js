// Exercise 1
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("the quick brown fox"));

// Exercise 2
function max(a, b, c) {
    let largest = a;

    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }

    return largest;
}

console.log(max(1, 0, 1));      // Output: 1
console.log(max(0, -10, -20));  // Output: 0
console.log(max(1000, 510, 440)); // Output: 1000

// Exercise 3
function right(str) {
    if (str.length < 3) {
        return str;
    }
    let lastThree = str.slice(-3);
    let rest = str.slice(0, str.length - 3);
    return lastThree + rest;
}

console.log(right("Python"));      // Output: honPyt
console.log(right("JavaScript"));  // Output: iptJavaScr
console.log(right("Hi"));          // Output: Hi

// Exercise 4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

console.log(angle_Type(47));   // Acute 
console.log(angle_Type(90));   // Right 
console.log(angle_Type(145));  // Obtuse 
console.log(angle_Type(180));  // Straight

// Exercise 5
function array_max_sum(arr, k) {
    if (arr.length < k) {
        return null; 
    }
    let maxSum = 0;

    for(let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0;

        for (let j = i; j < i + k; j++) {
            currentSum += arr[j];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2));   // 19
console.log(array_max_sum([2, 3, 5, 1, 6], 3));   // 12
console.log(array_max_sum([9, 3, 5, 1, 7], 2));   // 12

