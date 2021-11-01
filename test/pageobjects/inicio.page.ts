import Page from './page';

class InicioPage extends Page {
    get linkDeProdutos () { 
        return $('a[href="produtos.html"]') 
    }

    open () {
        return super.open('');
    }
}

export default new InicioPage();
