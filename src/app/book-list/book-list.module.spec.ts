import { BookListModule } from './book-list.module';

describe('BookListModule', () => {
  let bookListModule: BookListModule;

  beforeEach(() => {
    bookListModule = new BookListModule();
  });

  it('should create an instance', () => {
    expect(bookListModule).toBeTruthy();
  });
});
