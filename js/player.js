class Player {
    constructor(gameScreen,left, top,width,height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.heigth = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc
        this.element.style.position = "absolute"
        gameScreen.appendChild(this.element)
    }

    move(){

        this.left += this.directionX
        this.top += this.directionY

    }

    updatePosition(){

        this.element.style.left = `${this.left}px`
        


    }

    didCollide(){

    }
}