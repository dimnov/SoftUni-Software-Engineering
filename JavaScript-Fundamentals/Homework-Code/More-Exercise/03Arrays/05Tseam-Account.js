function tseamAccount(arr) {
  let games = arr[0].split(' ');
  let arrLength = arr.length;
  let index;

  for (let i = 1; i < arrLength; i++) {
    let current = arr[i].split(' ');
    let command = current[0];
    let gameName = current[1];

    if (command === 'Play') {
      break;
    } else if (command === 'Install' && games.includes(gameName) === false) {
      games.push(gameName);
    } else if (command === 'Uninstall' && games.includes(gameName)) {
      index = games.indexOf(gameName);
      games.splice(index, 1);
    } else if (command === 'Update' && games.includes(gameName)) {
      index = games.indexOf(gameName);
      games.splice(index, 1);
      games.push(gameName);
    } else if (command === 'Expansion') {
      let expansion = gameName.split('-');
      let game = expansion[0];

      if (games.includes(game)) {
        let expandedGame = expansion.join(':');
        index = games.indexOf(game);
        games.splice(index + 1, 0, expandedGame);
      }
    }
  }
  console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])