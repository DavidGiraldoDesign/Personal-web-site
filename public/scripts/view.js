let view = {

    root: document.querySelector('#root'),

    getMenuComponent: function(){
        let div = document.createElement('div');
        div.id='menuComponent';
        div.className='row col-12 col-m-12 col-s-12';
        div.innerHTML=` 
                        <!--div id="logo">Logo</div-->
                        <div class="col-4 col-m-6 col-s-12"     id="myPortfolioHeader"><h1><span>{Interactive} </span> Product Designer</h1></div>
                        <div  class="col-4 col-m-5 col-s-12"  id="menuButtonsContainer">
                            
                        </div>

                        `;
   
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAboutMe());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getPortfolio());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getWorkExp());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getAwards());
        div.querySelector('#menuButtonsContainer').appendChild(svg.getContact());
        

        return div;
    },


    render: function(){
        document.querySelector('body').appendChild(this.getMenuComponent());
    }

};