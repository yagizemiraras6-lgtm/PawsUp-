
const defaultVideos = [
    { title: "Sevimli Kedi", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

const container = document.getElementById('reelsContainer');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const uploadModal = document.getElementById('uploadModal');
const submitVideoBtn = document.getElementById('submitVideoBtn');
const videoTitleInput = document.getElementById('videoTitleInput');
const videoUrlInput = document.getElementById('videoUrlInput');

function renderVideos() {
    container.innerHTML = '';
    defaultVideos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'reel-card';
        let embedUrl = video.url;
        if(embedUrl.includes("watch?v=")) {
            embedUrl = embedUrl.replace("watch?v=", "embed/");
        }
        card.innerHTML = `<iframe src="${embedUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        container.appendChild(card);
    });
}

openModalBtn.addEventListener('click', () => uploadModal.style.display = 'flex');
closeModalBtn.addEventListener('click', () => uploadModal.style.display = 'none');

submitVideoBtn.addEventListener('click', () => {
    const title = videoTitleInput.value.trim();
    const url = videoUrlInput.value.trim();
    if(title && url) {
        defaultVideos.push({ title, url });
        renderVideos();
        uploadModal.style.display = 'none';
        videoTitleInput.value = '';
        videoUrlInput.value = '';
    }
});

renderVideos();


document.addEventListener('DOMContentLoaded', () => {
    const defaultVideos = [
        { title: "Sevimli Kedi", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { title: "Kabe'de Hacılar", url: "https://www.youtube.com/embed/N-23h0s_Z-E" }
    ];

    const container = document.getElementById('reelsContainer') || document.querySelector('.reels-container');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const uploadModal = document.getElementById('uploadModal');
    const submitVideoBtn = document.getElementById('submitVideoBtn');
    const videoTitleInput = document.getElementById('videoTitleInput');
    const videoUrlInput = document.getElementById('videoUrlInput');

    function renderVideos() {
        if (!container) return;
        container.innerHTML = '';
        defaultVideos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'reel-card';
            let embedUrl = video.url;
            if (embedUrl.includes("watch?v=")) {
                embedUrl = embedUrl.replace("watch?v=", "embed/");
            } else if (embedUrl.includes("youtu.be/")) {
                embedUrl = embedUrl.replace("youtu.be/", "www.youtube.com/embed/");
            }
            card.innerHTML = `<iframe src="${embedUrl}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            container.appendChild(card);
        });
    }

    if (openModalBtn && uploadModal) {
        openModalBtn.addEventListener('click', () => {
            uploadModal.style.display = 'flex';
        });
    }

    if (closeModalBtn && uploadModal) {
        closeModalBtn.addEventListener('click', () => {
            uploadModal.style.display = 'none';
        });
    }

    if (submitVideoBtn) {
        submitVideoBtn.addEventListener('click', () => {
            const title = videoTitleInput.value.trim();
            const url = videoUrlInput.value.trim();
            if (title && url) {
                defaultVideos.push({ title, url });
                renderVideos();
                if (uploadModal) uploadModal.style.display = 'none';
                if (videoTitleInput) videoTitleInput.value = '';
                if (videoUrlInput) videoUrlInput.value = '';
            }
        });
    }

    renderVideos();
});
