🥦 Ingredient Image Search

A simple Web page that allows users to search for images of ingredients by name. It displays autocomplete suggestions based on available images and shows the image of the selected ingredient if found.

📁 Project Structure

/ ingredient_search
│
├── index.html # Main HTML page
├── script.js # JavaScript logic for search and suggestions
├── ingredients.php # Backend script to list available ingredients
└── /ingredients/ # Folder containing ingredient images (.jpg, .png, etc.)

 🚀 Features

- 🔍 **Search Bar** with real-time suggestions
- 🖼️ Displays image of the selected ingredient
- ❌ Error message if image not found
- 📦 Uses `ingredients.php` to dynamically fetch available ingredients from the `ingredients/` folder
