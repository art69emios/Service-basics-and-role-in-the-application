import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Arr } from '../shared/first-service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css'],
  providers: [Arr]
})
export class CompComponent implements OnInit{ 
  @ViewChild('inp')
  input: ElementRef | any

  @ViewChild('text')
  text: ElementRef | any

  constructor(private service:Arr, private cdRef: ChangeDetectorRef, private renderer:Renderer2){}


  inpValue:string | undefined | any
  arrayStr:Array<string> | any
  p:string | undefined 
  arrayNum:Array<number> | any
  maxNumber:number | any



  ngOnInit(): void {
    this.arrayStr = this.service.showArr()
    this.arrayNum = this.service.showArrNum()
  }



  takeValue(): void {
    this.inpValue = this.input.nativeElement.value

    for (let i = 0; i < this.arrayStr.length; i++) {
      const element = this.arrayStr[i];
      if(this.inpValue != ''){
        if(element.name.includes(this.inpValue)){
          this.p = this.inpValue
          this.p += ' ' + element.price + 'price ' + '  ' 
          this.p += '  description:' + element.description 
          this.text.nativeElement.style.backgroundColor = 'green'
          this.text.nativeElement.style.color = 'white'
          this.text.nativeElement.style.fontSize = '20px'
          console.log(this.p);
        }
        
      }else{
        this.p = 'not found'
        this.text.nativeElement.style.backgroundColor = 'red'
      }
    }
  }

  toLessFromService(){
    this.service.toLess()
  }
  toMoreFromService(){
    this.service.toMore()
  }

  maxNum(){
    this.service.takeMaxNum()
    this.maxNumber = this.service.max
  }

  namea: string  = "";

  onSearch() {
    this.arrayStr = this.service.showArr().filter(item => item.name.includes(this.namea));
    console.log(this.namea);
    
  }


  }
