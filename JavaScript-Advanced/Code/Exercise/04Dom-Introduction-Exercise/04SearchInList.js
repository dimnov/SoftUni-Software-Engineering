function search() {
   const itemList = Array.from(document.querySelectorAll('#towns li'));
   const result = document.getElementById('result');
   const search = document.getElementById('searchText');

   let counter = 0;

   itemList.forEach(element => {
      if (element.textContent.includes(search.value)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         counter++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = 'none';
      }
   });

   result.textContent = `${counter} matches found`;
}
