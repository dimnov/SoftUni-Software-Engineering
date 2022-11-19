function extractFile(path) {
  const dirs = path.split('\\');
  const file = dirs.pop();

  const dot = file.lastIndexOf('.');
  const fileName = file.substring(0, dot);
  const extension = file.substring(dot + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')