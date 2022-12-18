import { Injectable } from "@angular/core";


@Injectable()
export class Arr{

constructor(){}


   // arrStr:Array<string> = ['srt1','srt2','srt3','srt4','srt5','srt6','srt7','srt8']

   arrStr = [ {id: 1, name: 'srt1', price: 110, description: 'srt1 text description'},
   {id: 2, name: 'srt2', price: 120, description: 'srt2 text description'},
   {id: 3, name: 'srt3', price: 130, description: 'srt3 text description'}, 
   {id: 3, name: 'srt4', price: 140, description: 'srt4 text description'},
   {id: 3, name: 'srt5', price: 150, description: 'srt5 text description'},
   {id: 3, name: 'srt6', price: 160, description: 'srt6 text description'},
   {id: 3, name: 'srt7', price: 170, description: 'srt7 text description'},
   {id: 3, name: 'srt8', price: 180, description: 'srt8 text description'},
]; 

   showArr(){
      return this.arrStr
   }

   arrNumber:Array<number> = [15,624,34,2,6,7,853,324,64,23,7,1]

   showArrNum(){
      return this.arrNumber
   }
   
   toLess(){
      this.arrNumber.sort((a,b)=> b - a)
   }

   toMore(){
      this.arrNumber.sort((a,b)=> a - b)

   }
       max = Number.MIN_VALUE

   takeMaxNum(){
      this.arrNumber.forEach((item:number)=>{
         if(item > this.max){
            this.max = item
         }
      })
   console.log(this.max);

   }
   
}
