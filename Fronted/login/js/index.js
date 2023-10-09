document.getElementById("SignIn").addEventListener("click", (event) => {
  event.preventDefault();

  const { email, password } = event.target.form.elements;
  const emailValue = email.value;
  const passwordValue = password.value;

  //console.log(emailValue, passwordValue);



  const correctEmail = "samuelalejomonsalve@gmail.com";
  const correctPassword = "Lukas2012Jake2021";


  if (emailValue === correctEmail && passwordValue === correctPassword) {
    window.location.href = "http://localhost:5173/";
  }
});









/*
   /* try {
      const response = await fetch("http://locahost:3000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
      });
  
      if (response.ok) {
        const data = await response.json();
        
        window.location.href = "princialpl.html";
      } else {
        const errorData = await response.json();
        if (errorData.error === "User Not Found - Usuario incorrecto") {
          // Usuario no encontrado
          console.error("Usuario no encontrado.");
          // Puedes mostrar un mensaje al usuario si lo deseas
        } else if (errorData.error === "Incorrect Password - Contraseña incorrecta") {
          // Contraseña incorrecta
          console.error("Contraseña incorrecta.");
          // Puedes mostrar un mensaje al usuario si lo deseas
        } else {
          // Otro tipo de error
          console.error("Error en el inicio de sesión:", errorData.error);
          // Puedes mostrar un mensaje al usuario si lo deseas
        }
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes mostrar un mensaje de error genérico al usuario si lo deseas
    }
  };

//export const SingUp=()=>{
  
//}

*/







document.getElementById("SignUp").addEventListener("click", (event) => {
  event.preventDefault();
  const { name, lastName, age, address, phone, user, email, password } = event.target.form.elements;

  const nameValue = name.value;
  const lastNameValue = lastName.value;
  const ageValue = age.value;
  const addressValue = address.value;
  const phoneValue = phone.value;
  const userValue = user.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  //console.log(nameValue, lastNameValue, ageValue, addressValue, phoneValue, userValue, emailValue, passwordValue);


});