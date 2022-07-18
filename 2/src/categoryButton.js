function createCategoryBtn(category) {
    const categoryBtn = document.createElement('div');
    categoryBtn.innerText = category;
    categoryBtn.id = category;
    categoryBtn.classList.add('blue-round-box', 'font-color-blue', 'padding-8-16', 'font-size-14', 'color-transition');
    if(category === selectedCategory)
        categoryBtn.classList.add('bg-blue-color');

    categoryBtn.addEventListener('click', () => {
        if (selectedCategory !== category) {
            categoryBtn.classList.add('bg-blue-color');

            for (let i = 0; i < categoryContainer.children.length; i++) {
                if (categoryContainer.children[i].id === selectedCategory) {
                    categoryContainer.children[i].classList.remove('bg-blue-color');
                    break;
                }
            }
            selectedCategory = category;
        }
    });

    return categoryBtn;
}

function shortenCategoryTo(limit, categoryBtn){
    categoryBtn.innerText = categoryBtn.id.slice(0,limit - 3) + '⋯';
}