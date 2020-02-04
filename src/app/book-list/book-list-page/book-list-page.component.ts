import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatSnackBar, MatTable } from '@angular/material';
import { BaseComponentComponent } from 'src/app/shared/BaseComponent/base-component/base-component.component';
import { BookDetailsFormComponent } from '../book-details-form/book-details-form.component';
import { BookDetails } from 'src/app/shared/models/models';
import { Observable, Subscription } from 'rxjs';

const BOOK_DATA: BookDetails[] = [
  { title: 'Tale of two cities', description: 'This is tale of two cities and their rivalary', date: new Date('1/12/2019'), excerpt: 'This is a novel.', pageCount: 5 },
  { title: 'Book of the damned', description: `It's a book from supernatural`, excerpt: '', date: new Date('12/1/2020'), pageCount: 8 }
];

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListPageComponent extends BaseComponentComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'description', 'date', 'excerpt', 'pageCount', 'actions'];
  dataSource = new MatTableDataSource<BookDetails>(BOOK_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('mytable') public table: MatTable<BookDetails>;

  private subscription: Subscription;

  constructor(
    protected dialog: MatDialog,
    protected snackBar?: MatSnackBar
  ) {
    super(snackBar);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public addBook(): void {

    const subscription: Subscription = this.openDialog()
      .subscribe((bookDetails: BookDetails) => {

        if (bookDetails) {
          BOOK_DATA.push(bookDetails);

          this.dataSource.data = BOOK_DATA;
          this.table.renderRows();
        }

        subscription.unsubscribe();
      });


  }

  public editBook(book: BookDetails, index: number): void {

    const subscription: Subscription = this.openDialog(book)
      .subscribe((bookDetails: BookDetails) => {

        if (bookDetails) {
          BOOK_DATA.splice(index, 1, bookDetails);
          this.dataSource.data = BOOK_DATA;
          this.table.renderRows();
        }

        subscription.unsubscribe();
      });
  }

  public deleteBook(index: number): void {
    BOOK_DATA.splice(index, 1);
    this.dataSource.data = BOOK_DATA;
    this.table.renderRows();
  }

  private openDialog(bookData?: BookDetails): Observable<BookDetails> {
    let options: Object;

    if (bookData) {
      options = {
        data: bookData,
        disableClose: true
      };
    } else {
      options = {
        disableClose: true
      };
    }

    return this.dialog.open(BookDetailsFormComponent, options)
      .afterClosed();
  }

}
