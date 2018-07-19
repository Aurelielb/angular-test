import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDonate]'
})
export class DonateDirective {

  constructor() { }

  @Input('appProjectid') appProjectid: number;
  @Input('appUserid') appUserid: number;

  @HostListener ('click') onClick() {
    // do something
    console.log('clicked');
    this._open()
  }

  private _open () {
    // donate
    console.log('project:', this.appProjectid, 'user:', this.appUserid);
  }

}
