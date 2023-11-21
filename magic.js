
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

if (localStorage.getItem("painot_ls") === null) {
 // De nada, do nothing
 localStorage.setItem('painot_ls', JSON.stringify(painot));
}
else {
    // Retrieve stored weights
    let painot_ls = JSON.parse(window.localStorage.getItem("painot_ls"));
    console.log(painot_ls);

};



function modifyWeight(w, adjust_value_from_button){
    w.currentWeight += adjust_value_from_button;
    document.getElementsByClassName(w.htmlClassName+" paino")[0].innerHTML = w.currentWeight + w.unit;
    
    getLocalStorateWeights();
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
