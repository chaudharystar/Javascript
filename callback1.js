//Callback function

// function show() {
//     console.log("i am here callback function ");
// }
// function dispaly(callback) {
//     callback();
// }
// dispaly(show);

//Promise function

// var promise = new Promise(function(resolve,reject){
//     // resolve('resolving ho gaya');
//     reject('error hai beta');
// });
//  promise.then(function(msg){
//      console.log(msg);
    
//  }).catch(function(err){
//      console.log(err);
//  });

 //promise using callback

 function myPromise(callback) {
     this.status = 'Pending';
     this.result = undefined;

     const resolved = (message) => {
         if(this.status != 'Pending') 
             return;
       this.status ='Fulfil';
       this.result = message;
}

const reject = (message) => {
    if(this.status != 'Pending') 
        return;
  this.status ='Reject';
  this.result = message;
}

callback(resolved,reject);
}
 function check(resolved,reject) {
     resolved('Resolving');
    //  reject('rejecting');
 }

 let newPromise = new myPromise(check);
 console.log(newPromise);


