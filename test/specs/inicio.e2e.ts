import InicioPage from '../pageobjects/inicio.page';

describe('página inicial da barbeairia', () => {
    describe('teste no computador (desktop)', () => {
        it('verificar url da pagina inicial', async () => {
            await InicioPage.open();
            await InicioPage.desktop();
            await expect(browser).toHaveUrl('https://zetolenttino.github.io/barbearia/')
        });
        it('verificar se existe link PRODUTOS', async () => {
            await InicioPage.open();
            await InicioPage.desktop();
            await expect(InicioPage.linkDeProdutos).toHaveTextContaining(
                'PRODUTOS');
            await expect(InicioPage.linkDeProdutos).not.toHaveTextContaining(
                'Contatos');
        });
        it('verificando se está clicando no mapa', async () => {
            await InicioPage.open();
            await InicioPage.desktop();
            await expect(InicioPage.mapaInicio).toBeClickable();
        });
    })

    describe('teste no celular (mobile)', () => {
        it('verificar url da pagina inicial', async () => {
            await InicioPage.open();
            await InicioPage.mobile();
            await expect(browser).toHaveUrl('https://zetolenttino.github.io/barbearia/')
        });
        it('verificar se existe link PRODUTOS', async () => {
            await InicioPage.open();
            await InicioPage.mobile();
            await expect(InicioPage.linkDeProdutos).toHaveTextContaining(
                'PRODUTOS');
        });
        it.skip('verificando se está clicando no mapa', async () => {
            await InicioPage.open();
            await InicioPage.mobile();
            await expect(InicioPage.mapaInicio).toBeClickable();
        });
    })
});