function solve() {
   const products = document.querySelectorAll('.product');
   const textArea = document.querySelector('textarea');
   const checkoutButton = document.querySelector('.checkout');

   let totalPrice = 0;
   let cart = [];

   Array.from(products).forEach(product => {
      const addButton = product.querySelector('.add-product');
      const productPrice = Number(product.querySelector('.product-line-price').textContent);
      const productName = product.querySelector('.product-title').textContent;

      addButton.addEventListener('click', () => {
         if (!checkoutButton.disabled) {
            totalPrice += productPrice;
            cart.push(productName);
            textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
         }
      });
   });

   checkoutButton.addEventListener('click', () => {
      if (!checkoutButton.disabled) {
         const uniqueCart = Array.from(new Set(cart));
         textArea.value += `You bought ${uniqueCart.join(', ')} for ${totalPrice.toFixed(2)}.`;
         checkoutButton.disabled = true;
         products.forEach(product => {
            product.querySelector('.add-product').disabled = true;
         });
      }
   });
}