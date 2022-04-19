//async / await

//async function nameFunction(...){ }


async function nova(){}

//arrow
const miPerro =  async () => { }


async function someFunction() {
    return true;
  }
//async nos cambia de un funcion simple a una promesa

/**
 * {
 *  multilinea
 *  return algoQueRegresar
 * }
 * 
 * ()=> AlgoRegresar
 */
 console.log( someError() )
someFunction()
.then(result=> console.log("tengo resultado?",result) )
.catch(err => console.log("error:", err))


const directions = [
    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
  ];
   
   
  function obtainDirections(step) {
    return new Promise ( (resolve, reject) => {
      // setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      // }, 2000); 
      
    })
  }

  function obtainDirections2(step) {
    return new Promise ( (resolve, reject) => {
       setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
       }, 4000); 
      
    })
  }

  async function getCoffee(){
        try{
            await obtainDirections(0)
            await obtainDirections2(1)
            await obtainDirections(6)
            await obtainDirections(3)
        }catch(error){
            console.log("error:",error)
        }
  }

  getCoffee()


  function someError(){
      try{
          //... es todo lo que esta corriendo bien 
          let a=1,b=2
            dylan
          return a + b;
          //try va todo nuestro bloque de codigo
      }catch(error){
          console.log("el error:",error)
         
          //realizamos otro bloque por si sale error
      }
  }


  //Fetch

  fetch("https://rickandmortyapi.com/api/character")
  .then(response => {
      console.log("primer response",response)
      return response.json()
  })
  .then(jsonResponse => {
      console.log("JsonResponse",jsonResponse)
  })
  .catch(error=>console.log("el error del fetch",error) )


  async function getCharacter(){
      try{
        const response =  await  fetch("https://rickandmortyapi.com/api/character")
        const jsonReponse = await response.json()

        console.log("mi Json:",jsonReponse)

      }catch(error){
          console.log("getCharacher Error",error.response)
      }
  }

  getCharacter()

// diff json vs obj
  let obj = {
      name:"dylan",
      age:29,
  }

  let jsonNew = {
      "name":"Dylan",
      "age":29,
      "foods":{
          "name":"nova",
          "perro":"gato"
      }
  }

 