import Page from './page';

class InicioPage extends Page {
    get linkDeProdutos() {
        return $('a[href="produtos.html"]')
    }

    get mapaInicio() {
        return $('.mapa-conteudo')
    }

    open() {
        return super.open('');
    }
}

export default new InicioPage();
