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
    tabText.textContent = "projects";  
    
    // Update tab styles for active/inactive state
    projectsTab.classList.add('text-white', 'bg-black');
    projectsTab.classList.remove('text-black');
    
    blogTab.classList.remove('text-white', 'bg-black');
    blogTab.classList.add('text-black');
});

// Event listener for Blog tab
blogTab.addEventListener('click', function () {
    // Show Blog content and hide Projects content
    blogContent.classList.remove('hidden');
    projectsContent.classList.add('hidden');
    
    // Update tab title
    tabText.textContent = "blog";
    
    // Update tab styles for active/inactive state
    blogTab.classList.add('text-white', 'bg-black');
    blogTab.classList.remove('text-black');
    
    projectsTab.classList.remove('text-white', 'bg-black');
    projectsTab.classList.add('text-black');
});