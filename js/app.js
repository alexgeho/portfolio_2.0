function toggleMenu(x) {
  x.classList.toggle("change");
  document.querySelector(".nav").classList.toggle("open");
}

// SKILLS-MENU

const skillTabs = document.querySelectorAll('.skills-tab');
const skillPanels = document.querySelectorAll('.skills-panel');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    skillTabs.forEach(t => t.classList.remove('active'));
    skillPanels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(`panel-${target}`).classList.add('active');
  });
});