(function controler (){

    view.render();

    console.log("_______________________");
    console.log("Hi, welcome to my code!");
    console.log("_______________________");

    let cvContents = [
        cv.getProfile(),
        cv.getPortfolio(),
        cv.getWork(),
        cv.getEducation(),
        cv.getData()
    ];

    view.onChangeContent = (index) =>{
        view.renderContent(cvContents[index]);
    }

})();