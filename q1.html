<!DOCTYPE html>
<html lang="en">

<head>
    <title>HTML Form</title>
</head>

<body>
    <?php
    $target_dir = "uploads/";
    $target_file1 = $target_dir . basename($_FILES["rfile"]["name"]);
    $target_file2 = $target_dir . basename($_FILES["pfile"]["name"]);
    $uploadOk = 1;
    $resumeFileType =strtolower(pathinfo($target_file1,PATHINFO_EXTENSION)); 
    $imageFileType = strtolower(pathinfo($target_file2,PATHINFO_EXTENSION));
    
    //check its is pdf or docs
    if($resumeFileType != "pdf" && $resumeFileType != "docs"  ) {
      echo "Sorry, only PDF and docs files are allowed.";
      $uploadOk = 0;
    }
    	
    
    // Check if file already exists
    if (file_exists($target_file1)) {
      echo "Sorry, file already exists.";
      $uploadOk = 0;
    }
    
    // Check file size
    if ($_FILES["rfile"]["size"] > 500000) {
      echo "Sorry, your file is too large.";
      $uploadOk = 0;
    }
    
    
    
    // Allow certain file formats
    if($imageFileType != "jpg"  && $imageFileType != "jpeg" ) {
      echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
      $uploadOk = 0;
    }
    if ($_FILES["pfile"]["size"] > 1000000) {
      echo "Sorry, your file is too large.";
      $uploadOk = 0;
    }
    
    
    
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
      if (move_uploaded_file($_FILES["rfile"]["name"],$target_file1 ) && move_uploaded_file($_FILES["pfile"]["tmp_name"],$target_file2 ) ) {
        echo "The file ". htmlspecialchars( basename( $_FILES["rfile"]["name"])). " has been uploaded.";
      } else {
        echo "Sorry, there was an error uploading your file.";
      }
    }
    ?>
    <h1>Form</h1>
    <table>
        <form method="POST" action="" enctype="multipart/form-data">

            Resume : <input type="file" name="rfile"><br>
            Photo : <input type="file" name="pfile" id="pfile"><br>
            Submit : <input type="submit" name="submit">
        </form>
    </table>
</body>

</html>