// JavaScript to handle tab switching
const projectsTab = document.getElementById('projectsTab');
const blogTab = document.getElementById('blogTab');
const projectsContent = document.getElementById('projectsContent');
const blogContent = document.getElementById('blogContent');
const tabText = document.getElementById('tabText');

// Event listener for Projects tab
projectsTab.addEventListener('click', function () {
    // Show Projects content and hide Blog content
    projectsContent.classList.remove('hidden');
    blogContent.classList.add('hidden');
    
    // Update tab title
    tabText.textContent = "Projects";  
    
    // Update tab styles for active/inactive state
    projectsTab.classList.add('text-white', 'bg-neutral-700');
    projectsTab.classList.remove('text-neutral-500');
    
    blogTab.classList.remove('text-white', 'bg-neutral-700');
    blogTab.classList.add('text-neutral-500');
});

// Event listener for Blog tab
blogTab.addEventListener('click', function () {
    // Show Blog content and hide Projects content
    blogContent.classList.remove('hidden');
    projectsContent.classList.add('hidden');
    
    // Update tab title
    tabText.textContent = "Blog";
    
    // Update tab styles for active/inactive state
    blogTab.classList.add('text-white', 'bg-neutral-700');
    blogTab.classList.remove('text-neutral-500');
    
    projectsTab.classList.remove('text-white', 'bg-neutral-700');
    projectsTab.classList.add('text-neutral-500');
});