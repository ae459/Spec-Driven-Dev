// Sprint 004: Dynamic Project Rendering

document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "AI-Powered Spec-Driven Development",
            date: "2024-10-26",
            description: "A portfolio project built by an AI assistant following a detailed specification.",
            tasks: [
                { item: "Initial Setup & Scaffolding", cost: "5.00" },
                { item: "Content Modeling & Structure", cost: "8.00" },
                { item: "Static Component Implementation", cost: "12.00" },
                { item: "Dynamic Project Rendering", cost: "15.00" },
                { item: "Deployment & Final Polish", cost: "10.00" }
            ],
            total: "50.00"
        },
        {
            title: "E-Commerce Platform Integration",
            date: "2023-08-15",
            description: "Integrated a new payment gateway into a legacy e-commerce system.",
            tasks: [
                { item: "API Analysis & Design", cost: "20.00" },
                { item: "Backend Service Development", cost: "40.00" },
                { item: "Frontend UI/UX Implementation", cost: "35.00" },
                { item: "End-to-End Testing & QA", cost: "25.00" }
            ],
            total: "120.00"
        }
    ];

    const projectsContainer = document.getElementById('projects');

    projects.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';

        let tasksHtml = '';
        project.tasks.forEach(task => {
            tasksHtml += `<li><span>${task.item}</span><span>$${task.cost}</span></li>`;
        });

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p class="date">DATE: ${project.date}</p>
            <p>${project.description}</p>
            <ul class="tasks">
                ${tasksHtml}
            </ul>
            <p class="total"><span>TOTAL</span><span>$${project.total}</span></p>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
});