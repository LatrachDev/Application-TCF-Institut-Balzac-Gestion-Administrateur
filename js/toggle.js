document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close');
    const openSidebarBtn = document.getElementById('openSidebar');
    // Close sidebar when the "close" button is clicked
    closeBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        openSidebarBtn.classList.remove('hidden');
    });
    // Open sidebar when the "open" button is clicked
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        openSidebarBtn.classList.add('hidden');
    });
});