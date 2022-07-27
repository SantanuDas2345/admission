import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddFeeComponent } from './add-fee/add-fee.component';

@Component({
  selector: 'app-fee-setup',
  templateUrl: './fee-setup.component.html',
  styleUrls: ['./fee-setup.component.scss']
})
export class FeeSetupComponent implements OnInit {

  fee: any = [
    {
      std: 1,
      admission: 10000,
      tuition:5000
    },
    {
      std: 2,
      admission: 10000,
      tuition:6000
    },
    {
      std: 3,
      admission: 10000,
      tuition:6000
    },
    {
      std: 4,
      admission: 10000,
      tuition:8000
    },
    {
      std: 5,
      admission: 10000,
      tuition:8000
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  deleteFee(std:any) {
    console.log(std);
      this.fee = this.fee.filter((fe:any) => fe.std != std );
  }
  addclass() {
    const dia = this.dialog.open(AddFeeComponent, {
      width: '250px'
    });
    dia.afterClosed().subscribe((next: any) => {
      if(next) {
       this.fee.push(next);
      }
    })
  }
}
