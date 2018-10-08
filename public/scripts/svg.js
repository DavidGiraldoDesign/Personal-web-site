let svg = {

    getAboutMe: function () {
        let div = document.createElement('div');
        div.id = 'about';
        div.className = "menuSectionButton"

        div.innerHTML = `
                <div class="menuButtonElement">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 27.23"><title>a_1</title><g id="321d018e-0e37-4d90-a040-c4a39a891963" data-name="Capa 2"><g id="6919d9a3-371e-4cb2-9c51-111ea1a8c32e" data-name="Layer 1"><path d="M15,27.23l-.58-.42C13.83,26.39,0,16.42,0,8.5A8.49,8.49,0,0,1,15,3,8.49,8.49,0,0,1,30,8.5c0,7.92-13.83,17.89-14.42,18.31ZM8.5,2A6.51,6.51,0,0,0,2,8.5C2,14,10.89,21.7,15,24.76,19.11,21.7,28,14,28,8.5A6.5,6.5,0,0,0,15.87,5.27L15,6.77l-.87-1.51A6.52,6.52,0,0,0,8.5,2Z"/></g></g></svg>
                </div>
                <h2 class = "menuSectionTitle">About me</h2>
             `
        return div;

    },
    getPortfolio: function () {
        let div = document.createElement('div');
        div.id = 'port';
        div.className = "menuSectionButton"

        div.innerHTML = `
                                <div class="menuButtonElement">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.3 27.29"><title>Recurso 4</title><g id="ce0d3807-bcbf-4954-abb3-bb80c4138fa4" data-name="Capa 2"><g id="7cb9a06a-b6e8-49f1-b261-df51f694aedf" data-name="Layer 1"><rect x="4.14" y="13.65" width="17" height="2" transform="translate(-6.66 13.23) rotate(-45)"/><path d="M26.92,5.6,21.69.37a1.33,1.33,0,0,0-1.84,0L17.44,2.77a1.25,1.25,0,0,0-.17.26A1.18,1.18,0,0,0,17,3.2L1.18,19a2,2,0,0,0-.53,1.11L0,25.91a1.25,1.25,0,0,0,.31,1,1.24,1.24,0,0,0,.92.41l5.91-.65a2,2,0,0,0,1.1-.53L24.09,10.27a1.24,1.24,0,0,0,.17-.25,1.28,1.28,0,0,0,.26-.17l2.4-2.4a1.3,1.3,0,0,0,0-1.84ZM2.42,22.11l2.73,2.73-3.06.34Zm4.5,2.54H6.87l.46-.46L3.09,20,17.94,5.11l4.24,4.24ZM23.6,7.93,19.35,3.69l1.41-1.41L25,6.52Z"/></g></g></svg>
                                </div>
                                <h2 class = "menuSectionTitle">Porftfolio</h2>
                             `
        return div;
    },
    getWorkExp: function () {
        let div = document.createElement('div');
        div.id = 'exp';
        div.className = "menuSectionButton"

        div.innerHTML = `
                        <div class="menuButtonElement">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29"><title>b</title><g id="9c930833-c3a9-461d-afc2-f64d7361b6c6" data-name="Capa 2"><g id="f3853111-55b6-49ea-9561-c12ec56982f4" data-name="Layer 1"><path d="M28,24H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H28a2,2,0,0,1,2,2V22A2,2,0,0,1,28,24Zm0-2v0ZM2,2V22H28V2Z"/><rect x="1" y="16" width="28" height="2"/><path d="M21,29H9l2.18-7h7.7Zm-9.33-2h6.62l-.93-3H12.63Z"/><rect x="7" y="27" width="16" height="2"/><rect x="13" y="19" width="4" height="2"/></g></g></svg>
                        </div>
                        <h2 class = "menuSectionTitle">Work exp</h2>
                     `
        return div;
    },
    getAwards: function () {
        let div = document.createElement('div');
        div.id = 'awar';
        div.className = "menuSectionButton"

        div.innerHTML = `
                        <div class="menuButtonElement">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.52 30.56"><title>Recurso 5</title><g id="1bf36cc4-ecd5-4290-a9ee-c59946621802" data-name="Capa 2"><g id="4e25de9d-074b-453b-b2ae-614b3e87b3cf" data-name="Layer 1"><path d="M25.49,30.56a1.39,1.39,0,0,1-.62-.15l-9.11-4.55L6.65,30.41a1.39,1.39,0,0,1-.62.15H6a1.18,1.18,0,0,1-.91-.42,1.29,1.29,0,0,1-.26-1.08l1.82-10L.41,12.8a1.24,1.24,0,0,1-.34-1.31,1.24,1.24,0,0,1,1.09-.8l9-.9L14.64.74a1.22,1.22,0,0,1,2.24,0l4.55,9.11,8.93.85a1.2,1.2,0,0,1,.75,2.11l-6.29,6.29,1.83,10a1.28,1.28,0,0,1-.26,1.07A1.18,1.18,0,0,1,25.49,30.56Zm-9.73-6.69a2,2,0,0,1,.89.2l7.76,3.88-1.55-8.54a2.06,2.06,0,0,1,.54-1.73l5.15-5.15-7.4-.74a2,2,0,0,1-1.52-1L15.76,3l-3.88,7.76a2,2,0,0,1-1.52,1L3,12.52l5.15,5.15a2.06,2.06,0,0,1,.54,1.73L7.1,27.95l7.76-3.88A2,2,0,0,1,15.76,23.87Z"/></g></g></svg>
                        </div>
                        <h2 class = "menuSectionTitle">Awards</h2>
                     `
        return div;
    },
    getContact: function () {
        let div = document.createElement('div');
        div.id = 'cont';
        div.className = "menuSectionButton"

        div.innerHTML = `
                        <div class="menuButtonElement">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.1 33"><title>Recurso 6</title><g id="03b4b4cc-b5b6-4c89-9a47-1e87e173ec32" data-name="Capa 2"><g id="f5206d6d-9465-44dd-9791-40b9918c949a" data-name="Layer 1"><path d="M18.12,9l2.73-5.46a1.06,1.06,0,0,0,0-1L20.46,2H4V0H2V31H0v2H6V31H4V16H19.9a1.06,1.06,0,0,0,.91-.5L21.1,15ZM4,14V4H18.38L16.15,8.46a1.22,1.22,0,0,0,0,1.07L18.38,14Z"/></g></g></svg>
                        </div>
                        <h2 class = "menuSectionTitle">Contact me</h2>
                     `
        return div;
    }

}