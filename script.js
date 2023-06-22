
document.addEventListener("DOMContentLoaded", function () {

    // Initialize variables
    let includeLower;
    let includeUpper;
    let includeNumber;
    let includeSpecial;
    let length;
  
    const generateBtn = document.getElementById("generateBtn");
    const recreateBtn = document.getElementById("recreateBtn");
    const passwordField = document.getElementById("password");
  
    function generatePassword() {
      includeLower = confirm("Include lowercase letters?");
      includeUpper = confirm("Include uppercase letters?");
      includeNumber = confirm("Include numbers?");
      includeSpecial = confirm("Include special characters?");
      length = prompt("Enter desired password length (between 8 and 128):");
  
      while (isNaN(length) || length < 8 || length > 128) {
        length = prompt("Invalid length. Please enter a number between 8 and 128:");
      }
  
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
  
      let password = "";
  
      for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * charSet.length);
        password += charSet[random];
      }
  
      return password;
    }
  
    generateBtn.addEventListener("click", function () {
      const password = generatePassword();
      passwordField.value = password;
      recreateBtn.style.display = "block";
    });
  
    recreateBtn.addEventListener("click", function () {
      const password = generatePassword();
      passwordField.value = password;
    });
  
  });
  
  
  
  
