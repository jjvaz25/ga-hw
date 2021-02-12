/*Assignment 1: 99 Bottles of Beer

Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the 
terminal. If you're unfamiliar with the song, you can find the lyrics here. Do not 
worry about spelling out the numbers, use actual numbers (100, 99, 98...).
Make sure your program can handle both singular and plural cases 
(i.e. both "100 bottles of beer" and "1 bottle of beer").*/

/* my solution */
let i = 100;
while (i >= 1) {
  if (i === 1) {
    console.log(`${i} bottle of beer on the wall,`);
    console.log(`${i} bottle of beer!`);
    console.log(`Take one down, pass it around,`);
    console.log(`no more bottles of beer on the wall!`);
    console.log('');
  } else if ( i === 2) {
    console.log(`${i} bottles of beer on the wall,`);
    console.log(`${i} bottles of beer!`);
    console.log(`Take one down, pass it around,`);
    console.log(`${i-1} bottle of beer on the wall.`);
    console.log('');
  } else {
    console.log(`${i} bottles of beer on the wall,`);
    console.log(`${i} bottles of beer!`);
    console.log(`Take one down, pass it around,`);
    console.log(`${i-1} bottles of beer on the wall.`);
    console.log('');
  };
  i--;
};


/*below is not my solution!!! */
let i = 100;
while (i >= 1) {
  let bottle = i === 1 ? 'bottle' : 'bottles';
  console.log(`${i} ${bottle} of beer on the wall,`)
  console.log(`${i} ${bottle} of beer!`);
  i--;
  bottle = i === 1 ? 'bottle' : 'bottles';
  console.log(`Take one down, pass it around,`);
  console.log(`${i} ${bottle} of beer on the wall.`);
  console.log('');
};