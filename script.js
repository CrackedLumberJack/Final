document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('mouseover', function() {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', function() {
        img.style.transform = 'scale(1)';
    });
});