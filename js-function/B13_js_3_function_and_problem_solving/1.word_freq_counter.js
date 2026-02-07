// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences
// Ignore extra spaces

function wordFrequency(sentence) {
  let words = sentence.split(" ");
  console.log(words);
  let wordsCount = {};

  //   console.log(words);
  for (let word of words) {
      let wordLowerCase = word.toLowerCase();
      console.log(wordLowerCase);

      if (wordsCount.hasOwnProperty(wordLowerCase)) {
        //   wordsCount[word] = wordsCount[word] + 1;
        //   wordsCount[word] += 1;
        wordsCount[wordLowerCase]++;
      } else {
        wordsCount[wordLowerCase] = 1;
      }

  }
  //   return wordsCount;
}

let output = wordFrequency("I love JS and I love coding and JS is fun Fun fUn");
console.log(output);

/*
🧠 Programming Problem: Text Analyzer Function

তোমাকে একটি JavaScript ফাংশন লিখতে হবে যার নাম হবে analyzeText()।

📥 Input:

ফাংশনটি একটি ইনপুট নেবে:

একটি String (পূর্ণ বাক্য / sentence)

🎯 Function Requirements:

ফাংশনটি—

1️⃣ ইনপুটটি String কিনা তা যাচাই করবে।
    👉 যদি String না হয় অথবা শুধু space থাকে, তাহলে "Invalid" রিটার্ন করবে।

2️⃣ Sentence থেকে—

সবচেয়ে বড় (দীর্ঘ) শব্দ বের করবে

মোট কতটি শব্দ আছে তা বের করবে

মোট কতটি character আছে তা বের করবে (space বাদ দিয়ে)

3️⃣ শেষে একটি Object রিটার্ন করবে:

{
  longwords: "longestWordHere",
  token: number
}

🚀 Sample Input:
"I am learning Programming to become a programmer."

📤 Sample Output:
{
  longwords: "Programming",
  token: 39
}*/

function  analyzeText(str) {
  console.log('Input Sentence:', str);
  if(typeof str !== 'string' || str.trim().length === 0) {
    return 'Invalid';
  }

  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if(word.length >longestWord.length) {
      longestWord = word;
    }
  }

    let wordCount = str.split(" ").length;
    console.log('Total words:', wordCount);
    let charCount = str.split(' ').join('').length;
    console.log('Total characters:', charCount);
  
  return {
    longwords: longestWord,
    token: charCount 
  };
}

// উদাহরণ
let sentence = "I am learning Programming to become a programmer.";
console.log(analyzeText(sentence));