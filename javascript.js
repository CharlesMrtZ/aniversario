let backBtn = document.getElementById('flip-card-btn-turn-to-back');
let frontBtn = document.getElementById('flip-card-btn-turn-to-front');
let flipCard = document.getElementById('flip-card');

document.addEventListener('DOMContentLoaded', function(event) {

  backBtn.style.visibility = 'visible';
  frontBtn.style.visibility = 'visible';

  
  
  backBtn.onclick = function() {
// alert("função girar para trás");
    flipCard.classList.toggle('do-flip');
    setTimeout(flipCard.classList.remove('do-flip'), 1000);
    return flipCard.classList.toggle('reverse-flip');
  };

  frontBtn.onclick = function() {
// alert("função girar para frente");
    flipCard.classList.toggle('reverse-flip');
  };
});

// if (backBtn.hasClass('do-flip')) {
//     flipCard.classList.toggle('do-flip');
// } else {
//     flipCard.classList.toggle('reverse-flip');
// }