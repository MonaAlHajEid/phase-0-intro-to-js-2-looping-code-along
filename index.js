

// The for loop assigment
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
  
  // Using for loop with Arrays assigment
  const gifts = ["teddy bear", "drone", "doll"];
  
  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);
  
  // writeCards assigment
  function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  
  // countDown assigment
  function countDown(positiveInteger) {
    let i = positiveInteger;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  module.exports = {
    wrapGifts,
    writeCards,
    countDown,
  };
  