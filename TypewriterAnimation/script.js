document.addEventListener('DOMContentLoaded', function(event){

  // array with texts to type in typewriter
  var dataText = [ 'The Secret Life Of Pets,', 'The Incredibles,', 'Wreck-It Ralph,', 'Frozen, and', 'How To Train Your Dragon.'];
  
  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById("movies").innerHTML = text.substring(0, i+1); //+'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 200);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1200);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
          StartTextAnimation(0);
      }, 20000);
    }
     // check if dataText[i] exists
    if (i < dataText.length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }

    if (i == 0) { //The Secret life Of Pets
      document.getElementById("gif").src = 'https://media1.giphy.com/media/3oAt28dt10OFgcbDvW/giphy.gif';
    } else if (i == 1) { //the incredibles
      document.getElementById("gif").src = 'https://media1.giphy.com/media/2hgcF3gJfKAxqlQNTr/giphy.gif';
    } else if (i == 2) { //wreck it ralph
      document.getElementById("gif").src = 'https://media3.giphy.com/media/jUJq76vlNDkSUxqirg/source.gif';
    } else if (i == 3) { //frozen
      document.getElementById("gif").src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc63c4d9-4c70-4083-8060-05013ac223bf/d7o525w-6ea95fca-a62d-4728-8603-403943c8bfa4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2M2M2M0ZDktNGM3MC00MDgzLTgwNjAtMDUwMTNhYzIyM2JmXC9kN281MjV3LTZlYTk1ZmNhLWE2MmQtNDcyOC04NjAzLTQwMzk0M2M4YmZhNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VMroBEL93y-nSpDjV1ZF2u3XAQpeLMkTRxJFdqYE7OQ';
    } else if (i == 4) { //How to train your dragon
      document.getElementById("gif").src = 'https://giffiles.alphacoders.com/209/209065.gif';
    }
  }

  // start the text animation
  StartTextAnimation(0);

});