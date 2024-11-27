const recipesList = document.querySelector('.recipes-list');

fetch('https://dummyjson.com/recipes')
	.then(response => response.json())
	.then(({ recipes }) => {
		recipes.forEach(({
			id,
			name,
			image,
			prepTimeMinutes,
			cookTimeMinutes,
			difficulty,
			cuisine,
			caloriesPerServing,
			rating,
			ingredients,
			instructions
		}) => {
			const recipeItem = document.createElement('li');
			recipeItem.classList.add('recipe');
			recipesList.appendChild(recipeItem);

			const recipeTitle = document.createElement('h2');
			recipeTitle.innerText = `Recipe: ${id}: "${name}"`;
			recipeTitle.classList.add('recipe__title');

			const recipeWrapper = document.createElement('div');
			recipeWrapper.classList.add('recipeWrapper');

			const recipeInfo = document.createElement('p');
			recipeInfo.innerText = `
				Difficulty: ${difficulty}.
				Cuisine: ${cuisine}.
				Prepared time: ${prepTimeMinutes} min.
				Cook time: ${cookTimeMinutes} min.
				Calories: ${caloriesPerServing}.
				Rating: ${rating}.
			`;
			recipeInfo.classList.add('recipe__info');

			const recipeImage = document.createElement('img');
			recipeImage.src = image;
			recipeImage.classList.add('recipe__image');

			recipeWrapper.append(recipeImage, recipeInfo);

			const ingredientsTitle = document.createElement('h3');
			ingredientsTitle.innerText = 'Ingredients:';
			const ingredientsList = document.createElement('ul');

			ingredients.forEach((ingredient, index) => {
				const ingredientItem = document.createElement('li');
				ingredientItem.innerText = `${index + 1}: ${ingredient}`;
				ingredientsList.appendChild(ingredientItem);
			})

			const instructionsTitle = document.createElement('h3');
			instructionsTitle.innerText = 'Instructions:';
			const instructionsList = document.createElement('ul');

			instructions.forEach((instruction, index) => {
				const instructionItem = document.createElement('li');
				instructionItem.innerText = `${index + 1}: ${instruction}`;
				instructionsList.appendChild(instructionItem);
			})


			recipeItem.append(recipeTitle, recipeWrapper, ingredientsTitle, ingredientsList, instructionsTitle, instructionsList);
		});
	});