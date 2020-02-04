export class UserAuthenticationData {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export interface BookDetails {
  title: string;
  description: string;
  date: Date;
  excerpt?: string;
  pageCount: number;
}
