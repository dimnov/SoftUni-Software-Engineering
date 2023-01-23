function addAndRemoveElements(arr) {
  const newArr = [];
  let counter = 1;
  for (let i = 0; i < arr.length; i++) {
    const currCommand = arr[i];

    if (currCommand === 'add') {
      newArr.push(counter++);
    } else {
      newArr.pop(counter++);
    }
  }

  if (newArr.length) {
    newArr.forEach(x => console.log(x));
  } else {
    console.log('Empty');
  }
}
addAndRemoveElements(['add',
  'add',
  'add',
  'add']
);