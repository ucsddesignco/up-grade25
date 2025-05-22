//HELPPPPPP WHAT DOES THIS MEANNNNN

const dropdown = document.querySelector('.dropdown') as HTMLElement | null;
const menuItems = document.querySelectorAll('.role') as NodeListOf<HTMLElement>;

if (dropdown && menuItems) {
  // Toggle dropdown visibility when clicking on the dropdown (open or close it)
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  // Update selected role when an option is clicked
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      alert(`Selected: ${item.textContent}`);
      dropdown.classList.remove('open');
    });
  });

  // Close the dropdown if the user clicks outside of it
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target as Node)) {
      dropdown.classList.remove('open');
    }
  });
}
