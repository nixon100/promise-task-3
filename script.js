const api = "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json"

fetch(api)
.then((res)=>res.json())
.then((data)=>{
    console.log(data)

    card(data.Results);
}).catch((error) => {
  console.log("Error:", error);
});

function card (data){
    

  data.map((element)=>{
   
        document.body.innerHTML+= 
        


        `<div id="container">
        <div class="card" id="hulk">
          <!-- <div class="card-image">
            <img src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png"/>
          </div> -->
          
          <div class="card-text">
            <h2>${element.Name}</h2>
            <p>${element.VehicleType}<br>country : ${element.Country}</p>
            <div>
            <div>
              <span>${element.CreatedOn}</span>
              <span></span>

              </div>
             
              
            <div><span>${element.Id}</span><span>ID</span></div>
          </div>
            </div>
        </div>
       
        <div class="card" id="deadpool">
          <div class="card-text">
            <div><span>${element.WMI}</span><span></span></div>
            <div>
              <span>29</span>
              <span>JAN</span>
              <span>${element.Id}</span>
            </div>
          </div>
          <div class="card-image">
            <p>&copy; 1979  <br>${element.Name}</p>
            <!-- <img src="https://www.pngkey.com/png/full/82-824923_deadpool-deadpool-marvel-comics.png"/> -->
          </div>
        </div>
        </div>
        
        
        
        `
      })


    
  
}