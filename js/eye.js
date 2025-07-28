 function togglePassword() {
    const input = document.getElementById('password');
    const toggle = document.querySelector('.toggle-password');
    const eyeHidden = toggle.querySelector('.eye-hidden');
    const eyeVisible = toggle.querySelector('.eye-visible');

    const isPasswordHidden = input.type === 'password';

    input.type = isPasswordHidden ? 'text' : 'password';

    
    if (isPasswordHidden) {
      eyeHidden.classList.remove('active');
      eyeVisible.classList.add('active');
    } else {
      eyeVisible.classList.remove('active');
      eyeHidden.classList.add('active');
    }

    toggle.setAttribute('aria-label', isPasswordHidden ? 'Hide password' : 'Show password');
  }