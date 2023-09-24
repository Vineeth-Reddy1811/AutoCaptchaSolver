<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test</title>
    <style type="text/css"">
        #imported{
            width: 250px;
            height: 158px;
            position: absolute;
        }
    </style>
</head>
<body>
    <center><h1>Test</h1></center>
    <div id="imported">
    <input type="text" value="<?php echo file_get_contents ('captchaOutput.txt');  ?>">
    </div>
</body>
</html>