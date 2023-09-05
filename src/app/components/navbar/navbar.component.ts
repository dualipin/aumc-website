import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }

 
   menu_icon_variable: boolean = false;
  menuVariable: boolean = false;
//   ponernav(){
//    const input = document.getElementById('nav-links')!;
//    if (input.style.height=='0'){
//     input.style.height='auto';
//     console.log("hola")
//    }
//   else if (input.style.height=='auto')
// {
//     console.log('x is less than y.'); //This will be executed
// }
//   }
   quitarnav(){

  var element = <HTMLInputElement> document.getElementById("nav-check");
var isChecked = element.checked;
  if (isChecked==true){
    element.checked==false;
    console.log("changed to false")
  }else if(isChecked==false){
    console.log("changed to true")
    element.checked==true;
  }
}
quitarnav2(){
  var element = <HTMLInputElement> document.getElementById("nav-check");
  element.checked=false;
}
}
//   }
// }
