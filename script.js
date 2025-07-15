let ingredients = [];

    fetch('ingredients.php')
      .then(res => res.json())
      .then(data => {          
        ingredients = data;   // Store the ingredient names in a JS array
      })
      .catch(err => console.error('Failed to fetch ingredient list:', err));

    document.getElementById('searchBtn').addEventListener('click', searchImage);

    document.getElementById('searchInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        searchImage();
      }
    });

    document.getElementById('searchInput').addEventListener('input', function () {
      showSuggestions(this.value.trim().toLowerCase());
    });

    function showSuggestions(query) {
      const suggestions = document.getElementById('suggestions');
      suggestions.innerHTML = '';

      if (!query) return;

      const matches = ingredients.filter(item => item.startsWith(query));
      matches.forEach(match => {
        const li = document.createElement('li');
        li.textContent = match;

        li.addEventListener('click', () => {
          document.getElementById('searchInput').value = match;
          suggestions.innerHTML = '';
          searchImage();
        });

        suggestions.appendChild(li);
      });
    }

    function searchImage() {
      const input = document.getElementById('searchInput').value.trim().toLowerCase();
      const img = document.getElementById('ingredientImg');
      const error = document.getElementById('errorMsg');
      const suggestions = document.getElementById('suggestions');

      suggestions.innerHTML = ''; // hide suggestions

      if (!input) {
        img.style.display = 'none';
        img.src = '';
        error.textContent = '';
        return;
      }

      const extensions = ['.jpg', '.png', '.jpeg', '.webp'];
      let isImageFound = false;

      (function tryLoad(index) {
        if (index >= extensions.length) {
          if (!isImageFound) {
            img.style.display = 'none';
            img.src = '';
            error.textContent = 'Image not found.';
          }
          return;
        }

        const fileName = `ingredients/${input}${extensions[index]}`;
        const testImg = new Image();

        testImg.onload = () => {
          if (!isImageFound) {
            isImageFound = true;
            img.src = fileName;
            img.style.display = 'block';
            error.textContent = '';
          }
        };

        testImg.onerror = () => {
          tryLoad(index + 1);
        };

        testImg.src = fileName;
      })(0);
    }