const cardsData = [
    { image: './img/img1.webp', heading: 'AI Chatbot', description: 'Developed a conversational AI chatbot using NLP.', link: 'https://www.google.com' },
    { image: './img/img2.webp', heading: 'IoT Home Automation', description: 'Created a smart home system with IoT devices.', link: 'https://www.google.com' },
    { image: './img/img5.webp', heading: 'Blockchain Ledger', description: 'Implemented a secure blockchain ledger for transactions.', link: 'https://www.google.com' },
    { image: './img/img1.webp', heading: 'Mobile App Dev', description: 'Built a cross-platform mobile application.', link: 'https://www.google.com' },
    { image: './img/img5.webp', heading: 'Network Security', description: 'Developed a robust network security protocol.', link: 'https://www.google.com' },
    { image: './img/img2.webp', heading: 'Data Analysis', description: 'Performed data analysis using machine learning algorithms.', link: 'https://www.google.com' },
    { image: './img/img5.webp', heading: 'Embedded Systems', description: 'Designed an embedded system for automation.', link: 'https://www.google.com' },
    { image: './img/img2.webp', heading: 'Cloud Computing', description: 'Deployed applications on cloud infrastructure.', link: 'https://www.google.com' },
    { image: './img/img1.webp', heading: 'Cybersecurity', description: 'Created a cybersecurity framework for enterprises.', link: 'https://www.google.com' },
    { image: './img/img2.webp', heading: 'AI Image Recognition', description: 'Developed an AI for image recognition tasks.', link: 'https://www.google.com' },
    { image: './img/img5.webp', heading: 'Web Development', description: 'Built responsive and dynamic websites.', link: 'https://www.google.com' },
    { image: './img/img1.webp', heading: 'Database Management', description: 'Designed and managed a relational database system.', link: 'https://www.google.com' },
    { image: './img/img5.webp', heading: 'Robotics Project', description: 'Engineered a robotic system for automation.', link: 'https://www.google.com' },
    { image: './img/img2.webp', heading: 'Virtual Reality', description: 'Created a virtual reality simulation application.', link: 'https://www.google.com' }
];


const cardsContainer = document.getElementById('cards-container');
const pageNumbers = document.getElementById('page-numbers');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentPage = 1;
let cardsPerPage = getCardsPerPage();
const totalPages = Math.ceil(cardsData.length / cardsPerPage);

function getCardsPerPage() {
    const width = window.innerWidth;
    if (width <= 480) return 3;
    if (width <= 1080) return 4;
    return 3;
}

function displayCards(page) {
    cardsContainer.innerHTML = '';
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const paginatedCards = cardsData.slice(start, end);

    paginatedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.heading}">
            <div class="card-content">
                <h3>${card.heading}</h3>
                <p>${card.description}</p>
                <a href="${card.link}" target="_blank">Link</a>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });

    updatePagination();
}

function updatePagination() {
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.innerText = i;
        pageNumber.className = i === currentPage ? 'active' : '';
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            displayCards(currentPage);
        });
        pageNumbers.appendChild(pageNumber);
    }

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayCards(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayCards(currentPage);
    }
});

window.addEventListener('resize', () => {
    cardsPerPage = getCardsPerPage();
    displayCards(currentPage);
});

// Initial display
displayCards(currentPage);
