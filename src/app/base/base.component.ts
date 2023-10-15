import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

constructor(private spinner: NgxSpinnerService) {}

  showSpinner(spinnerNameTye:SpinnerType){
    this.spinner.show(spinnerNameTye);

    setTimeout(() => {
      this.hideSpinner(spinnerNameTye)}, 3000);

  }

  hideSpinner(spinnerNameTye:SpinnerType){
    this.spinner.hide(spinnerNameTye);
  }

}



export enum SpinnerType{
  BallAtom="s1",
  BallScaleMultiple="s2",
  BallSpinClockwiseFadeRotating="s3"
}

