 // Function to update the progress of a specific skill
 function updateProgress(skillIndex, progress) {
    const circleContainer = document.querySelectorAll('.circle-container')[skillIndex];
    circleContainer.style.setProperty('--progress', progress + '%');
}

// Example usage: Update progress for each skill
updateProgress(0, 85); // Skill 1 to 20%
updateProgress(1, 80); // Skill 2 to 40%
updateProgress(2, 95); // Skill 3 to 60%
updateProgress(3, 80); // Skill 4 to 80%
updateProgress(4, 100); // Skill 5 to 100%
updateProgress(5, 90); // Skill 1 to 20%
updateProgress(6, 80); // Skill 2 to 40%
updateProgress(7, 95); // Skill 3 to 60%
updateProgress(8, 80); // Skill 4 to 80%
updateProgress(9, 20); // Skill 5 to 100%
