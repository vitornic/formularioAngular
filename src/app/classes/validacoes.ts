import { AbstractControl } from '@angular/forms';

export class Validacoes {

  static SenhasCombinam(controle: AbstractControl) {
    const senha = controle.get('senha').value;
    const confirmarSenha = controle.get('confirmarSenha').value;

    if (senha === confirmarSenha) { return null; }

    controle.get('confirmarSenha').setErrors({ senhasNaoCoincidem: true });
  }

}
