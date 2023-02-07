const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  fps: 6,
  playbackRate: 'throttle'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'rgba(17, 26, 112)';
    context.fillRect(0, 0, width, height);
    
    const cx = 0.5*width;
    const cy = 0.5*height;

    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;
    let x1, y1;
    let rradius;
    let g1 = random.range(102, 219);

    const num = 23;
    const radius = width * 0.2;
    context.save();
    context.translate(cx,cy);
    context.strokeStyle = 'rgba(255, '+ g1 +', 102)';
    context.lineWidth = random.range(2,5);
    context.beginPath();
    context.arc(0,0,(radius*0.8),0,2*Math.PI);
    context.stroke();
    context.restore();

    for (let i = 0; i < num; i++) {

      const slice = math.degToRad(360) / num;
      const angle = slice * i;

      let g = random.range(102, 219);
      context.strokeStyle = 'rgba(255, '+ g +', 102)';
      context.fillStyle = 'rgba(255, '+ g +', 102)';

      rradius = radius * random.range(0.5,0.7);
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      x1 = cx + rradius * Math.sin(angle);
      y1 = cy + rradius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(radius*0.01,radius*0.02),random.range(radius*0.03,radius*0.05))
      
      context.beginPath();
      context.lineWidth = 1;
      context.moveTo(0, 0);
      context.lineTo(2, 20);
      context.lineTo(0, 100);
      context.lineTo(-2, 20);
      context.closePath();
      context.stroke(); 
      context.restore();


      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.lineWidth = 2;
      context.beginPath();
      context.arc(0,0,random.range(radius*0.1,radius*0.7),Math.PI*random.range(0.1,1),1.5*Math.PI);
      context.stroke();
      context.restore();

    }
    
  };

};

canvasSketch(sketch, settings);
