import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('serverElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
  }

}
