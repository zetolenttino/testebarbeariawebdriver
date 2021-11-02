import ContatosPage from '../pageobjects/contatos.page';

describe('página de contatos da barbeairia', () => {
    describe('formulário de contatos (desktop)', () => {
        it('verificar o foco foi para o campo nome ao abrir a página de contatos', async () => {
            await ContatosPage.open();
            await ContatosPage.desktop();
            await expect(ContatosPage.inputEmail).not.toBeFocused()
        });
    })
    describe('formulário de contatos no celular (mobile)', () => {
        it('verificar o foco foi para o campo nome ao abrir a página de contatos', async () => {
            await ContatosPage.open();
            await ContatosPage.mobile();
            await expect(ContatosPage.inputNome).toBeFocused()
        });
    })

});


