console.log("Techlio website loaded successfully!");

// Sample articles data (single copy)
const articles = [
    {
        id: 1,
        title: "AI Innovations in 2025",
        category: "AI",
        summary: "Discover the latest breakthroughs in Artificial Intelligence.",
        link: "single-article.html"
    },
    {
        id: 2,
        title: "Top 10 Gadgets of the Year",
        category: "Gadgets",
        summary: "Explore the most innovative gadgets released this year.",
        link: "single-article.html"
    },
    {
        id: 3,
        title: "Future of Quantum Computing",
        category: "AI",
        summary: "Quantum computing is transforming technology rapidly.",
        link: "single-article.html"
    },
    {
        id: 4,
        title: "Best Software Tools for Developers",
        category: "Software",
        summary: "Increase productivity with these top software tools.",
        link: "single-article.html"
    }
];

// Function to show related articles
function showRelatedArticles(currentCategory) {
    const container = document.getElementById("related-articles-list");
    if (!container) return;

    // Filter articles by same category
    const related = articles.filter(article => article.category === currentCategory);

    // Clear container
    container.innerHTML = "";

    // Add related articles
    related.forEach(article => {
        const articleEl = document.createElement("div");
        articleEl.classList.add("related-article");
        articleEl.innerHTML = `
            <h3><a href="${article.link}">${article.title}</a></h3>
            <p>${article.summary}</p>
        `;
        container.appendChild(articleEl);
    });
}

// Call related articles function (after articles array)
showRelatedArticles("AI");

// Function to show all articles
function showAllArticles() {
    const container = document.getElementById("all-articles-list");
    if (!container) return;

    container.innerHTML = "";

    articles.forEach(article => {
        const articleEl = document.createElement("article");
        articleEl.innerHTML = `
            <img src="images/article${article.id}.jpg" alt="${article.title}">
            <h3><a href="${article.link}">${article.title}</a></h3>
            <p>${article.summary}</p>
        `;
        container.appendChild(articleEl);
    });
}

// Call showAllArticles
showAllArticles();

// Search articles function
function searchArticles() {
    const input = document.getElementById("search-input");
    if (!input) return;
    const filter = input.value.toLowerCase();
    const container = document.getElementById("all-articles-list");
    if (!container) return;

    const articleElements = container.getElementsByTagName("article");

    Array.from(articleElements).forEach(articleEl => {
        const title = articleEl.querySelector("h3").innerText.toLowerCase();
        const summary = articleEl.querySelector("p").innerText.toLowerCase();

        articleEl.style.display = (title.includes(filter) || summary.includes(filter)) ? "" : "none";
    });
}

// Add event listener for search input
const searchInput = document.getElementById("search-input");
if (searchInput) {
    searchInput.addEventListener("keyup", searchArticles);
}
