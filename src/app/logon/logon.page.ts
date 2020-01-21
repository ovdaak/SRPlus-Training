import { UserLogonRequestInterface } from '../interfaces/login-interface';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RegionsService } from '../services/regions.service';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon-page',
  templateUrl: './logon.page.html',
  styleUrls: ['./logon.page.scss'],
})

export class LogonPage {
  public regions = {regions: []};
  loaderToShow: any;
  logonData: UserLogonRequestInterface;
  public loginForm: FormGroup;
  public regionSelected = 0;

  constructor(
    public loadingController: LoadingController,
    public logonSrvc: LoginService,
    public regionSrvc: RegionsService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.regionSrvc.getRegions().subscribe((resp) => {
      this.regions  = resp;
    });

    this.loginForm  = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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

  optionsFn(id) {
    console.log(id);
  }

  doLogon() {
    console.log(this.regionSelected);
    this.logonData = {
      srp_username: this.loginForm.controls.username.value,
      srp_password: this.loginForm.controls.password.value,
      srp_region: this.regionSelected
    };

    /* if (this.loginForm.invalid) {
      return;
    } */

    this.showLoader();
    console.log(this.loginForm.controls);
    console.log(this.logonData);
    this.logonSrvc.doLogon(this.logonData).subscribe((res) => {
      console.log('Logon Response', res);
      this.hideLoader();

      if (res.status !== 'OK') {
        this.logonData.srp_username	= '';
        this.logonData.srp_password	= '';
        this.logonData.srp_region	= 0;

        alert(res.errText);
      } else {
        localStorage.setItem('ACCESS_TOKEN', res.sessionId);
        this.router.navigateByUrl('home');
      }
    });
  }
}
