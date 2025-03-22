  function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.getElementById("dropdownIcon");

    menu.classList.toggle("hidden");

    if (!menu.classList.contains("hidden")) {
      icon.src = "./images/icon-up.png"; // Change to up icon
    } else {
      icon.src = "./images/icon-down.png"; // Change back to down icon
    }
  }