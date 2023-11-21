





function modifyWeight(w, adjust_value_from_button){
    w.currentWeight += adjust_value_from_button;
    document.getElementsByClassName(w.htmlClassName+" paino")[0].innerHTML = w.currentWeight + w.unit;
    return;
}

let painot = {

    penkki: { 
        id: 1,
        currentWeight: 57.50,
        unit: "kg",
        htmlClassName: "penkkipunnerrus",
        adjustWeight:modifyWeight
   },

    talja:  { 
        id: 2,
        currentWeight: 40.00,
        unit: "kg", 
        htmlClassName: "ylätalja",
        adjustedWeight:modifyWeight
   }
}


// window.onload = function(){
//         
//
// document.getElementsByClassName(painot.penkki.htmlClassName+" paino")[0].innerHTML = painot.penkki.currentWeight;
//     
// }
