function scuberGreetingForFeet(someValue){
  if (someValue <= 400)
  return "This one is on me!";

  //what about a value between 400 and 2000

  else if (someValue > 2000 && someValue <= 2500)
  return 'I will gladly take your thirty bucks.';

  //not at all how i assumed the && operator worked

  else if (someValue > 2500)
  return 'No can do.';
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; 
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}