let view = {

    root: document.querySelector('#root'),

    getMenuComponent: function(){
        let div = document.createElement('div');
        div.id='menuComponent';
        div.className='row col-6 col-m-6 col-s-6';
        div.innerHTML=` 
                        <!--div><h1><span id="int">{Interactive}</span><br> Product Designer</h1></div-->
                        <div id="menuButtonsContainer"></div>

                        `;
        
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAboutMe());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAboutMe());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAboutMe());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAboutMe());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAboutMe());
        

        return div;
    },


    render: function(){
        document.querySelector('body').appendChild(this.getMenuComponent());
    }

};