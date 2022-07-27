import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fee',
  templateUrl: './add-fee.component.html',
  styleUrls: ['./add-fee.component.scss']
})
export class AddFeeComponent implements OnInit {
  feeForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddFeeComponent>, public fb:FormBuilder) {
    this.feeForm = this.fb.group({
      std: [''],
      admission: [''],
      tuition: ['']
    });
  }

  ngOnInit(): void {
  }
  addClass() {
    this.dialogRef.close(this.feeForm.value);
  }

}
