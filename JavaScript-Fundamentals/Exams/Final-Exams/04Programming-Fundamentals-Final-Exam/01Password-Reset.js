function passwordReset(input) {
  let password = input.shift();
  let line = input.shift();

  while (line !== 'Done') {
    let command = line.split(' ');

    switch (command[0]) {
      case 'TakeOdd':
        let passwordArr = password.split('');
        password = passwordArr.filter((char, index) => index % 2 !== 0).join('');
        console.log(password);
        break;

      case 'Cut':
        password = password.substring(0, Number(command[1])) + password.substring(Number(command[1]) + Number(command[2]));
        console.log(password);
        break;

      case 'Substitute':
        if (!password.includes(command[1])) {
          console.log('Nothing to replace!');
          break;
        }

        while (password.includes(command[1])) {
          password = password.replace(command[1], command[2]);
        }

        console.log(password);
        break;
    }

    line = input.shift();
  }

  console.log(`Your password is: ${password}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"]);