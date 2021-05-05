import p5 from 'p5'

const circle = (p: p5) => {
    p.setup = () => { //初期設定
        const canvas = p.createCanvas(2000, 660)
        //createplane();
    }

    var x = -130;
    var y = 30;

    var xspeed = 4.5;
    var yspeed = 1.5;

    p.draw = () => {　//描画
        p.background(255, 255, 255);
        x += xspeed;
        y += yspeed;

        for (var i = 0; i < 10; i++) {
          var xx = x + i * 200;
          var yy = y + (i * 200) / 3;
          p.triangle(xx + 35, yy + 10, xx + 25, yy + 20, xx + 120, yy + 70);
          p.triangle(xx + 25, yy + 20, xx + 25, yy + 35, xx + 120, yy + 70);
          p.triangle(xx + 20, yy + 60, xx + 20, yy + 70, xx + 120, yy + 70);
          p.triangle(xx + 20, yy + 30, xx + 0, yy + 60, xx + 120, yy + 70);
        }

        if (x > 70) {
          x -= 200;
          y -= 200 / 3;
        }
    }
}
export default circle
