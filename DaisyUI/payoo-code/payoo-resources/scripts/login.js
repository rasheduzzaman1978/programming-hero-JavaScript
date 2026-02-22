// console.log("Login page script loaded");
document.getElementById("login-btn").addEventListener("click", function() {
    // console.log("Login button clicked");
    // 1. Get the mobile number input
   
    // 3. match the mobile number and pin with the stored data (this is just a placeholder, you would typically check against a database or an API)
    // 3.1 If the credentials are correct, redirect to the dashboard or home page
    // 3.2 If the credentials are incorrect, show an error message
    const numberInput = document.getElementById("input-number").value;
    console.log("Mobile Number entered:", numberInput);
    const pin = document.querySelector('input[type="password"]').value;
     // 2. Get the pin input
     const pinInput = document.getElementById("input-pin").value;
     console.log("Pin entered:", pinInput);     
    // Here you can add your login logic, e.g., validate input, send data to server, etc.

    // 3. match the mobile number and pin with the stored data (this is just a placeholder, you would typically check against a database or an API)
    if (numberInput === "01716651946" && pinInput === "1234") {
        // 3.1 If the credentials are correct, redirect to the dashboard or home page
        alert("Login successful! Redirecting to dashboard...");
        // window.location.href = "dashboard.html"; // Uncomment this line to redirect to the dashboard
        // window.location.replace("home.html"); // Use replace to prevent going back to the login page
        // window.location.href = "home.html"; // Redirect to home page
        window.location.assign("home.html"); // Another way to redirect to home page
    } else {
        // 3.2 If the credentials are incorrect, show an error message
        alert("Invalid mobile number or pin. Please try again.");
        return;
    }   
});