class Customer {
    constructor() {
  
    }
//Function that creates courses
    createCourse = (name, course, author) => {
        const feedBack = form.querySelector('.feedback');
        const customerDiv = document.querySelector('.customer-list');

        const random = this.randomNum();
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
//Random number func for the random images
    randomNum = () => {
        const random = Math.floor(Math.random() * 5) + 1;
        return random;
    }
//The func that displays the feedback msg and the loading icon
    loadingAndFeeback = () => {
        const feedBack = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedBack.classList.add('showItem', 'alert', 'alert-success');
        loading.classList.add('showItem');
    }
//This func resets them
    loadingAndFeedbackReset = () => {
        const feedBack = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedBack.classList.remove('showItem');
        loading.classList.remove('showItem');
    }
 //This funch controls the inputs border glow
    inputsGlow = () => {
        const inputs = document.querySelectorAll('input');

        inputs.forEach(input => {
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
    }
//This resets them
    resetInputsGlow = () => {
        const complete = document.querySelectorAll('.complete');
        complete.forEach(reset => {
        reset.classList.remove('complete');
    })
        console.log(complete)
    }
//This func clears the inputs and disable the submit button 
    resetSubmitAndInputs = () => {
        const submitBtn = document.querySelector('.submitBtn');
        const cusName = document.querySelector('#name');
        const cusCourse = document.querySelector('#course');
        const cusAuthor = document.querySelector('#author');
        
        cusName.value = '';
        cusCourse.value = '';
        cusAuthor.value = '';
        submitBtn.disabled = true;
    }
    
}