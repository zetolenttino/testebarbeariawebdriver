/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        return browser.url(`https://zetolenttino.github.io/barbearia/${path}`)
    }

    desktop() {
        browser.setWindowSize(1024, 768)
    }
    mobile() {
        browser.setWindowSize(411, 731)
    }

}
