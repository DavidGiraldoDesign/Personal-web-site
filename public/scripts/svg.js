let svg = {

    getAboutMe: function () {
        let div = document.createElement('button');
        div.id = 'about';
        div.className = "menuButtonElement"
        div.innerHTML = `
                
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 350 350">
                    <g>
                    <path d="M175,171.173c38.914,0,70.463-38.318,70.463-85.586C245.463,38.318,235.105,0,175,0s-70.465,38.318-70.465,85.587
                        C104.535,132.855,136.084,171.173,175,171.173z"/>
                    <path d="M41.909,301.853C41.897,298.971,41.885,301.041,41.909,301.853L41.909,301.853z"/>
                    <path d="M308.085,304.104C308.123,303.315,308.098,298.63,308.085,304.104L308.085,304.104z"/>
                    <path d="M307.935,298.397c-1.305-82.342-12.059-105.805-94.352-120.657c0,0-11.584,14.761-38.584,14.761
                        s-38.586-14.761-38.586-14.761c-81.395,14.69-92.803,37.805-94.303,117.982c-0.123,6.547-0.18,6.891-0.202,6.131
                        c0.005,1.424,0.011,4.058,0.011,8.651c0,0,19.592,39.496,133.08,39.496c113.486,0,133.08-39.496,133.08-39.496
                        c0-2.951,0.002-5.003,0.005-6.399C308.062,304.575,308.018,303.664,307.935,298.397z"/>
                    </g>
                </svg>
            
             `
        return div;
    },
    getPortfolio: function () {
        let div = document.createElement('div');
        div.id = 'port';
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>.cls-1{fill:red;}.cls-2{fill:#fff;}</style></defs><title>Recurso 2</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><circle class="cls-1" cx="50" cy="50" r="49.5"/><path class="cls-2" d="M50,1A49,49,0,1,1,1,50,49.05,49.05,0,0,1,50,1m0-1a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"/></g></g></svg>`
        return div;
    },
    getWorkExp: function () {
        let div = document.createElement('div');
        div.id = 'exp';
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.96 106.48"><defs><style>.cls-1{fill:red;}.cls-2{fill:#fff;}</style></defs><title>Recurso 3</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><polygon class="cls-1" points="55.98 87.73 22.05 105.57 28.53 67.78 1.07 41.02 39.01 35.51 55.98 1.13 72.95 35.51 110.89 41.02 83.43 67.78 89.91 105.57 55.98 87.73"/><path class="cls-2" d="M56,2.26l16.4,33.23.23.47.52.08,36.68,5.33L83.27,67.24l-.38.37.09.51,6.27,36.53L56.44,87.41,56,87.16l-.47.25-32.8,17.24L29,68.12l.08-.51-.37-.37L2.15,41.37,38.82,36l.53-.08.23-.47L56,2.26M56,0,38.68,35.05,0,40.67,28,68l-6.61,38.53L56,88.29l34.6,18.19L84,68l28-27.28L73.28,35.05,56,0Z"/></g></g></svg>}`
        return div;
    },
    getAwards: function () {
        let div = document.createElement('div');
        div.id = 'awar';
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.81 98.56"><defs><style>.cls-1{fill:red;}.cls-2{fill:#fff;}</style></defs><title>Recurso 4</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><polygon class="cls-1" points="28.74 98.06 0.58 49.28 28.74 0.5 85.07 0.5 113.23 49.28 85.07 98.06 28.74 98.06"/><path class="cls-2" d="M84.78,1l27.87,48.28L84.78,97.56H29L1.15,49.28,29,1H84.78m.58-1H28.45L0,49.28,28.45,98.56H85.36l28.45-49.28L85.36,0Z"/></g></g></svg>`
        return div;
    },
    getContact: function () {
        let div = document.createElement('div');
        div.id = 'cont';
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.47 100"><defs><style>.cls-1{fill:red;}.cls-2{fill:#fff;}</style></defs><title>Recurso 5</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><polygon class="cls-1" points="0.87 99.5 57.73 1 114.6 99.5 0.87 99.5"/><path class="cls-2" d="M57.73,2l56,97H1.73l56-97m0-2L0,100H115.47L57.73,0Z"/></g></g></svg>`
        return div;
    }

}