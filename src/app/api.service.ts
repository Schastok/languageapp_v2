import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { catchError} from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  TEST = true;
  URL;
  PROJECT_ID = '10';
  STUDENT_ID = '4';
  SIZE;
  TOKEN;
  STUDENT_NAME;


  constructor(private httpClient: HttpClient, private storage: Storage) {
    if (this.TEST){
      this.URL = 'http://127.0.0.1:8000';
      this.PROJECT_ID = '1';
      this.STUDENT_ID = '';
      this.SIZE = '10';
    }
    else{
      this.URL = 'https://www.e-fluent.com';
      this.SIZE = '10';
    }
  }


  private handleError(error: HttpErrorResponse) {
    let result;
    console.log("enter error");
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
      result = {'client': error.error.message};
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}`);
        result = error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(result)
  }

  getLessons(){

    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    console.log(token);
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_lessons_2/?project=${this.PROJECT_ID}`,  {headers: headers});
  }

  getSections(lessonID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);

    return this.httpClient.get(`${this.URL}/api_sections_2/?lesson=${lessonID}`,  {headers: headers});
  }

  getFlipcards(lessonID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_flipcardlist_2/?lesson=${lessonID}&student=${this.STUDENT_ID}`,  {headers: headers});
  }

  getEcercises(lessonID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_excercises_2/?lesson=${lessonID}&student=${this.STUDENT_ID}`,  {headers: headers});
  }

  getSection_details(sectionID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_section_2/?section=${sectionID}`,  {headers: headers});
  }

  getFlipcardset(lessonID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_flipcards_2/?lesson=${lessonID}&student=${this.STUDENT_ID}`,  {headers: headers});
  }

  //getFlipcardset(lessonID: string){
  //  return this.httpClient.get(`${this.URL}/api_flipcards/?lesson=${lessonID}&student=${this.STUDENT_ID}&size=${this.SIZE}`);
  //}



  getFlipcardlist(lessonID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_flipcards_2/?lesson=${lessonID}&student=${this.STUDENT_ID}`,  {headers: headers});
  }

  getExerciselist(lessonID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_excercises_2/?lesson=${lessonID}&student=${this.STUDENT_ID}`,  {headers: headers});
  }

  getExercise(quizID: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    return this.httpClient.get(`${this.URL}/api_excercise_content_2/?excercise=${quizID}`,  {headers: headers});
  }

  postupdateprogress(progressid: string, statusstr: string, answerlist: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    let postData = {
        "progressid": progressid,
        "progress": statusstr,
        "answer": answerlist
      };
    return this.httpClient.post(`${this.URL}/api_updateprogress_2/`, postData, {observe: "body", headers: headers});
  }

  postquiz(quizdata: any, quizid: string){
    let headers = new HttpHeaders();
    let token = "Token " + this.TOKEN;
    headers = headers.set('Authorization', token);
    let postData = quizdata;
    postData['excercise'] = quizid;
    postData['student'] = this.STUDENT_ID;
    delete postData.null;
    console.log(postData);
    return this.httpClient.post(`${this.URL}/api_evaluate_2/`, postData, {observe: "body", headers: headers});
  }

  authenticate(username: string, password: string){
    let postData = {
        "username": username,
        "password": password
      };
    return this.httpClient.post(`${this.URL}/api-token-auth/`, postData, {observe: "body"}).pipe(
      catchError(this.handleError)
    );

  }

  register(username: string, password: string, first_name: string, email: string){
    let postData = {
        "username": username,
        "password": password,
        "first_name": first_name,
        "email": email,
        "classroom": this.PROJECT_ID
      };
    return this.httpClient.post(`${this.URL}/api_signup_register/`, postData, {observe: "body"}).pipe(
      catchError(this.handleError)
    );

  }

  getuserid(username: string){
return this.httpClient.get(`${this.URL}/api_userid/?username=${username}`);
}
}
