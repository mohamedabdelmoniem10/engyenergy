let header = document.getElementsByClassName('header');

console.log(header)

for(i=0; i<header.length; i++) {
    header[i].innerHTML= `<div class="container">
     <div class="row">
         <div class="header__logo">
             <img src="./images/EngyEnergy_Logo.png" alt="Engy Energy">
         </div>
         <div class="header__booking">
             <form>
                 <select name="session" id="session">
                     <option value="SelectSession">Select Session</option>
                 </select>
             </form>
         </div>
         <div class="header__menu">
             <a class="header__menu--btn">
                 <i class="fas fa-bars"></i>
             </a>
         </div>
     </div>
     </div>`;
}
// header.innerHTML = `<div class="container">
// <div class="row">
//     <div class="header__logo">
//         <img src="./images/EngyEnergy_Logo.png" alt="Engy Energy">
//     </div>
//     <div class="header__booking">
//         <form>
//             <select name="session" id="session">
//                 <option value="SelectSession">Select Session</option>
//             </select>
//         </form>
//     </div>
//     <div class="header__menu">
//         <a class="header__menu--btn">
//             <i class="fas fa-bars"></i>
//         </a>
//     </div>
// </div>
// </div>`;