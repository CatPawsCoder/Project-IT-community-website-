  const forms = document.querySelectorAll('form');

  // loop through each form and add form validation
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // get all the input fields in the form
      const inputs = form.querySelectorAll('input');

      // check if all required fields are filled out and input data is in the correct format
      let valid = true;
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          valid = false;
          alert(`${input.name} is required.`);
        }
        if (input.type === 'email' && !isValidEmail(input.value)) {
          valid = false;
          alert('Please enter a valid email address.');
        }
        if (input.type === 'password' && !isValidPassword(input.value)) {
          valid = false;
          alert('Please enter a strong password.');
        }
      });

      // submit the form if all validation checks pass
      if (valid) {
        form.submit();
      }
    });
  });

  // function to check if email address is valid
  function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  // function to check if password is strong
  function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  }