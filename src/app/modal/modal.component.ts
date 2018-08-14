import { Component, Input, Output, OnInit } from "../../../node_modules/@angular/core";
import { EventEmitter } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({transform: 'scale3d(.3, .3, .3)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'scale3d(.0, .0, .0)'}))
            ])
        ])
    ]
  })
export class ModalComponent implements OnInit{
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

   private close() {
       this.visible = false;
       this.visibleChange.emit(this.visible);
   }
}