export default class Loader {
    constructor() {
        this.refs = this.getRefs();
    }

    getRefs() {
        const refs = {};
        refs.preloader = document.querySelector('.overlay')
        refs.loader = document.querySelector('.loader');
        return refs;
    }

    enable(name) {
        if (name === 'loader') {
            this.refs.loader.classList.remove('is-off')
        } else if (name === 'preloader') {
            this.refs.preloader.classList.remove('is-off')
        }     
    } 
    
    disable(name) {
        if (name === 'loader') {
            this.refs.loader.classList.add('is-off')
        } else if (name === 'preloader') {
            this.refs.preloader.classList.add('is-off')
        }
    }
}