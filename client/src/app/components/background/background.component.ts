import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],

  animations: [
    trigger('blobAnimation1', [
      state('initial', style({ opacity: 0.6, transform: 'translateX(-50px) translateY(-40px) scale(1.1) rotate(0deg)' })),
      state('moved', style({ opacity: 0.9, transform: 'translateX(50px) translateY(40px) scale(1.4) rotate(30deg)' })),
      transition('initial <=> moved', animate('5000ms ease-in-out'))
    ]),
    trigger('blobAnimation2', [
      state('initial', style({ opacity: 0.6, transform: 'translateX(30px) translateY(20px) scale(1.3) rotate(0deg)' })),
      state('moved', style({ opacity: 0.9, transform: 'translateX(-30px) translateY(-50px) scale(1.5) rotate(-25deg)' })),
      transition('initial <=> moved', animate('5000ms ease-in-out'))
    ]),
    trigger('blobAnimation3', [
      state('initial', style({ opacity: 0.6, transform: 'translateX(40px) translateY(-30px) scale(1.38) rotate(0deg)' })),
      state('moved', style({ opacity: 0.9, transform: 'translateX(-40px) translateY(30px) scale(1.48) rotate(20deg)' })),
      transition('initial <=> moved', animate('5000ms ease-in-out'))
    ])
  ]
})

export class BackgroundComponent implements OnInit {
  blobState1 = 'initial';
  blobState2 = 'initial';
  blobState3 = 'initial';

  ngOnInit(): void {
      this.animateBlobs();
  }

  animateBlobs() {
    setInterval(() => {
      this.blobState1 = this.blobState1 === 'initial' ? 'moved' : 'initial';
    }, 7000);

    setTimeout(() => {
      setInterval(() => {
        this.blobState2 = this.blobState2 === 'initial' ? 'moved' : 'initial';
      }, 7000);
    }, 1500);

    setTimeout(() => {
      setInterval(() => {
        this.blobState3 = this.blobState3 === 'initial' ? 'moved' : 'initial';
      }, 7000);
    }, 3000);
  }
}

