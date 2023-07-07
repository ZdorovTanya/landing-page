function validation(){
    console.log("ddd")
    let form = document.querySelector('.form-valid');
    form.addEventListener('submit', function(event) {
      let controls = this.querySelectorAll('.form-control');
      let isValid = true;
      controls.forEach(control => {
        control.classList.remove('invalid-control');
        if (control.classList.contains('required') && !control.value) {
          control.classList.add('invalid-control');
          isValid = false;
        }
      });
      
      if (!isValid) {
        event.preventDefault();
      }
    });
  }

  export default validation;