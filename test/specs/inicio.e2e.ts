import InicioPage from  '../pageobjects/inicio.page';

describe('página inicial da barbeairia', () => {
    it('verificar se existe link PRODUTOS', async () => {
        await InicioPage.open();

        await expect(InicioPage.linkDeProdutos).toHaveTextContaining(
            'PRODUTOS');
    });

});


