class Platform{


    constructor(posX){
        this.rx=posX;
        this.ry=600;
        this.rw=random(100,500);
        this.rh=random([220,180,320]);
        this.spt=createSprite(this.rx,this.ry,this.rw,this.rh);
        this.spt.shapeColor="green";
        this.spt.debug=true;
    }
}