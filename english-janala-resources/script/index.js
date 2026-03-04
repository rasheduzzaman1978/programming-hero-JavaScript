// 1️⃣ createElements()

// এই ফাংশনটি একটি array (যেমন synonyms) নিয়ে প্রতিটি item কে HTML element বানায়।
// একটি array নিয়ে প্রতিটি item কে span element বানায়
const createElements = (arr) => {

  // arr.map দিয়ে প্রতিটি element কে <span> বানানো হচ্ছে
  const htmlElements = arr.map(el => `<span class="btn">${el}</span>`);

  // array কে string এ convert করার জন্য join ব্যবহার করা হয়েছে
  return htmlElements.join(" ");
};

// 2️⃣ pronounceWord()

// এই ফাংশনটি word pronunciation (speech) করায়।

function pronounceWord(word) {

  // SpeechSynthesis API দিয়ে speech object তৈরি
  const utterance = new SpeechSynthesisUtterance(word);

  // ভাষা English সেট করা
  utterance.lang = "en-US";

  // browser speech system দিয়ে word speak করানো
  window.speechSynthesis.speak(utterance);
}

// 3️⃣ manageSpinner()

// এই ফাংশন loading spinner show / hide করে।

const manageSpinner = (status) => {

  // যদি status true হয় → spinner show হবে
  if(status == true) {
    document.getElementById('spinner').classList.remove('hidden');
    document.getElementById('word-container').classList.add('hidden');
  } 
  // যদি status false হয় → spinner hide হবে
  else {
    document.getElementById('word-container').classList.remove('hidden');
    document.getElementById('spinner').classList.add('hidden');
  }
};

// 4️⃣ loadLessons()

// API থেকে সব lesson লোড করে।

const loadLessons = () => {

  // API call করা হচ্ছে
  fetch("https://openapi.programming-hero.com/api/levels/all")

  // response JSON এ convert
  .then(res => res.json())

  // lesson data display করা
  .then(json => displayLesson(json.data));
};
// ব্যাখ্যা: এখান থেকে Lesson 1, Lesson 2, Lesson 3 button তৈরি হয়।


// 5️⃣ removeActive()

// সব lesson button থেকে active class remove করে।

const removeActive = () => {

  // সব lesson button select করা
  const lessonButtons = document.querySelectorAll('.lesson-btn');

  // প্রতিটি button থেকে active class remove
  lessonButtons.forEach((btn) => btn.classList.remove('active'));
}
// ব্যাখ্যা: একসাথে একটাই lesson active থাকবে।


// 6️⃣ loadLevelWord()

// নির্দিষ্ট lesson এর words load করে।

const loadLevelWord = (id) => {

  // spinner show
  manageSpinner(true);

  // lesson অনুযায়ী API
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
  .then(res => res.json())
  .then(data => {

    // আগের active remove
    removeActive();

    // clicked button select
    const clickBtn = document.getElementById(`lesson-btn-${id}`);

    // active class add
    clickBtn.classList.add('active');

    // words display
    displayLevelWord(data.data);
  });
};
// ব্যাখ্যা: Lesson button click করলে সেই lesson এর word load হয়।

//   {
//     "word": "Cautious",
//     "meaning": "সতর্ক",
//     "pronunciation": "কশাস",
//     "level": 2,
//     "sentence": "Be cautious while crossing the road.",
//     "points": 2,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "careful",
//         "alert",
//         "watchful"
//     ],
//     "id": 3
// }

// 7️⃣ loadWordDetail()

// নির্দিষ্ট word এর details load করে।

const loadWordDetail = async (id) => {

  // word details API
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  // API call
  const res = await fetch(url);

  // JSON convert
  const details = await res.json();

  // details display
  displayWordDetails(details.data);
};


// 8️⃣ displayWordDetails()

// Modal এ word details দেখায়।

const displayWordDetails = (word)=> {

const detailsBox = document.getElementById('details-container');

detailsBox.innerHTML = `

  <div>
    <h2 class="text-2xl font-bold">
      ${word.word} 
      (<i class="fa-solid fa-microphone-lines"></i>:${word.pronunciation})
    </h2>
  </div>

  <div>
    <h2 class="font-bold">Meaning</h2>
    <p>${word.meaning}</p>
  </div>

  <div>
    <h2 class="font-bold">Example</h2>
    <p>${word.sentence}</p>
  </div>

  <div>
    <h2 class="font-bold">Synonym</h2>
    <div>
      ${createElements(word.synonyms)}
    </div>
  </div>
`;

document.getElementById("word_modal").showModal();
};
// ব্যাখ্যা: Info button click করলে modal এ

// word

// meaning

// example

// synonyms

// দেখায়।


// 9️⃣ displayLevelWord()

// lesson অনুযায়ী সব word card তৈরি করে।

const displayLevelWord = (words) => {

  const wordContainer = document.getElementById('word-container');

  // আগের content clear
  wordContainer.innerHTML = "";

  // যদি word না থাকে
  if(words.length == 0) {
    // alert('No word detected')
    wordContainer.innerHTML = `
    <div class="text-center  col-span-full rounded-xl py-10 space-y-6 font-bangla">
    <img class="mx-auto" src="./assets/alert-error.png" alt="">
    <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
  </div>
    `;
    manageSpinner(false);
    return;
  }
  // {
//     "id": 102,
//     "level": 2,
//     "word": "Night",
//     "meaning": "রাত্রি",
//     "pronunciation": "নাইট"
// }


  // প্রতিটি word এর জন্য card তৈরি
  words.forEach((word) => {

    const card = document.createElement('div');

    card.innerHTML = `
      <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
  <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায় নি"} </h2>
  <p class="font-semibold">Meaning / Pronunciation</p>

  <div class="font-bangla text-2xl font-semibold">${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায় নি"}</div>
  <div class="flex justify-between items-center ">
    <button onclick="loadWordDetail(${word.id})" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-circle-info"></i></button>
    <button onclick="pronounceWord('${word.word}')" class="btn bg-[#1a91ff10] hover:bg-[#1a91ff80]"><i class="fa-solid fa-volume-high"></i></button>
  </div>
</div>
    `;

    wordContainer.appendChild(card);
  });

  // spinner hide
  manageSpinner(false);
};

// 🔟 displayLesson()

// Lesson button তৈরি করে।

const displayLesson = (lessons) => {
  // console.log(lessons);

  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";

  for (let lesson of lessons) {
    // console.log(lesson);
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
      <button id="lesson-btn-${lesson.level_no}"  onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
    `;

    levelContainer.appendChild(btnDiv);
  }
}

// Page load হওয়ার সাথে সাথে lessons load করে।
loadLessons();


// 1️⃣2️⃣ Search System

// Search button click করলে word filter করে।

document.getElementById('btn-search').addEventListener('click', () => {

  // active remove
  removeActive();

  const input = document.getElementById('input-search');

  // search text
  const searchValue = input.value.trim().toLowerCase();

  fetch("https://openapi.programming-hero.com/api/words/all")

  .then((res) => res.json())

  .then((data) => {

    const allWords = data.data;

    // filter
    const filterWords = allWords.filter((word) =>
      word.word.toLowerCase().includes(searchValue)
    );

    displayLevelWord(filterWords);
  })

  .catch((err) => console.log('Error:', err));
});

// ব্যাখ্যা: User যদি লিখে: ni

// তাহলে filter হবে

// Night
// Nine
// Nice