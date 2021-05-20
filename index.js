let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n let b = 5;\n let c;\n-----------';

output = output 
+ '\na + b ' + "= "+(a+b) 
+ '\na - b ' + "= "+(a-b)
+ '\na * b ' + "= "+(a*b)
+ '\na / b ' + "= "+(a/b)
+ '\na % b ' + "= "+(a%b)
+ '\na += b ' + "= "+(a+=b)
+ '\na -= b ' + "= "+(a-=b)
+ '\na *= b ' + "= "+(a*=b)
+ '\na /= b ' + "= "+(a/=b)
+ '\na %= b ' + "= "+(a%=b)
+ '\na == b' + ": "+(a==b)
+ '\na != b' + ": "+(a!=b)
+ '\na > b' + ": "+(a>b)
+ '\na < b' + ": "+(a<b)
+ '\n!a && !c' + ": "+(!a && !c )
+ '\n!a || !c' + ": "+(!a || !c)

;


alert(output);


let first_name = 'Yi';
let last_name = 'Cheng';
let email = 'chen0850@algonquinlive.com';

output = "My name is "  + first_name + " " + last_name + ". " + "You can contact me at " + email + ".";
alert(output);



// Assignment Requirements
// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/


// complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";