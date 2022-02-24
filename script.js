const keys = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    num: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  const getKey = [
    function uppercase() {
      return keys.uppercase[Math.floor(Math.random() * keys.uppercase.length)];
    },
    function lowercase() {
      return keys.lowercase[Math.floor(Math.random() * keys.lowercase.length)];
    },
    function num() {
      return keys.num[Math.floor(Math.random() * keys.num.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
  
  function createPassword() {
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const num = document.getElementById("num").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + num + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }
  function copyPassword() {
    const textarea = document.createElement("textarea");
    const password = document.getElementById("passwordBox").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  }