export default class Loader {
    constructor() {
        this.refs = this.getRefs();
    }

    getRefs() {
        const refs = {};
        refs.preloader = document.querySelector('.overlay')
        refs.loader = document.querySelectorAll('.loader');
        return refs;
    }

    enable() {
        this.refs.loader.forEach((e) => {
           e.classList.add('is-off');
        });
    }

    disable() {
        this.refs.loader.forEach((e) => {
           e.classList.remove('is-off');
        });
    }
}