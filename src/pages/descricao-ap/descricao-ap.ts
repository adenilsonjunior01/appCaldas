import { EditarApPage } from './../editar-ap/editar-ap';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApagaimovelPage } from '../apagaimovel/apagaimovel';
import { ApartamentosProvider } from '../../providers/apartamentos/apartamentos';



@IonicPage()
@Component({
  selector: 'page-descricao-ap',
  templateUrl: 'descricao-ap.html',
  providers: [ApartamentosProvider]
})

export class DescricaoApPage {

  public apartamento: any;
  public apartamentoImg: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apartamentos: ApartamentosProvider) {

      this.apartamento = this.apartamentos.get(navParams.get('codigoanuncio'));
      console.log(this.apartamento);

      this.getApartamentoId(26);
      this.apartamentoImg = [];

     }

  carregarpage() {
    this.navCtrl.push(ApagaimovelPage);
  }
  updateInfo() {
    this.navCtrl.push(EditarApPage);
  }

  getApartamentoId(idApartamento: any) {
    this.apartamentos.get(idApartamento)
      .then((result: any) => {
        for(var i = 0; i < result.lenght; i++){
          var apart = result[i];
          this.apartamentoImg.push(apart);
        }
      })
      .catch((error: any) => {
         // implementar envio correto do erro
        console.log(error);
      });
  }
}
