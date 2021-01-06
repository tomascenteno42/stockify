import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  content: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scan() {
    console.log("SCANNING RIGHT NOWWWW......")
    this.barcodeScanner.scan().then((data) => {
      console.log(data);
      this.content = data;
    }, (error) => {

      console.error(error);
      this.content = error;
    })
  }

}
