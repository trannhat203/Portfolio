// Đảm bảo rằng tài liệu đã sẵn sàng trước khi thực thi
document.addEventListener("DOMContentLoaded", function() {
    // Thêm lớp visible cho header để kích hoạt hiệu ứng fade-in
    const header = document.querySelector('header');
    header.classList.add('visible');

    // Thêm lớp visible khi người dùng cuộn đến phần giới thiệu
    const aboutSection = document.querySelector('#about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    observer.observe(aboutSection);
});
