/* function comparastr(str1,str2){
  str1= str1.toLowerCase();
  str2= str2.toLowerCase();
  //console.log (str1,str2);
  if (str1 == str2) {
    console.log ("Verdadero");
  }else{
    console.log ("falso");
  } 
  }
  comparastr ("Hola","hola") */

function checkTwoStringsSame(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkTwoStringsSame("String", "string"));
