const readline = require('readline');
const rl = readline.createInterface({ input:process.stdin, output:process.stdout });
rl.question('what is your name? ',(name)=>{
  //console.log(`Hello, ${name}! `);
  rl.question('what is an activity you like doing?',(activity)=>{
     rl.question('what do you listen to while doing that activity? ',(song)=>{
      rl.question('which meal is your favorite (eg: dinner, brunch, etc)',(favMeal)=>{
        rl.question("what's your favorite thing to eat for that meal? ",(food)=>{
          rl.question('which sport is your absolute favorite',(sport)=>{
            rl.question('what is your superpower?',(superpower)=>{
              console.log(`Hello, ${name}!, you love ${activity},music is good and i like listening to ${song} while doing ${activity}. In terms of meals, my favorite is ${favMeal} and i like to eat ${food} during that time. sports is a fantastic leisure and my favorite one is ${sport}. In terms of superpowers, i love all of them but prefers ${superpower}. I am fun to be with `);
              rl.close();
            })
          })
        })
      })
     })
  });
  
});

/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/