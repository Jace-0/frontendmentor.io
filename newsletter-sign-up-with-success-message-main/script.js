document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const form = document.querySelector('.stay-updated');
    const hero_img = document.querySelector('img');
    const emailInput = document.querySelector('input[type="email"]');
    const subscribeBtn = document.querySelector('button');
    const wrapper = document.querySelector('.wrapper');
    const successMessage = document.querySelector('.subscribed');
    const dismissBtn = document.querySelector('.subscribed button');
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show error state
    function showError() {
        emailInput.classList.add('error');
        const errorMessage = document.querySelector('.error-message');
        errorMessage.classList.add('show');
    }
    
    // Hide error state
    function hideError() {
        emailInput.classList.remove('error');
        const errorMessage = document.querySelector('.error-message');
        errorMessage.classList.remove('show');
    }
    
    // Show success message
    function showSuccess(email) {
        // Update the email in success message
        const successText = successMessage.querySelector('p');
        successText.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;
        
        // Hide main content and show success message
        form.classList.add('hidden')
        hero_img.classList.add('hidden');
        successMessage.classList.add('show');
    }
    
    // Hide success message and return to form
    function hideSuccess() {
        form.classList.remove('hidden')
        hero_img.classList.remove('hidden');
        successMessage.classList.remove('show');
        emailInput.value = '';
        hideError();
    }
    

    // Handle form submission
    subscribeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email || !isValidEmail(email)) {
            showError();
            return;
        }
        
        hideError();
        showSuccess(email);
    });
    
    // Handle input changes to hide error when user starts typing
    emailInput.addEventListener('input', function() {
        if (emailInput.classList.contains('error')) {
            hideError();
        }
    });
    
    // Handle dismiss button
    dismissBtn.addEventListener('click', function() {
        hideSuccess();
    });
    
    // Handle Enter key in email input
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            subscribeBtn.click();
        }
    });
});