import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function criarSenhaForte(): ValidatorFn {

    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value;

        console.log("value =>", value)
        if(!value){
            return null;
        }

        const temCaracterMaiusculo = /[A-Z]+/.test(value); // verificando se tem caracter maiusculo pelo regex

        const temCaracterMinusculo = /[a-z]+/.test(value); // verificando se tem caracter minusculo pelo regex
        
        const temCaracterNumerico = /[0-9]+/.test(value); // verificando se tem caracter minusculo pelo regex

        const senhaValida = temCaracterMaiusculo && temCaracterMinusculo && temCaracterNumerico;

        return !senhaValida ? {senhaForte: true}: null;

    }
}