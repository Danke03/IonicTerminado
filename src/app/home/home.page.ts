import { Component } from '@angular/core';
//import {ScreenOrientation}  from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public n: number;
  public showNumber: string | undefined;

  constructor(/*public screenOrientation: ScreenOrientation*/) {
    
    this.n = 0;
    this.showNumber ='00';
    //console.log(this.screenOrientation);
  }

  up(){
    this.n++; 
    if (this.n <10){
      this.showNumber = '0' + this.n;
    }else{
      this.showNumber = '' + this.n;
    }
  }
  down(){
    this.n--;
    if (this.n <10){
      this.showNumber = '0' + this.n;
    }else{
      this.showNumber = '' + this.n;
    }
  }

}
