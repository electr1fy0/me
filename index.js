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
    projectsTab.classList.add('dark:text-white', 'dark:bg-[#393939]', 'bg-[#eaeaea]');
    projectsTab.classList.remove('text-neutral-500');
    
    blogTab.classList.remove('dark:text-white', 'dark:bg-[#393939]', 'bg-[#eaeaea]');
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
    blogTab.classList.add('dark:text-white', 'dark:bg-[#393939]', 'bg-[#eaeaea]');
    blogTab.classList.remove('text-neutral-500');
    
    projectsTab.classList.remove('dark:text-white', 'dark:bg-[#393939]', 'bg-[#eaeaea]');
    projectsTab.classList.add('text-neutral-500');
});