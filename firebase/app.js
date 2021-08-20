console.log(firebase);
const email = document.getElementById("email")
const password = document.getElementById("password")

// firebase.database().ref('form').on('child_added',function (data){
    
//     console.log(data.val().value)
// });

const send_data =()=>{
    let database = firebase.database().ref('form')
let key = database.push().key
// console.log(key);

let user_value = {
    email:email.value,
    password:password.value

};

database.child(key).set(user_value);
console.log(user_value);
};

const get_Data =()=>{
    firebase.database().ref('form').once('value', function(data){
        console.log(data.val())
    })
} ;
get_Data();

