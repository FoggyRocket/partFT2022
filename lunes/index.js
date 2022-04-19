function funct1() {
  console.log("Hola");
}

function funct2() {
  console.log("Adios!");
  //return undefined
}

funct1();
funct2();

//Hola
//adios

funct2();
funct1();

//adios!
//hola

/**
 *                // ()=>{}
 * function hello(callback){
 *      callback()
 * }
 */

//formar de ejecutar
// funct2 ==> [function ]
//funct1(funct2) <== good
//funct1( funct2() ) <=== bad

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

function getDirections(step, callback, errorCallback) {
  // setTimeout(() => {
  console.log(directions[step]);

  if (!directions[step]) errorCallback("Instructions not found.");
  else callback();
  // }, 2000);
}

//ejemplo de funciones anonimas y arrow
/*function unNombreSuperPerron(){
      console.log("unNombreSuperPerron")
  }
  unNombreSuperPerron()*/

const gato = function unNombreSuperPerron() {
  console.log("unNombreSuperPerron");
};
//ejecutar una funcion dento de una variable
//gato.unNombreSuperPerron()

const perro = function () {
  console.log("perro");
};
/**
 * perro = () =>{
 *  return "perro"
 * }
 */
console.log("Gato??", typeof gato, gato());

/*
 ( function (){

  })()

 ( ()=>{

  })()
*/

const pato = () => {
    console.log("PAto")
}

pato()

getDirections(
  0,
  () => {
    getDirections(
      1,
      () => {
        getDirections(
          2,
          () => {
            getDirections(
              3,
              () => {
                  console.log("Llegamos")
              },
              (error) => {
                console.log(error)
              }
            );
          },
          () => {}
        );
      },
      () => {}
    );
  },
  (error) => {
    console.log("que paso", error);
  }
);

function obtainDirections(step){
    return new Promise((resolve,reject)=>{

        console.log(directions[step]);
        if(!directions[step]) reject("Ya te perdiste")
        else resolve()

    })
    //return new Promise(function (){})
}

//then catch
obtainDirections(0)
.then(()=>{ obtainDirections(1)})
.then(()=>{ obtainDirections(2)})
.then(()=>{ obtainDirections(3)})
.then(()=>{ obtainDirections(9)})
.catch((err)=>{ console.log(err)});



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("foo"), 1000);
  });
   
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(1337), 2000);
  });
   
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve( { name: "Bob" } ), 4000);
  });
  
  /*
   Promise.all( [p1,p2,p3] )
    return [p1Solucion,p2Solucion,p3Solucion]

     Promise.all( [p3,p1,p2] )
         return [p3Solucion,p1Solucion,p2Solucion]

  */
  Promise.all( [p1,p2,p3] )
        // [...]
  .then(values => console.log("values:",values))
  .catch(error=> console.log("AllError:",error))

  let twit, fb;


  //2s
 // getValueTweet().then(value=> twit=value).catch(error=>console.log(error))

//10s
 //getValueFb().then(value=> fb=value).catch(error=>console.log(error))
 Promise.all( [getValueTweet,getValueFb] )
//  .then(values => {
//      twit = values[0]
//      fb =values[1]
//  })
// function todoChido(){
//      if(twit === "Dylan"){
//             //fb 
//         if(fb.perro){

//         }
//      }
// }