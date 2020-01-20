import { LogonRequestInterface } from './../interfaces/logon-request-interface';
import { LogonService } from './../services/logon.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-logon-page',
  templateUrl: './logon-page.page.html',
  styleUrls: ['./logon-page.page.scss'],
})

export class LogonPagePage implements OnInit {
  regions = {region:[]};
  loaderToShow: any;
  logonData: LogonRequestInterface;
  //loginForm: FormGroup;

  constructor(
    public loadingController: LoadingController,
    public logonSrvc: LogonService/*,
    public formBuilder: FormBuilder*/
  ) { 
    this.regions.region.push({id:8, name:'Deutschland'});
  }

  ngOnInit() {
    /*this.loginForm  = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      region: ['', Validators.required]
    });*/
  }

  /*get formControls() {
    return this.loginForm.controls;
  }*/

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Anmeldung läuft...'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });

    this.hideLoader();
  }
 
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }

  doLogon() {
    this.logonData = {
      srpUsername: 'UName',
      srpPassword: 'UPass',
      srpRegion: 8
    };
    /*if(this.loginForm.invalid) {
      return;
    }*/

    this.showLoader();

    /*this.logonSrvc.doLogon(this.logonData).subscribe((res) => {
      console.log("Logon Response", res);
      this.hideLoader();
    });*/
  }
}
