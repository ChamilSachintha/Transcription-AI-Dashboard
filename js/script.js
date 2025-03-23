// Dropdown menu icon change and toggle
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("dropdownIcon");

  menu.classList.toggle("hidden");

  const iconPath = menu.classList.contains("hidden") 
    ? "public/images/icon-down.png" 
    : "public/images/icon-up.png";

  icon.src = iconPath;
}
