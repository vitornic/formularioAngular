import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './../../classes/usuario';
import { Validacoes } from 'src/app/classes/validacoes';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  pessoa = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  enviarDados() {
    const dadosFormulario = this.formulario.value;

    const usuario = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.nascimento,
      dadosFormulario.senha
    );

    alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

    this.pessoa.push(usuario);
    this.formulario.reset();
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ],
      email: ['', Validators.compose([Validators.email])],
      cpf: ['', Validators.compose([Validators.required])],
      nascimento: ['', Validators.compose([Validators.required])],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      ],
      confirmarSenha: ['', Validators.compose([Validators.required])]
    },
    {
      validator: Validacoes.SenhasCombinam
    });
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get email() {
    return this.formulario.get('email');
  }

  get cpf() {
    return this.formulario.get('cpf');
  }

  get nascimento() {
    return this.formulario.get('nascimento');
  }

  get senha() {
    return this.formulario.get('senha');
  }

  get confirmarSenha() {
    return this.formulario.get('confirmarSenha');
  }

}
