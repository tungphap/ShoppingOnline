import { Component, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingOnline';



  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.createSrcipt('../assets/js/jquery-3.2.1.min.js');
    this.createSrcipt('../assets/js/popper.js');
    this.createSrcipt('../assets/js/bootstrap.min.js');
    this.createSrcipt('../assets/js/stellar.js');
    this.createSrcipt('../assets/vendors/lightbox/simpleLightbox.min.js');
    this.createSrcipt('../assets/vendors/nice-select/js/jquery.nice-select.min.js');
    this.createSrcipt('../assets/vendors/isotope/imagesloaded.pkgd.min.js');
    this.createSrcipt('../assets/vendors/isotope/isotope-min.js');
    this.createSrcipt('../assets/vendors/owl-carousel/owl.carousel.min.js');
    this.createSrcipt('../assets/js/jquery.ajaxchimp.min.js');
    this.createSrcipt('../assets/js/mail-script.js');
    this.createSrcipt('../assets/vendors/jquery-ui/jquery-ui.js');
    this.createSrcipt('../assets/vendors/counter-up/jquery.waypoints.min.js');
    this.createSrcipt('../assets/vendors/counter-up/jquery.counterup.js');
    this.createSrcipt('../assets/js/theme.js');
  }

  createSrcipt(src: string) {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.elementRef.nativeElement.appendChild(script);
  }
}
