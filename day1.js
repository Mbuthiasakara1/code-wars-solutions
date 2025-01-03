// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

// 1 Imperial Gallon = 4.54609188 litres
// 1 Mile = 1.609344 kilometres

//kpl=mpg * milestokilometres/gallonsto litres
function convert(mpg){
    if(typeof mpg !== 'number' || mpg <=0)
        return "invalid input ,Provide a positive number"

    const milestokms = 1.609344; 
    const gallonstolitres = 4.54609188;

    const kpl = (mpg * milestokms)/gallonstolitres
     return kpl.toFixed(2)
   
}
console.log(convert(10))