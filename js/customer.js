class Customer {
    constructor(name, course, author) {
        this.name = name;
        this.course = course;
        this.author = author;
    }
    reateCourse = (name, course, author) => {
        const customerDiv = document.querySelector('.customer-list');
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
    randomNum = () => {
        const random = Math.floor(Math.random() * 5) + 1;
        return random;
    }
    loadingAndFeeback = () => {
        const feedBack = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');
        
        feedBack.classList.add('showItem', 'alert', 'alert-success');
        loading.classList.add('showItem');
    }
}