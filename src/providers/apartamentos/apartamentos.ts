import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class ApartamentosProvider {
  private apart: any;

  private API_URL = "http://espaco10.000webhostapp.com/menuws.php";

  constructor(
    public http: Http) { }

  // retorna todos apartamentos em formato JSON
  getAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL;

      this.http.get(url)
        .subscribe((result:any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    })
  }

  get(id) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + '/' + id;
      let items;
      console.log('ProviderApartamentos' + url);

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
          console.log(result);

        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
