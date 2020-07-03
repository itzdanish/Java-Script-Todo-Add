localStorage.setItem('hero','Thor');
localStorage.setItem('todo','Buy Ice Tea');
var myHero = localStorage.getItem('hero')
console.log(myHero);

console.log(localStorage.getItem('todo'));
localStorage.setItem('todo','texting');
console.log(localStorage.getItem('todo'));

//localStorage.removeItem('hero')
localStorage.clear();
myHero = localStorage.getItem('hero')
console.log(myHero);
