const cards = document.querySelector("#cardDinamica")

 const template = document.querySelector("#templateCard").content
 
 const loading = document.querySelector("#loadingId")


 document.addEventListener('DOMContenLoaded', () => {
        fetchData()
 })

 const fetchData = async () => {
    // console.log("nosequedice")
    try{
        loadingData(true)
    }
    catch(err){

    }
    finally{
        loadingData(false)
    }
 }

 const loadingData = (estado) => {

    if(estado){
        loading.classList.remove(d-none) 
    }
    else{
        loading.classList.add(d-none) 

    }
 }

