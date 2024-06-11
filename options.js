document.addEventListener('DOMContentLoaded', function() {
  // Get the container element
const container = document.querySelector('.content');
const parent = container.parentNode;

// Hide the first .content div
container.style.display = 'none';
let cntentries = 0;
// let moodCount = {
//   happy: 0,
//   Productive: 0,
//   Lazy: 0,
//   stress: 0
// };
// Get the entries from chrome storage
chrome.storage.sync.get('entries', function(result) {
  let entries = result.entries || [];
  // if(entries.mood==='../assets/Whitecat.png'){
  //   moodCount.happy++;
  // }
  // else if(entries.mood==='../assets/orangecat.png'){
  //   moodCount.Productive++;
  // }
  // else if(entries.mood==='../assets/Greycat.png'){
  //   moodCount.Lazy++;
  // }
  // else if(entries.mood==='../assets/Blackcat.png'){
  //   moodCount.stress++;
  // }
  // Loop through the entries and create a new div for each one
  entries.forEach(function(entry) {
    // Clone the container
    cntentries++;
    let newContainer = container.cloneNode(true);
    newContainer.style.display = 'flex';

    let img = newContainer.querySelector('img');
    if (img) img.src = entry.mood;
    
    let h4 = newContainer.querySelector('h4');
    if (h4) h4.textContent = entry.diaryTag;

    let p = newContainer.querySelector('p');
    if (p) p.textContent = entry.dayLog;

    // Append the new container to the parent
    parent.appendChild(newContainer);
  });
  // let mostUsedMood;
  // let mumcount = Math.max(moodCount.happy, moodCount.Productive, moodCount.Lazy, moodCount.stress);
  //  for(let moods in moodCount){
  //    if(moodCount[moods] === mumcount){
  //      mostUsedMood = moods;
  //    }
  //    moodCount[moods] = 0;
  //  }

  if(cntentries%7 === 0 && cntentries !== 0){
    alert(`Yeyy,You have been with us for ${(cntentries/7)}weeks !!`)
    // , this week is mostly been ${mostUsedMood}
   }

});
});