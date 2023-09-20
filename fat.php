<!--html code for navbar containing home pricing support-->
<!DOCTYPE html>
<html>
<head>
<title>Home</title>
<style>
body {
background-color: #f2f2f2;
}
.navbar {
overflow: hidden;
font-family: Arial, Helvetica, sans-serif;
}
.left {
float: left;
}
.f{
font-size: 20px;
}
.right {
float: right;
}
.right a {
display: block;
color: black;
text-align: center;
padding: 14px 16px;
text-decoration: none;
}
.right a:hover {
background-color: #ddd;
color: black;
}
.active {
background-color: #4CAF50;
color: white;
}
.button {
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
}
.b{
background-color:yellow;
}
</style>
</head>
<body>
    <!--left most text-->
    <div class="left"><span class="f"><b>smplr</b>space</span></div>
    <!--center navbar-->
    <div style="text-align:center" class="navbar">
        <button class="button" onclick="window.location.href='home.html'">Home</button>
        <button class="button" onclick="window.location.href='pricing.html'">Pricing</button>
        <button class="button" onclick="window.location.href='support.html'">Support</button>
        <!--dropdown for learn-->
        <select name="learn" id="learn" onchange="location = this.value;">
            <option value="learn.html">Learn</option>
            <option value="learn.html">About</option>
            <option value="learn.html">FAQ</option>
            <option value="learn.html">Contact</option>
        </select>
    </div>
<!--Try it Free button at right-->
<div style="text-align:right" class="navbar">
    <button class="button" onclick="window.location.href='signup.html'">Try it Free</button>
</div>
<!--Two buttons for monthly billing and annual billing-->
<div style="text-align:center" class="navbar">
    <button class="button" onclick="window.location.href='monthly.html'">Monthly Billing</button>
    <button class="button" name="submit1" method="post" onclick="window.location.href='annual.html'">Annual Billing</button>
</div>
<div style="text-align:center" class="navbar">
    <p class="f">Choose <b>Annual billing<b> and get <b class="b">2 months Free</b> every year</p>
</div>

<?php
//connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smplr";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
//select all from pricing
$sql = "SELECT * FROM pricing";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["price"]. "<br>";
}
} else {
echo "0 results";
}
$conn->close();
//create a new row on click of start trial button
if(isset($_POST['btn3'])){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $sql = "INSERT INTO pricing (name, price) VALUES ('$name', '$price')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
if(isset($_POST['btn4'])){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $sql = "INSERT INTO pricing (name, price) VALUES ('$name', '$price')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
if(isset($_POST['btn5'])){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $sql = "INSERT INTO pricing (name, price) VALUES ('$name', '$price')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

//update price details on click of annual billing button
if(isset($_POST['submit1'])){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $sql = "UPDATE pricing SET price='$price' WHERE name='$name'";
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}
//show final price
$sql = "SELECT * FROM pricing";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["price"]. "<br>";
}
} else {
echo "0 results";
}
//save the final price in a new table
if(isset($_POST['submit1'])){
    $name = $_POST['name'];
    $price = $_POST['price'];
    $sql = "INSERT INTO finalprice (name, price) VALUES ('$name', '$price')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>


</body>
</html>