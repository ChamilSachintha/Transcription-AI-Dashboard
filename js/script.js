// Dropdown menu
function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("hidden");
}

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
  const menu = document.getElementById("dropdownMenu");
  const button = document.getElementById("dropdownButton");
  
  // Check if the click is outside the dropdown and button
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.add("hidden");  // Hide the dropdown
  }
});
