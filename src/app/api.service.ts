import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
 
import {catchError,map} from 'rxjs/operators';
import {Client} from '../Client';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  clients:Client[];
  constructor(private _http : HttpClient) { 

  }

  Hello() : string
  {
    return "a";
  }
  getService() : Observable<Client[] >
  {
    console.log("In Service  View .... ")
    return this._http.get<Client[]>("/EventBasedCalendar/view");
  }

  InsertClient(client : Client) : Observable<any>
  {
    console.log("In Serv Insert" + client.clientName );
    console.log('Hello I m here');
// return this._http.post("/EventBasedCalendar/submitOnDb", client)

return this._http.post("/EventBasedCalendar/submitOnDb", client)
.pipe(
  map((res:Response)=>res),
  catchError(this.errorhandler));
  };
 
errorhandler(error : Response)
{
  console.log(error.status);
  console.log(error);
  
  return throwError(error);
}
private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
}