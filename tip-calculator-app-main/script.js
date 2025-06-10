document.addEventListener('DOMContentLoaded', function(){
    const peopleInput = document.querySelector('.nP')
    const errorMessage = document.querySelector('span')

    // Show error message
    function showError(){
        errorMessage.classList.add('error-message')
    }

    // Hide error message
    function hideError(){
        errorMessage.classList.remove('error-message')
    }

    peopleInput.addEventListener('input', function (e) {
        e.preventDefault()
       let value = peopleInput.value.trim()
        if ( value.length > 0 && Number(value) === 0) {

            showError()
            return
        }

        hideError()
    })


})