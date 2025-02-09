import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { NgxEditorModule, Editor } from 'ngx-editor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdService } from '../services/add-ad.service';
import { Router } from '@angular/router';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-add-ad',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter()],

  templateUrl: './add-ad.component.html',
  styleUrl: './add-ad.component.scss'
})

export class AddAdComponent {


  leftOrRightArray: string[] = ['Left', 'Right'];
  readonly startEndDate = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });

  private addAd = inject(AddAdService);
  private router = inject(Router);

  name = new FormControl('');
  imgUrl = new FormControl('');
  active = new FormControl('');
  redirectUrl = new FormControl('');
  leftOrRight = new FormControl('');
  mobileUrl = new FormControl('');


  finalAdProps = new FormGroup({
    name: this.name,
    imgUrl: this.imgUrl,
    active: this.active,
    startDate: new FormControl(this.startEndDate.value.start),
    endDate: new FormControl(this.startEndDate.value.end),
    redirectUrl: this.redirectUrl,
    leftOrRight : this.leftOrRight,
    mobileUrl: this.mobileUrl
  })

  addAdFunction(){
      if(this.finalAdProps.valid){
        this.addAd.addAd(this.finalAdProps.value).subscribe({
          next: () => {
            console.log("Ad added successfully");
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.log("Error while adding ad: " , err);
            
          }
        })
      }
  }
}
