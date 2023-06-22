
import Swal from "sweetalert2";

export const savedUser = user =>{
   
    const currentUser = {
        name: user.displayName,
        email: user.email,
        image: user.PhotoUrl
    }
    fetch(" https://sports-camp-server-eta.vercel.app/users", {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {  
      
        if(data.insertedId){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User create succesfully',
            showConfirmButton: false,
            timer: 1500
          })
         
        }
    });
}