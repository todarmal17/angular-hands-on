import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookDetails } from 'src/app/shared/models/models';

@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styleUrls: ['./book-details-form.component.scss']
})
export class BookDetailsFormComponent implements OnInit {

  public bookDetailsForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BookDetailsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookDetails,
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();

    if (this.data) {
      this.bookDetailsForm.setValue(this.data);
    }

  }

  /**
   * Initialize the form.
   */
  protected initForm(): void {
    this.bookDetailsForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      excerpt: [''],
      pageCount: [0, [Validators.required]]
    });
  }

  public addBook(): void {
    const bookDetails: BookDetails = {
      title: this.bookDetailsForm.get('title').value,
      description: this.bookDetailsForm.get('description').value,
      date: this.bookDetailsForm.get('date').value,
      excerpt: this.bookDetailsForm.get('excerpt').value,
      pageCount: this.bookDetailsForm.get('pageCount').value,
    };

    this.dialogRef.close(bookDetails);
  }

  public closeForm(): void {
    this.dialogRef.close(null);
  }

}
