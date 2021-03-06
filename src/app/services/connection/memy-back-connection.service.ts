import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {PicturesData} from './model/pictures/pictures';
import {TagData} from './model/tags/tags';

@Injectable({
  providedIn: 'root'
})
export class MemyBackConnectionService {

  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  public getPictures(page: number): Observable<PicturesData[]>  {
    const url = `http://localhost:8080/pictures?page=` + page + '&size=' + 25;
    return this.httpClient
     .get<PicturesData[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getTags(): Observable<TagData[]>  {
    const url = `http://localhost:8080/tag`;
    return this.httpClient
     .get<TagData[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
