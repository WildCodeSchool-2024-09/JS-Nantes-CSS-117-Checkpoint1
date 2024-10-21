/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  // Your code here !
  const c = a + b;
  const d = 180;
  return d - c;
}

console.log(thirdAngle(90, 20));

module.exports = thirdAngle;
