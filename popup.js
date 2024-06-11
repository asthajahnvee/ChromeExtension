document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form');
//const mood = document.getElementById('mood').value;
const diaryTag = document.getElementById('diarytag');
const dayLog = document.getElementById('daylog');

  form.addEventListener('submit', function(event) {
    // confirm('are you sure you wanna submit?');
    // if(alert === false){
    //   return;
    // }
    event.preventDefault(); // Prevent the form from being submitted
    let mood=document.querySelector('input[type="radio"]:checked').value;
    let moodImg;
    let diaryTagValue = diaryTag.value;
    let dayLogValue = dayLog.value;
    if(mood === 'happy'){
      moodImg = '../assets/Whitecat.png';
    }
    else if(mood === 'Productive'){
      moodImg = '../assets/orangecat.png';
    }
    else if(mood === 'Lazy'){
      moodImg = '../assets/greycat.png';
    }
    else if(mood === 'stress'){
      moodImg = '../assets/blackcat.png';
    }
    else{
      alert('Please select a mood');
    }
    // Get the existing entries from chrome storage
    chrome.storage.sync.get('entries', function(result) {
      let entries = result.entries || [];

      // Add the new entry to the array
      entries.push({mood:moodImg, diaryTag: diaryTagValue, dayLog: dayLogValue});

      // Store the updated array in chrome storage
      chrome.storage.sync.set({entries: entries}, function() {
        console.log('Entries are updated');
        alert('Entry added successfully');
      });
    });
  });
}); 