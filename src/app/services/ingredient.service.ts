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
export class IngredientService {

  constructor(private http: HttpClient) { }

  private url: string = HOST.apiUrl;

  /*
   *                        Gestion des ingrédients
   */

  getIngredients(): Observable<any> {
    return this.http.get(this.url + '/ingredient/findall');
  }

  putIngredient(): Observable<any> {
    return ;
  }
  updateIngredient(): Observable<any> {
    return;
  }
  deleteIngredient(): Observable<any> {
    return;
  }
  getIngredient(): Observable<any> {
    return;
  }
  updateImgIngredient(): Observable<any> {
    return;
  }
  getIngredientImgById(): Observable<any> {
    return;
  }
}