html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #3498db;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Change Background Color</h1>
  <p>Click the button to change the background color:</p>
  <button id="colorButton">Change Color</button>

  <script>
    // JavaScript code to change the background color
    document.getElementById("colorButton").addEventListener("click", function() {
      // Generate a random color (hex format)
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      
      // Apply the random color to the body background
      document.body.style.backgroundColor = randomColor;
    });
  </script>
</body>
</html>








