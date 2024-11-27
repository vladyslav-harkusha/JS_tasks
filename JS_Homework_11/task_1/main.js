// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
const cartsList = document.querySelector('.carts-list');

fetch('https://dummyjson.com/carts')
	.then(response => response.json())
	.then(({ carts }) => {
	carts.forEach(({ id, products, total, discountedTotal, userId, totalProducts, totalQuantity })=> {
		const cartItem = document.createElement('li');
		cartItem.classList.add('cart');
		cartsList.appendChild(cartItem);

		const cartTitle = document.createElement('h1');
		cartTitle.innerText = `Cart ID: ${id} of USER: ${userId}`;

		const cartInfo = document.createElement('p');
		cartInfo.innerText = `Total products: ${totalProducts}, Total quantity: ${totalQuantity}`;

		const cartPrice = document.createElement('h3');
		cartPrice.innerText = `Total price: ${total}$, Price with discount: ${discountedTotal}$`;

		const cartProductsTitle = document.createElement('h2');
		cartProductsTitle.innerText = 'PRODUCTS IN YOUR CART:';

		const cartProducts = document.createElement('ul');
		cartProducts.classList.add('cart__products');

		products.forEach(({ title, thumbnail }) => {
			const productItem = document.createElement('li');
			productItem.classList.add('product');
			cartProducts.appendChild(productItem);

			const productTitle = document.createElement('h4');
			productTitle.innerText = title;

			const productImage = document.createElement('img');
			productImage.src = thumbnail;
			productImage.classList.add('product__image');

			productItem.append(productTitle, productImage);
		})

		cartItem.append(cartTitle, cartInfo, cartPrice, cartProductsTitle, cartProducts);
	});
});