

let string = "|/-\\|/-\|"

function animation(string){
  let time = 100;
  for (let char of string){
    setTimeout(() => {
      process.stdout.write(`\r${char    }`);
    }, time);
    time += 200
  }
}

animation(string);

