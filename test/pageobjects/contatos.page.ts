import Page from './page';

class ContatosPage extends Page {
    get inputNome () { 
        return $('#nomesobrenome') 
    }

    get inputEmail () { 
        return $('#email') 
    }

    open () {
        return super.open('contatos.html');
    }
}

export default new ContatosPage();
