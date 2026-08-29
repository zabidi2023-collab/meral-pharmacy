// ========== HAMBURGER MENU ==========
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
            });
        });
    }

    // ========== CONTACT FORM ==========
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                showMessage('⚠️ الرجاء ملء جميع الحقول المطلوبة', 'error');
                return;
            }

            if (name.length < 3) {
                showMessage('⚠️ الرجاء إدخال اسم صحيح', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('⚠️ الرجاء إدخال بريد إلكتروني صحيح', 'error');
                return;
            }

            showMessage('⏳ جاري إرسال الرسالة...', 'info');

            setTimeout(function() {
                showMessage('✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
                form.reset();
                setTimeout(function() {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    function showMessage(text, type) {
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.className = 'form-message ' + type;
            formMessage.style.display = 'block';
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ========== CURRENT YEAR ==========
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});
