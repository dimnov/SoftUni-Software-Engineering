function browserHistory(object, stringArr) {
  let newObject = {
    'Browser Name': object['Browser Name'],
    'Open Tabs': [...object['Open Tabs']],
    'Recently Closed': [...object['Recently Closed']],
    'Browser Logs': [...object['Browser Logs']],
  };

  for (let command of stringArr) {
    let data = command.split(' ');
    let current = data[0];
    let site = data[1];

    if (current == 'Open') {
      openTab(object, site);
    } else if (current == 'Close') {
      close(object, site);
    } else if (command == 'Clear History and Cache') {
      deleteObject(object);
    }
  }

  function openTab(object, site) {
    object['Open Tabs'].push(site);
    browserLogs(object, 'Open ' + site);
  }

  function close(firstObject, site, secondObject) {
    if (firstObject['Open Tabs'].includes(site)) {
      let index = firstObject['Open Tabs'].findIndex(x => x == site);
      let result = firstObject['Open Tabs'].splice(index, 1);
      firstObject['Recently Closed'].push(result[0]);
      browserLogs(firstObject, 'Close ' + site);
    }
  }

  function browserLogs(object, command) {
    object['Browser Logs'].push(command)
  }

  function deleteObject(object) {
    object['Open Tabs'] = [];
    object['Recently Closed'] = [];
    object['Browser Logs'] = [];
  }

  console.log(object['Browser Name']);
  console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
  console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
  console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);
}
browserHistory({
  "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
  "Recently Closed": ["Yahoo", "Gmail"],
  "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
}, ["Close Facebook", "Open StackOverFlow", "Open Google"]);