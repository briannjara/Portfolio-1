window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const githubProjectsContainer = document.getElementById('github-projects');
    
    // Function to fetch GitHub repositories
    async function fetchGitHubProjects() {
        try {
            const response = await fetch('https://api.github.com/users/briannjara/repos');
            const repos = await response.json();
            displayGitHubProjects(repos);
        } catch (error) {
            console.error('Error fetching GitHub projects:', error);
        }
    }

    // Function to display GitHub repositories
    function displayGitHubProjects(repos) {
        repos.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : 'No description available'}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            githubProjectsContainer.appendChild(projectCard);
        });
    }

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
        fetchGitHubProjects();
    }, 2000); // Adjust the timeout as needed
});
