 //@
 module.exports.Render = class Render  {
     r: any;
     board: any;
     o: any;
    x: any;
    play: any;
    exit: any;


 constructor(ry) {
    this.r = ry
    this.board = this.r.LoadTexture('assets/board.png')
    this.o = this.r.LoadTexture('assets/o.png')
    this.x = this.r.LoadTexture('assets/x.png')
    this.play = this.r.LoadTexture('assets/play.png')
    this.exit = this.r.LoadTexture('assets/exit.png')
    }

 render(x, y, char) {
    switch (char){
        case 'o':
            this.r.DrawTexture(this.o, x, y, this.r.WHITE)
            break
            case 'x':
                this.r.DrawTexture(this.x, x, y, this.r.WHITE)
            break
            case 'board':
                this.r.DrawTexture(this.board, x, y, this.r.WHITE)
                break
                case 'play':
                    this.r.DrawTexture(this.play, x, y, this.r.WHITE)
                break
                case 'exit':
                    this.r.DrawTexture(this.exit, x, y, this.r.WHITE)
                    
                    break
            default:
            return null
            
    }
}





}





