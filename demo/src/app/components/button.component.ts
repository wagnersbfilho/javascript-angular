import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string = "label2";
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'adicionar ao carrinho',
  };

  getAlert(alerta: string) {
    alert(alerta);
  }
}
