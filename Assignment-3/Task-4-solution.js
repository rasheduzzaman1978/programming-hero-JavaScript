/*
Problem-04: Upcoming Gono Vote
⚠️ Function Name Must be gonoVote()
আসন্ন গণভোটের ফলাফল বিশ্লেষণের জন্য তোমাকে একটি দায়িত্ব দেওয়া হয়েছে। ভোটের ডাটাগুলো একটি Array-তে জমা করা হয়েছে যেখানে ভোটারদের মতামত "ha" অথবা "na" হিসেবে আছে। তোমার কাজ হলো একটি ফাংশন তৈরি করা যা ভোট গণনা করবে এবং দেখবে "ha" ভোট সংখ্যাগরিষ্ঠ (Majority) কি না।
ফাংশনের কাজ: ফাংশনটি ইনপুট হিসেবে একটি Array নেবে এবং ভোটের সংখ্যার ওপর ভিত্তি করে একটি Boolean (true/false) অথবা equal (string) রিটার্ন করবে।
📥 Input:
ইনপুট হবে একটি Array। যেমন: ["ha", "na", "ha"]


🚀 Output:
যদি "ha" সংখ্যা "na" এর বেশি → true
যদি "ha" সংখ্যা "na" এর সমান → “equal”
অন্যথায় → false


🚩 Challenge:
যদি ইনপুটটি একটি Array না হয় (যেমন: String, Number বা Object), তবে আউটপুট হিসেবে Invalid রিটার্ন করতে হবে।



SAMPLE INPUT
SAMPLE OUTPUT
["ha", "na", "ha", "na"]
equal
["ha", "na", "na"]
false
["ha", "ha", "ha", "na"]
true                    
"ha, na"
Invalid          
12345
Invalid



/*function signature/sample
function gonoVote(array) {
          //write your code here
}
*/

function gonoVote (array) {
  if (!Array.isArray(array)) {
    return 'Invalid';
  }

  let haNumber = 0;
  let naNumber = 0;

  for (let vote of array) {
    if (vote === 'ha') {
      haNumber = haNumber + 1;
    } else if (vote === 'na') {
      naNumber = naNumber + 1;
    }
  }

  if(haNumber > naNumber) {
    return true;
  } else if (haNumber == naNumber) {
    return 'equal';
  } else {
    return false;
  }
}

const vote = gonoVote(['ha', 'ha', 'ha', 'na', 'na', 'na']);
console.log(vote);