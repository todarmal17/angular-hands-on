import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  template: ``
})
export class BaseComponentComponent implements OnInit {

  constructor(
    protected snackBar?: MatSnackBar
  ) { }

  ngOnInit() {
  }

  /**
   * Successfull copy of UserKey will open this Snackbar.
   */
  protected openSnackBar(message: string, duration: number, confirmLabel?: string): void {
    this.snackBar.open(
      message,
      confirmLabel,
      {
        duration: duration
      }
    );
  }

}
