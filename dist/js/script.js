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
  let currentItems = 3;

  function showCertificates(startIndex, endIndex) {
    container.innerHTML = '';
    const certificates = window.certificatesPayload.slice(startIndex, endIndex);

    certificates.forEach(cert => {
      const certElement = document.createElement('div');
      certElement.className = 'w-full px-4 md:w-1/2 xl:w-1/3';
      certElement.innerHTML = `
        <div class="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-700">
          <img 
            src="${cert.image}" 
            alt="${cert.name}" 
            class="w-full cursor-pointer transition duration-500 ease-in-out hover:scale-105"
          />
          <div class="py-8 px-6">
            <h3 class="mb-3 text-xl font-semibold text-dark truncate dark:text-white">
              ${cert.name}
            </h3>
            <p class="mb-3 text-base font-medium text-secondary">
              ${cert.description}
            </p>
            <div class="flex items-center justify-between">
              <p class="text-sm text-slate-500">
                ${cert.issuer}
              </p>
              <span class="text-sm text-primary font-medium">
                ${cert.date}
              </span>
            </div>
          </div>
        </div>
      `;
      container.appendChild(certElement);

      // Add click event for image
      const img = certElement.querySelector('img');
      img.addEventListener('click', () => {
        modalImage.src = cert.image;
        modal.classList.remove('hidden');
      });
    });

    // Show/Hide buttons based on number of items
    if (window.certificatesPayload.length > 3) {
      if (endIndex >= window.certificatesPayload.length) {
        loadMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
      } else {
        loadMoreBtn.classList.remove('hidden');
        showLessBtn.classList.add('hidden');
      }
    }
  }

  // Initial display
  showCertificates(0, currentItems);

  // Load More button click
  loadMoreBtn.addEventListener('click', () => {
    showCertificates(0, window.certificatesPayload.length);
  });

  // Show Less button click
  showLessBtn.addEventListener('click', () => {
    showCertificates(0, 3);
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