let view = {

    root: document.querySelector('#root'),

    getMenuComponent: function(){
        let div = document.createElement('div');
        div.id='menuComponent';
        div.className='row col-12 col-m-12 col-s-12';
        div.innerHTML=` 
                        <!--div id="logo">Logo</div-->
                        <div  id="myPortfolio"><h1><span>{Interactive} </span> Product Designer</h1></div>
                        <div  id="menuButtonsContainer"></div>

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