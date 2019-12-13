import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
  @ViewChild('heading', {
    static: true
  }) header: ElementRef;
  @ContentChild('contentparagraph',{static:true}) paragraph:ElementRef
  @Input() name: string
  constructor() {
    console.log('constructor worked')
  }

  ngOnInit() {
    console.log('ngOninit worked')
    console.log('textcontent:'+ this.header.nativeElement.Textcontent)
    console.log('textcontent of paragraph:',this.paragraph.nativeElement.Textcontent)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ng on change wokrd")
    console.log(changes)
  }
  ngDoCheck() {
    console.log("ngdocheck called")
  }
  ngAfterContentInit() {
    console.log("ng afer content init")
    console.log('textcontent of paragraph:',this.paragraph.nativeElement.Textcontent)
   
  }
  ngAfterAiewInit(){
    console.log('textcontent:'+  this.header.nativeElement.Textcontent)
  }

  



}
