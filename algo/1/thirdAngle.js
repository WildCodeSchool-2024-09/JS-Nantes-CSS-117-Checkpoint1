/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

let firstAngle = 90;
let secondAngle = 30;

function thirdAngle(firstAngle, secondAngle) {
  let third = 180 - (firstAngle + secondAngle);
  return third;
}

module.exports = thirdAngle;
