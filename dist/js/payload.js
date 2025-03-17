// Data portfolio
const projects = [
    {
        name: "NemaPOS BE - Aplikasi Kasir",
        description: "Building from scratch",
        link: "https://play.google.com/store/apps/details?id=com.devhunts.nemapos&pcampaignid=web_share",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "BagiBagi E-commerce API",
        description: "Building from scratch ",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "Building Trading Firm - Traders Challenges",
        description: "Build From Scratch ",
        image: "image/project_logo/private.png"
    },
    {
        name: "KEK Sukabumi",
        description: "Building from scratch ",
        image: "image/project_logo/private.png"
    },
    {
        name: "Sistem Aplikasi Perhotelan",
        description: "Maintenance",
        image: "image/project_logo/private.png"
    },
    {
        name: "Sistem aplikasi pemeliharaan container",
        description: "Building from scratch",
        image: "image/project_logo/private.png"
    },
    {
        name: "Sistem aplikasi pemeliharaan mesin",
        description: "Building from scratch",
        image: "image/project_logo/private.png"
    },
    {
        name: "Sistem Penggabugan dan Pemisahan Tanah (GIS)",
        description: "Building from scratch",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "SysAdmin MeefX - Trading Broker",
        description: "Maintenance",
        link: "https://meefx.com",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "Whatspie - Sysadmin Whatsapp Tools",
        description: "Maintenance",
        link: "https://whatspie.com",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "Whatspie API",
        description: "Maintenance",
        link: "https://whatspie.com",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "Whatspie API Documentation",
        description: "Building from scratch",
        link: "https://docs.whatspie.com/docs/api/v2",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "Whatspie API V2",
        description: "Building from scratch",
        image: "image/project_logo/commingsoon.png"
    },
    {
        name: "Whatspie Node - Core Engine",
        description: "Maintenance",
        image: "image/project_logo/commingsoon.png"
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
                    ${project.link ? `<a href="${project.link}" target="_blank" class="p-2  text-xs font-medium text-center text-white bg-primary rounded-md hover:bg-primary/80">View Project</a>` : ''}
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
        name: 'MEEFX',
        thumb: 'image/client_logo/meefx.png',
    },
    {
        name: 'Juno Market',
        thumb: 'image/client_logo/junomarket.png',
    },
    {
        name: 'BARA ALAM UTAMA',
        thumb: 'image/client_logo/baracoal.png',
    },
]


window.skillPayload = [
    // Backend Skills
    {
        name: "PHP",
        type: "Backend",
        icon: "image/logo/php.png"
    },
    {
        name: "Laravel",
        type: "Backend",
        icon: "image/logo/laravel.png"
    },
    {
        name: "CodeIgniter",
        type: "Backend",
        icon: "image/logo/codeigniter.png"
    },
    {
        name: "WordPress",
        type: "Backend",
        icon: "image/logo/wordpress.jpg"
    },
    {
        name: "NodeJS",
        type: "Backend",
        icon: "image/logo/nodejs.png"
    },
    {
        name: "NestJS",
        type: "Backend",
        icon: "image/logo/nestjs.png"
    },
    {
        name: "Golang",
        type: "Backend",
        icon: "image/logo/golang.png"
    },
    {
        name: "Python",
        type: "Backend",
        icon: "image/logo/python.png"
    },
    {
        name: "Django",
        type: "Backend",
        icon: "image/logo/django.png"
    },

    // Frontend Skills
    {
        name: "CSS",
        type: "Frontend",
        icon: "image/logo/css.png"
    },
    {
        name: "Tailwind",
        type: "Frontend",
        icon: "image/logo/tailwind.png"
    },
    {
        name: "React",
        type: "Frontend",
        icon: "image/logo/react.png"
    },
    {
        name: "NextJS",
        type: "Frontend",
        icon: "image/logo/nextjs.png"
    },
    {
        name: "JavaScript",
        type: "Frontend",
        icon: "image/logo/javascript.png"
    },
    {
        name: "Vue",
        type: "Frontend",
        icon: "image/logo/vue.png"
    },

    // Database Skills
    {
        name: "MySQL",
        type: "Database",
        icon: "image/logo/mysql.png"
    },
    {
        name: "SQL Server",
        type: "Database",
        icon: "image/logo/sqlserver.png"
    },
    {
        name: "PostgreSQL",
        type: "Database",
        icon: "image/logo/postgresql.png"
    },
    {
        name: "MongoDB",
        type: "Database",
        icon: "image/logo/mongodb.png"
    },
    {
        name: "SQLite",
        type: "Database",
        icon: "image/logo/sqlite.png"
    },
    {
        name: "NoSQL",
        type: "Database",
        icon: "image/logo/nosql.png"
    },

    // Tools Skills
    {
        name: "Git",
        type: "Tools",
        icon: "image/logo/git.png"
    },
    {
        name: "DBeaver",
        type: "Tools",
        icon: "image/logo/dbeaver.png"
    },
    {
        name: "Ubuntu Server",
        type: "Tools",
        icon: "image/logo/ubuntu.png"
    },
    {
        name: "VSCode",
        type: "Tools",
        icon: "image/logo/vscode.png"
    },
    {
        name: "Power BI",
        type: "Tools",
        icon: "image/logo/powerbi.png"
    }
];

// Certificates Data
window.certificatesPayload = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=AWS+Certificate",
    description: "Cloud computing fundamentals and AWS services certification"
  },
  {
    id: 2,
    name: "Professional Backend Developer",
    issuer: "Dicoding Indonesia",
    date: "2023",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Backend+Certificate",
    description: "Backend development with modern technologies and best practices"
  },
  {
    id: 3,
    name: "Laravel Expert",
    issuer: "BuildWithAngga",
    date: "2022",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Laravel+Certificate",
    description: "Advanced Laravel development and application architecture"
  },
  {
    id: 4,
    name: "Database Design Master",
    issuer: "Udemy",
    date: "2022",
    image: "https://placehold.co/600x400/14b8a6/ffffff?text=Database+Certificate",
    description: "Database design principles and implementation strategies"
  },
  {
    id: 5,
    name: "Web Security Specialist",
    issuer: "Coursera",
    date: "2022",
    image: "https://placehold.co/100x100/14b8a6/ffffff?text=Security+Certificate",
    description: "Web application security and vulnerability assessment"
  }
];



