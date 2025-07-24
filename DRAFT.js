const toggleBtn = document.getElementById('toggleBtn');
        const menu = document.getElementById('menu-toggle');
        
        // Toggle the menu on click
        toggleBtn.addEventListener('click', function () {
            menu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });
