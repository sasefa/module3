// Assignment code here

document.addEventListener("DOMContentLoaded", function () {

    // Initialize variables
    let includeLower;
    let includeUpper;
    let includeNumber;
    let includeSpecial;
    let length;
  
    // Select elements
    const generateBtn = document.getElementById("generateBtn");
    const recreateBtn = document.getElementById("recreateBtn");
    const passwordField = document.getElementById("password");
  
    // Generate a new password
    function generatePassword() {
      includeLower = confirm("Include lowercase letters?");
      includeUpper = confirm("Include uppercase letters?");
      includeNumber = confirm("Include numbers?");
      includeSpecial = confirm("Include special characters?");
      length = prompt("Enter desired password length (between 8 and 128):");
  
      // Ensure that length is a number between 8 and 128
      while (isNaN(length) || length < 8 || length > 128) {
        length = prompt("Invalid length. Please enter a number between 8 and 128:");
      }
  
      // Define character sets based on user prompts
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const specialChars = "!@#$%^&*()_-+=[]{}|;':\",./<>?";
      let charSet = "";
  
      if (includeLower) {
        charSet += lowercaseChars;
      }
      if (includeUpper) {
        charSet += uppercaseChars;
      }
      if (includeNumber) {
        charSet += numberChars;
      }
      if (includeSpecial) {
        charSet += specialChars;
      }
  
      // Initialize password
      let password = "";
  
      // Fill password with random characters from selected character sets
      for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * charSet.length);
        password += charSet[random];
      }
  
      return password;
    }
  
    // Generate a new password and display it
    generateBtn.addEventListener("click", function () {
      const password = generatePassword();
      passwordField.value = password;
      recreateBtn.style.display = "block";
    });
  
    // Generate a new password with the previously selected criteria
    recreateBtn.addEventListener("click", function () {
      const password = generatePassword();
      passwordField.value = password;
    });
  
  });
  
  
  
  
