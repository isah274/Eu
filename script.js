document.getElementById('add-card-btn').addEventListener('click', function() {

  document.getElementById('card-form').classList.remove('hidden');
});

document.getElementById('cancel-btn').addEventListener('click', function() {

  document.getElementById('card-form').classList.add('hidden');
  document.getElementById('front').value ='';
  document.getElementById('back').value ='';
});

document.getElementById('save-card-btn').addEventListener('click', function() {
  const frontText =
  document.getElementById('front').value;
  const backText =
  document.getElementById('back').value;

  if (frontText.trim() === ''- || backText.trim() === '') {
    alert('Por favor, preencha ambos os campos');
    return;
  }

  const flashcard =
  document.createElement('div');
  flashcard.classList.add('flashcard');
  flashcard.innerHTML =
  <div class="front">${frontText}</div>
  <div class="back">${backText}</div>;

  flashcard.addEventListener('click', function(){
    flashcard.classList.toggle('flip');
  });

  document.getElementById('flashcards').appendChild(flashcard);

  document.getElementById('card-form').classList.add('hidden');
  document.getElementById('front').value ='';
  document.getElementById('back').value ='';
});
