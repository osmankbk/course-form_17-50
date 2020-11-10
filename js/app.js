const form = document.querySelector('form');
const cusName = form.querySelector('#name');
const cusCourse = form.querySelector('#course');
const cusAuthor = form.querySelector('#author');
const submitBtn = form.querySelector('.submitBtn');
let customer;

//Window load event
window.addEventListener('DOMContentLoaded', (e) => {
//Disabled submit button when page loads
    submitBtn.disabled = true;

    customer = new Customer();
    customer.inputsGlow();
})


//Submit form event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = cusName.value;
    const course = cusCourse.value;
    const author = cusAuthor.value;
    customer = new Customer();
    const patron = new Customer;
    setTimeout( () => {  
        customer.createCourse(name, course, author);
        patron.loadingAndFeedbackReset();
    }, 3000)
    customer.loadingAndFeeback();
    customer.resetInputsGlow();
    customer.resetSubmitAndInputs();
})