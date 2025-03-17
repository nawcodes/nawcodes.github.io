// console.log(skillPayload);
// Checkpoint
// Alpine has been loaded, so we can start using it.

// Certificates Section
function displayCertificates() {
  const container = document.getElementById('certificates-container');
  const loadMoreBtn = document.getElementById('load-more-cert-btn');
  const showLessBtn = document.getElementById('show-less-cert-btn');
  const modal = document.getElementById('certificate-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.getElementById('close-modal');
  const itemsPerPage = 3;
  let currentItems = 0;

  // Fungsi untuk membuat item sertifikat HTML
  function createCertificateItem(cert) {
    const certElement = document.createElement('div');
    certElement.className = 'mb-12 p-4 md:w-1/3';
    certElement.innerHTML = `
      <div class="overflow-hidden rounded-md shadow-md">
        <img 
          src="${cert.image}" 
          alt="${cert.name}" 
          class="w-full cursor-pointer transition duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <h3 class="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
        ${cert.name}
      </h3>
      <p class="text-base font-medium text-secondary">
        ${cert.description}
      </p>
      <div class="flex items-center justify-between mt-2">
        <p class="text-sm text-slate-500">
          ${cert.issuer}
        </p>
        <span class="text-sm text-primary font-medium">
          ${cert.date}
        </span>
      </div>
    `;
    
    // Add click event for image
    const img = certElement.querySelector('img');
    img.addEventListener('click', () => {
      modalImage.src = cert.image;
      modal.classList.remove('hidden');
    });
    
    return certElement;
  }

  // Fungsi untuk menampilkan items
  function showItems(startIndex, endIndex) {
    container.innerHTML = ''; // Clear container
    const certificates = window.certificatesPayload.slice(0, endIndex);
    
    certificates.forEach(cert => {
      container.appendChild(createCertificateItem(cert));
    });
    
    currentItems = endIndex;

    // Toggle button visibility
    if (currentItems >= window.certificatesPayload.length) {
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

  // Initial display
  showItems(0, itemsPerPage);

  // Show "Load More" button if there are more than 3 certificates
  if (window.certificatesPayload.length > itemsPerPage) {
    loadMoreBtn.classList.remove('hidden');
  }

  // Load More button click
  loadMoreBtn.addEventListener('click', () => {
    showItems(0, window.certificatesPayload.length);
  });

  // Show Less button click
  showLessBtn.addEventListener('click', () => {
    showItems(0, itemsPerPage);
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });
}

// Initialize certificates display
document.addEventListener('DOMContentLoaded', displayCertificates);