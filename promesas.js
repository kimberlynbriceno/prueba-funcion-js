const taks =[{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    }]

// #callback

// const findtaksById = (id, callback) => {
//     const tak = taks.find(item => item.id === id);

//     if(tak){
//         callback(null , tak)
//     }
//     else{

//         callback("no se encontro este id " + id);
//     }
     
// };

// findtaksById(7, (err, tak) => {
//     if(err){
//         return console.log(err)
//     }
//          console.log(tak)
// })

// #promise

// const findtaksById = (id, callback) => {
//     const tak = taks.find(item => item.id === id);

//     return new Promise((positive , reject) => {
//       setTimeout(() => {
//         if(tak){
//           positive(tak)
//       }
//       else{
//           reject("no se encontro id " + id)
//       }
//       }, 6000)
//     })

// }

// findtaksById(2)
//     .then(tak => console.log(tak))
//     .catch((err) => console.log(err))
// #async await

const findtaksById = (id, callback) => {
      const tak = taks.find(item => item.id === id);
  
      return new Promise((positive , reject) => {
        setTimeout(() => {
          if(tak){
            positive(tak)
        }
        else{
            reject("no se encontro id " + id)
        }
        }, 6000)
      })
    }
const find = async (id) => {
    const tak = await findtaksById(id)
    console.log(tak)
  }
find(1);

console.log("final del codigo")