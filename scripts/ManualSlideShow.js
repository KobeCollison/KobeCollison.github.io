class ManualSlideShow{
    constructor(className, divId){
        this.slideIndex = 1;

        this._div = document.getElementById(divId);
        this.list = document.getElementsByClassName(className);


        this.leftButton = this._div.getElementsByClassName("leftButton")[0];
        this.rightButton =this._div.getElementsByClassName("rightButton")[0];

        var _this = this;
        this.leftButton.onclick = function(){_this.plusDivs(-1)};
        this.rightButton.onclick = function(){_this.plusDivs(1)};

    }

  //  showDivs(slideIndex);

    plusDivs(n) {
        this.showDivs(this.slideIndex += n);
    }

    showDivs(n) {
        console.log("hi");

    var i;
    var len = this.list.length
    if (n > len) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = len}
    for (i = 0; i < len; i++) {
        this.list[i].style.display = "none";  
    }
    this.list[this.slideIndex-1].style.display = "block";  
    }

    }