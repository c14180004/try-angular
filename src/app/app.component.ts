import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  pangkat = 0;
  show = true;
  temphasil = "";
  temphasil2 = "";
  co = 1;
  co2 = 0;
  a;
  b;
  hasil = [];
  hapus(){
    document.getElementById("input1").innerText = "";
    document.getElementById("input2").innerText = "";
    this.a = null;
    this.b = null;
    this. pangkat = 0;
    this.hasil = [];
  }
  hitung(al,bl){
    this.a = al;
    this.b = bl;
    this.hasil = [];
    this.temphasil = "";
    this.pangkat = Math.pow(this.a,this.b);
    this.co2 = parseInt(this.b);
    this.co = 1;
    if(this.pangkat % 2 == 0){
      this.show = true;
      for(var i = 0;i<this.b;i++){
        this.temphasil = this.temphasil + "*";
      }
      this.hasil.push(this.temphasil);
      for(var i = parseInt(this.b);i<this.pangkat;i++){
        this.temphasil = this.temphasil + "*";
        this.hasil.push(this.temphasil);
      }
    }
    else{
      this.show = false;
      while(this.co<=parseInt(this.a) || this.co2>0){
        this.temphasil2 = ""
          if(this.co2>0){
          for(var j = 0;j<this.co2;j++){
            this.temphasil2 = this.temphasil2 + "*";
          }
        }
        this.co2 = this.co2 - 1;
          if(this.co<= parseInt(this.a)){
          for(var j = 0;j<this.co;j++){
            this.temphasil2 = this.temphasil2 + "O";
          }
        }
        this.co = this.co + 1;
        this.hasil.push(this.temphasil2);

      }

    }

  }

}
