// Data portfolio
const projects = [
    {
        name: "Company Profile Website",
        description: "Website company profile menggunakan Laravel dan Tailwind CSS dengan fitur admin panel",
        image: "https://placehold.co/600x300"
    },
    {
        name: "E-Commerce Platform",
        description: "Platform e-commerce fullstack dengan Express.js, React, dan MongoDB",
        image: "https://placehold.co/600x300"
    },
    {
        name: "Task Management App",
        description: "Aplikasi manajemen tugas dengan Vue.js dan Firebase",
        image: "https://placehold.co/600x300"
    },
    {
        name: "Blog Platform",
        description: "Platform blog dengan Next.js dan Headless CMS",
        image: "https://placehold.co/600x300"
    },
    {
        name: "Mobile App",
        description: "Aplikasi mobile dengan React Native dan Firebase",
        image: "https://placehold.co/600x300"
    }
];

// Fungsi untuk menampilkan portfolio
function displayPortfolio() {
    const container = document.getElementById('portfolio-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    const itemsPerPage = 3;
    let currentItems = 0;

    // Fungsi untuk membuat item portfolio HTML
    function createPortfolioItem(project) {
        return `
            <div class="mb-12 p-4 md:w-1/3">
                <div class="overflow-hidden rounded-md shadow-md">
                    <img src="${project.image}" alt="${project.name}" width="w-full" />
                </div>
                <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
                    ${project.name}
                </h3>
                <p class="text-base font-medium text-secondary">
                    ${project.description}
                </p>
            </div>
        `;
    }

    // Fungsi untuk menampilkan items
    function showItems(startIndex, endIndex) {
        container.innerHTML = ''; // Clear container
        for(let i = 0; i < endIndex && i < projects.length; i++) {
            container.innerHTML += createPortfolioItem(projects[i]);
        }
        currentItems = endIndex;

        // Toggle button visibility
        if (currentItems >= projects.length) {
            loadMoreBtn.classList.add('hidden');
            showLessBtn.classList.remove('hidden');
        } else {
            loadMoreBtn.classList.remove('hidden');
            showLessBtn.classList.add('hidden');
        }

        // If showing initial items, hide show less button
        if (currentItems <= itemsPerPage) {
            showLessBtn.classList.add('hidden');
        }
    }

    // Tampilkan 3 item pertama
    showItems(0, itemsPerPage);

    // Tampilkan tombol "Lihat Lainnya" jika ada lebih dari 3 project
    if (projects.length > itemsPerPage) {
        loadMoreBtn.classList.remove('hidden');
    }

    // Event listener untuk tombol "Lihat Lainnya"
    loadMoreBtn.addEventListener('click', () => {
        showItems(0, projects.length);
    });

    // Event listener untuk tombol "Sembunyikan"
    showLessBtn.addEventListener('click', () => {
        showItems(0, itemsPerPage);
    });
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayPortfolio);

window.clientsPayload = [
    {
        name: 'client1',
        thumb: 'logo1',
    },
    {
        name: 'client2',
        thumb: 'logo2',
    },
    {
        name: 'client2',
        thumb: 'logo2',
    },
]


window.skillPayload = [
    {
        name: 'skill1',
        image: 'image1',
        score: 1,
        type: 'backend'
    },
    {
        name: 'skill2',
        image: 'image2',
        score: 2,
        type: 'frontend'
    },
    {
        name: 'skill3',
        image: 'image3',
        score: 3,
        type: 'tools'
    },
    {
        name: 'skill4',
        image: 'image4',
        score: 4,
        type: 'others'
    },
    {
        name: 'others',
        image: 'image4',
        score: 4,
        type: 'others'
    },
    {
        name: 'tools',
        image: 'image3',
        score: 3,
        type: 'tools'
    },
]



