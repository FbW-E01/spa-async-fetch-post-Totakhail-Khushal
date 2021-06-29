// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import "babel-polyfill";


// \/ All of your javascript should go here \/

// const form =document.querySelector("#submit-form")

// form.addEventListener("submit",async (e) =>{
//     e.preventDefault();
    
//     const user={
//         name:name.value,
//         email:email.value,
//         password:password.value,
//         message:message.value,
//         checkbox:checkbox.checked,
//     }
//     console.log(user)

//      await fetch("https://jsonplaceholder.typicode.com/users" ,{
//         method:"POST",
//         body:JSON.stringify(user)
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log(result)
//         alert("Thank you for submitting your detail, User Id:4")
        

//     }) 
//     .catch(e => console.warn("woops woops "))
// })


    // =====================================================

const form =document.querySelector("#submit-form")

 const getUser = async(user) => {
    try{
    const fetchData= await fetch("https://jsonplaceholder.typicode.com/users" ,{
        method:"POST",
        body:JSON.stringify(user)
    })
    alert("Thank you for submitting your detail, User Id:4")
    
        const changeToJson = await fetchData.json()
        return changeToJson;
        console.log(user);
        
    }catch{return "error"}
    }
 

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    const user={
        name:name.value,
        email:email.value,
        password:password.value,
        message:message.value,
        checkbox:checkbox.checked,
    }

    getUser(user)
    .then(response => console.log(response))
}).catch(console.log("Error 2"))
// console.log(user);

   
