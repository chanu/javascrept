html
<!DOCTYPE >
<html>
<head>
    <style>
        /* CSS for styling */
        body 
            font-family: Arial, sans-serif;
            text-align: center;
        
        #message 
            font-size: 30px;
            color: gray;
        
    </style>
</head>
<body>
    <h1>Simple Webpage</h1>
    <p id="message">Hello, World!</p>
    <button onclick="changeMessage()">Change Message</button>

    <script>
        // JavaScript to change the message
        function changeMessage() 
            var newMessage = prompt("Enter a new message:");
            if (newMessage !== null && newMessage !== "") 
                document.getElementById("message").textContent = newMessage;
            
        
    </script>
</body>
</html>