// const square = function (num) {
//     return num * num;
// }

// this is equivalent to above
// read it as number goes to number times number
// const square = num  => num * num;

// console.log(square(5));

// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false}
// ];

// // filter iterates over each object in the above
// // a predicate function determines whether the job should return
// // from the filter method
// // const activeJobs = jobs.filter(function(job) {return job.isActive });
// // filter the job where the job is active
// const activeJobs = jobs.filter(job => job.isActive);


const person = {
    talk() {
        const self = this;
        // set time out will execute the function after the 1000 millisecond delay
        // the callback function is not part of the object
        // this returns the window object
        // this arrow function will inherit 'this' in the way in which the code is defined 
        setTimeout(() => {
            console.log('this', this);
        }, 1000);
        
    }
};

person.talk();

// learning about callback functions

function doHomework(subject, callback) {
    console.log('doing my ' + subject + ' homework.');

    // after two seconds have passed call this function
    // we define a timeout
    setTimeout(function(){
        console.log('finished my ' + subject + ' homework.');
        callback()

    }, 2000);
}

function playOutside() {
    console.log('playing outside now');
}

doHomework('math', playOutside);

