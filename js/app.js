const form = document.querySelector('form');
const feedBack = form.querySelector('.feedback');
const cusName = form.querySelector('#name');
const cusCourse = form.querySelector('#course');
const cusAuthor = form.querySelector('#author');
const submitBtn = form.querySelector('.submitBtn');
const customerDiv = document.querySelector('.customer-list');
const loading = document.querySelector('.loading');
const inputs = document.querySelectorAll('input');

console.log(name, course, author, submitBtn, customerDiv);

const createCourse = (name, course, author) => {
    const random = randomNum();
    const customer = document.createElement('div');
    customer.classList.add('col-11', 'mx-auto', 'col-md-6', 'col-lg-4', 'my-3');
    customer.innerHTML = `<div class="card text-left">
    <img src="./img/cust-${random}.jpg" class="card-img-top" alt="">
    <div class="card-body">
     <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name"> ${name}</span></h6>
     <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
     ${course}
      </span></h6>
     <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${author}</span></h6>
    </div>
   </div>`;
   customerDiv.appendChild(customer);
}
//Random Number for img
const randomNum = () => {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;
}
//Feedback display func.
const loadingAndFeeback = () => {
    feedBack.classList.add('showItem', 'alert', 'alert-success');
    loading.classList.add('showItem');
}

inputs.forEach((input) => {
    
    input.addEventListener('focusout', () => {
        if(input.value === ''){
            input.classList.add('fail');
        } else { 
            input.classList.remove('fail');
            input.classList.add('complete');
            const complete = document.querySelectorAll('.complete');
            if(complete.length > 2){
                submitBtn.disabled = false;
            }
        }
    })
   
})
 

//Window load event
const disableSubmitBtn = () => {
    submitBtn.disabled = true;
}
disableSubmitBtn();

//Submit form event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = cusName.value;
    const course = cusCourse.value;
    const author = cusAuthor.value;
    setTimeout( () => {
        feedBack.classList.remove('showItem');
        loading.classList.remove('showItem');
        createCourse(name, course, author);
    }, 3000)
    loadingAndFeeback();
    cusName.value = '';
    cusCourse.value = '';
    cusAuthor.value = '';
    disableSubmitBtn();
    const complete = document.querySelectorAll('.complete');
    complete.forEach(reset => {
        reset.classList.remove('complete');
    })
    console.log(complete)
})