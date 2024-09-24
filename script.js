function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.section');

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';  // Hide all sections
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Show only the selected section
    }
}

// Initially show the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Ensure the home section is shown initially
});
