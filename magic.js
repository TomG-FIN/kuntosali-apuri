// Current database of weights
let painot = {

    penkki: { 
        id: 1,
        currentWeight: 57.50,
        unit: "kg",
        htmlClassName: "penkkipunnerrus",
   },

    talja:  { 
        id: 2,
        currentWeight: 40.00,
        unit: "kg", 
        htmlClassName: "ylätalja",
   }
}





function modifyWeight(w){
    adjust_value_from_button = parseFloat(w.dataset.weight); // Store weight amount from data-weight custom attribute in HTML5
    let dataname =  w.parentNode.parentElement.classList[0] // "penkkipunnerrus" traversal aka get class name

    tehtäväkohtainen_lista = searchValue(painot, dataname) // Returns basically object list under "paino"

    painot[tehtäväkohtainen_lista].currentWeight += adjust_value_from_button; 
    document.getElementsByClassName(painot[tehtäväkohtainen_lista].htmlClassName+" paino")[0].innerHTML = painot[tehtäväkohtainen_lista].currentWeight + painot[tehtäväkohtainen_lista].unit;
    localStorage.setItem('painot_ls', JSON.stringify(painot)); // Save to local storage
    return;
}

function getLocalStorateWeights() {
    for (const laite in painot) {
        console.log("laite: " +laite); // laite, talja
        const laiteObj = painot[laite];
        console.log("laiteObj: "+laiteObj);
        for (const muuttuja_arvo in laiteObj) { // itse key/value
            console.log("laiteObj[muuttuja_arvo]: "+laiteObj[muuttuja_arvo]);

    }
  }
};

function searchValue(obj, targetValue) {
    for (const key in obj) {
      if (obj[key] === targetValue) {
        // If the current key's value matches the target value, return the parent object
        return obj;
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        // If the current key's value is an object, recursively search within that object
        const result = searchValue(obj[key], targetValue);
        if (result) {
          return key;
        }
      }
    }
    // If the target value is not found in the current object, return null
    return null;
}

document.addEventListener('readystatechange', event => { 

  // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
  if (event.target.readyState === "complete") {

    if (localStorage.getItem("painot_ls") === null) { // If no local storage cache exists
      localStorage.setItem('painot_ls', JSON.stringify(painot));
     }

     else { // If cache exists, download the file
         // Retrieve stored weights
         painot = JSON.parse(window.localStorage.getItem("painot_ls"));
         console.log(painot);
     };

     for (const key in painot){

      document.getElementsByClassName(painot[key].htmlClassName+" paino")[0].innerHTML = painot[key].currentWeight + painot[key].unit;
     
    }






  }
});