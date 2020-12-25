import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HOST} from '../../../config/app.config';
import {Observable} from 'rxjs';

/*
 *
 * ICI ON MET TOUS LES APPELS API !!!!
 * Toutes les méthodes nécessaires sont listées ci-dessous.
 * Il ne reste plus qu'à les coder !!
 * Pour voir à quoi correspondent les méthodes, voir le SWAGGER UI
 * sur http://localhost:8080/lunchtime une fois le back lancé.
 * Les méthodes sont dans l'ordre du SWAGGER
 *
 */

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private url: string = HOST.apiUrl;

  /*
   *                        Gestion des commandes
   */

  getOrders(): Observable<any> {
    return this.http.get(this.url + 'order/findall');
  }

  putOrder(): Observable<any> {
    return ;
  }
  updateOrder(): Observable<any> {
    return;
  }
  cancelOrder(): Observable<any> {
    return;
  }
  computePricesOrder(): Observable<any> {
    return;
  }
  getOrderByCriteria(params: any): Observable<any> {
    return this.http.get(this.url + 'order/findallbetweendateinstatus?status=' + params.status + '&beginDate=' + params.beginDate + '&endDate=' + params.endDate);
  }
  getOrdersByUserId(): Observable<any> {
    return;
  }
  payAndDeliverOrder(): Observable<any> {
    return;
  }
  getOrdersByUserAndByCriteria(): Observable<any> {
    return;
  }
}
