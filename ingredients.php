<?php
$dir = 'ingredients/';
$allowed_extensions = ['jpg', 'jpeg', 'png', 'webp'];

$files = scandir($dir);
$ingredients = [];

foreach ($files as $file) {
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    if (in_array($ext, $allowed_extensions)) {
        $name = strtolower(pathinfo($file, PATHINFO_FILENAME));
        $ingredients[] = $name;
    }
}

header('Content-Type: application/json');
echo json_encode(array_unique($ingredients));
?>
