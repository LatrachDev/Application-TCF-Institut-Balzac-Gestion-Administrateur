// four filtre ****************************************
document.getElementById('categoryFilter').addEventListener('change', function() {
    const selectedCategory = this.value.toLowerCase();
    const categories = document.querySelectorAll('.grammaire, .vocabulaire, .comprehension');
    
    categories.forEach(category => {
        if (selectedCategory === 'toute') {
            category.style.display = 'block';
        } else {
            category.style.display = category.className === selectedCategory ? 'block' : 'none';
        }
    });
});


