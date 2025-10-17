// Featured articles data
const featuredArticles = [
    {
        title: "AI Innovations in 2025",
        summary: "Discover the latest breakthroughs in Artificial Intelligence.",
        link: "single-article.html",
        img: "images/article1.jpg"
    },
    {
        title: "Top 10 Gadgets of the Year",
        summary: "Explore the most innovative gadgets released this year.",
        link: "single-article.html",
        img: "images/article2.jpg"
    },
    {
        title: "Future of Quantum Computing",
        summary: "Quantum computing is transforming technology rapidly.",
        link: "single-article.html",
        img: "images/article3.jpg"
    }
];

// Inject slides dynamically
const swiperWrapper = document.querySelector(".featured-swiper .swiper-wrapper");

featuredArticles.forEach(article => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
        <img src="${article.img}" alt="${article.title}">
        <h3><a href="${article.link}">${article.title}</a></h3>
        <p>${article.summary}</p>
    `;
    swiperWrapper.appendChild(slide);
});

// Initialize Swiper
const swiper = new Swiper(".featured-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});
