function fromJSONtoHTML(jsonData) {
  const result = [];

  result.push('<table>');

  const data = JSON.parse(jsonData);
  const props = Object.keys(data[0]);

  result.push(`<tr>${props.map(p => `<th>${escapeHTML(p)}</th>`).join('')}</tr>`);

  for (const entry of data) {
    result.push(`<tr>${props.map(p => `<td>${escapeHTML(entry[p])}</td>`).join('')}</tr>`);
  }

  result.push('</table>');

  function escapeHTML(value) {
    return value
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  console.log(result.join('\n'));
}
fromJSONtoHTML(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`
);