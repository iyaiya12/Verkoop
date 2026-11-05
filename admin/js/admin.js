
// Memuat komponen HTML
async function loadComponent(elementId, filePath) {
    const container = document.getElementById(elementId);

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error("Komponen tidak ditemukan: " + filePath);
        }

        container.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>Komponen gagal dimuat.</p>";
    }
}

// Memuat sidebar, header, dan footer
async function loadAdminLayout() {
    await Promise.all([
        loadComponent("sidebar-container", "components/sidebar.html"),
        loadComponent("header-container", "components/header.html"),
    ]);

    // Tampilkan tanggal
    const dateElement = document.getElementById("current-date");

    if (dateElement) {
        dateElement.textContent = new Intl.DateTimeFormat("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        }).format(new Date());
    }
}

loadAdminLayout();
