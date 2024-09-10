WebGLSampler.toString('#page',{
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})
WebGLSampler.toString('#page1',{
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})
WebGLSampler.toString('#page2',{
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})
WebGLSampler.toString('#page3',{
    scrollTrigger:{
        trigger:`#page3`,
        start:`top top`,
        end:`bottom top`,
        markers:true,
        pin:true,
        scroller:`#main`
    }
})


const canvas= document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize" , function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `3d animation page/aaaaaaaaaaaa.png 
    3d animation page/male0001.png 
    3d animation page/male0002.png 
    3d animation page/male0003.png 
    3d animation page/male0004.png 
    3d animation page/male0005.png 
    3d animation page/male0006.png 
    3d animation page/male0007.png 
    3d animation page/male0008.png 
    3d animation page/male0009.png
     3d animation page/male0010.png 
     3d animation page/male0011.png 
     3d animation page/male0012.png 
     3d animation page/male0013.png 
     3d animation page/male0014.png 
     3d animation page/male0015.png 
     3d animation page/male0016.png
      3d animation page/male0017.png 
      3d animation page/male0018.png
       3d animation page/male0019.png 
       3d animation page/male0020.png 
       3d animation page/male0021.png 
       3d animation page/male0022.png
        3d animation page/male0023.png 
        3d animation page/male0024.png 
        3d animation page/male0025.png 
        3d animation page/male0026.png 
        3d animation page/male0027.png 
        3d animation page/male0028.png 
        3d animation page/male0029.png 
        3d animation page/male0030.png 
        3d animation page/male0031.png 
        3d animation page/male0032.png 
        3d animation page/male0033.png 
        3d animation page/male0034.png 
        3d animation page/male0035.png 
        3d animation page/male0036.png 
        3d animation page/male0037.png 
        3d animation page/male0038.png 
        3d animation page/male0039.png 
        3d animation page/male0040.png 
        3d animation page/male0041.png 
        3d animation page/male0042.png 
        3d animation page/male0043.png 
        3d animation page/male0044.png 
        3d animation page/male0045.png 
        3d animation page/male0046.png 
        3d animation page/male0047.png 
        3d animation page/male0048.png 
        3d animation page/male0049.png 
        3d animation page/male0050.png 
        3d animation page/male0051.png 
        3d animation page/male0052.png 
        3d animation page/male0053.png 
        3d animation page/male0054.png 
        3d animation page/male0055.png 
        3d animation page/male0056.png 
        3d animation page/male0057.png 
        3d animation page/male0058.png 
        3d animation page/male0059.png 
        3d animation page/male0060.png 
        3d animation page/male0061.png 
        3d animation page/male0062.png 
        3d animation page/male0063.png 
        3d animation page/male0064.png 
        3d animation page/male0065.png 
        3d animation page/male0066.png 
        3d animation page/male0067.png 
        3d animation page/male0068.png 
        3d animation page/male0069.png 
        3d animation page/male0070.png 
        3d animation page/male0071.png 
        3d animation page/male0072.png 
        3d animation page/male0073.png 
        3d animation page/male0074.png 
        3d animation page/male0075.png 
        3d animation page/male0076.png 
        3d animation page/male0077.png 
        3d animation page/male0078.png 
        3d animation page/male0079.png 
        3d animation page/male0080.png 
        3d animation page/male0081.png 
        3d animation page/male0082.png 
        3d animation page/male0083.png 
        3d animation page/male0084.png 
        3d animation page/male0085.png 
        3d animation page/male0086.png 
        3d animation page/male0087.png 
        3d animation page/male0088.png 
        3d animation page/male0089.png 
        3d animation page/male0090.png 
        3d animation page/male0091.png 
        3d animation page/male0092.png 
        3d animation page/male0093.png 
        3d animation page/male0094.png 
        3d animation page/male0095.png 
        3d animation page/male0096.png 
        3d animation page/male0097.png 
        3d animation page/male0098.png 
        3d animation page/male0099.png 
        
        3d animation page/male0100.png 
        3d animation page/male0101.png 
        3d animation page/male0102.png 
        3d animation page/male0103.png 
        3d animation page/male0104.png 
        3d animation page/male0105.png 
        3d animation page/male0106.png 
        3d animation page/male0107.png 
        3d animation page/male0108.png 
        3d animation page/male0109.png 
        3d animation page/male0110.png 
        3d animation page/male0111.png 
        3d animation page/male0112.png 
        3d animation page/male0113.png 
        3d animation page/male0114.png 
        3d animation page/male0115.png 
        3d animation page/male0116.png 
        3d animation page/male0117.png 
        3d animation page/male0118.png 
        3d animation page/male0119.png 
        3d animation page/male0120.png 
        3d animation page/male0121.png 
        3d animation page/male0122.png 
        3d animation page/male0123.png 
        3d animation page/male0124.png 
        3d animation page/male0125.png 
        animation page/male0126.png 
        3d animation page/male0127.png
         3d animation page/male0128.png 
         3d animation page/male0129.png 
         3d animation page/male0130.png 
         3d animation page/male0131.png 
         3d animation page/male0132.png 
         3d animation page/male0133.png 
         3d animation page/male0134.png 
         3d animation page/male0135.png 
         3d animation page/male0136.png 
         3d animation page/male0137.png 
         3d animation page/male0138.png 
         3d animation page/male0139.png 
         3d animation page/male0140.png 
         3d animation page/male0141.png 
         3d animation page/male0142.png 
         3d animation page/male0143.png 
         3d animation page/male0144.png 
         3d animation page/male0145.png 
         3d animation page/male0146.png 
         3d animation page/male0147.png 
         3d animation page/male0148.png 
         3d animation page/male0149.png 
         3d animation page/male0150.png 
         3d animation page/male0151.png 
         3d animation page/male0152.png 
         3d animation page/male0153.png 
         3d animation page/male0154.png 
         3d animation page/male0155.png 
         3d animation page/male0156.png 
         3d animation page/male0157.png 
         3d animation page/male0158.png 
         3d animation page/male0159.png 
         3d animation page/male0160.png 
         3d animation page/male0161.png 
         3d animation page/male0162.png 
         3d animation page/male0163.png 
         3d animation page/male0164.png 
         3d animation page/male0165.png 
         3d animation page/male0166.png 
         3d animation page/male0167.png 
         3d animation page/male0168.png 
         3d animation page/male0169.png 
         3d animation page/male0170.png 
         3d animation page/male0171.png 
         3d animation page/male0172.png 
         3d animation page/male0173.png 
         3d animation page/male0174.png 
         3d animation page/male0175.png 
         3d animation page/male0176.png 
         3d animation page/male0177.png 
         3d animation page/male0178.png 
         3d animation page/male0179.png 
         3d animation page/male0180.png 
         3d animation page/male0181.png 
         3d animation page/male0182.png 
         3d animation page/male0183.png 
         3d animation page/male0184.png 
         3d animation page/male0185.png 
         3d animation page/male0186.png 
         3d animation page/male0187.png 
         3d animation page/male0188.png 
         3d animation page/male0189.png 
         3d animation page/male0190.png 
         3d animation page/male0191.png 
         3d animation page/male0192.png 
         3d animation page/male0193.png 
         3d animation page/male0194.png 
         3d animation page/male0195.png 
         3d animation page/male0196.png 
         3d animation page/male0197.png 
         3d animation page/male0198.png 
         3d animation page/male0199.png 
         3d animation page/male0200.png 
         3d animation page/male0201.png
        3d animation page/male0202.png
         3d animation page/male0203.png
          3d animation page/male0204.png
           3d animation page/male0205.png
         3d animation page/male0206.png
        3d animation page/male0207.png
         3d animation page/male0208.png 
         3d animation page/male0209.png 
         3d animation page/male0210.png 
         3d animation page/male0211.png 
         3d animation page/male0212.png 
         3d animation page/male0213.png 
         3d animation page/male0214.png 
         3d animation page/male0215.png 
         3d animation page/male0216.png 
         3d animation page/male0217.png 
         3d animation page/male0218.png 
         3d animation page/male0219.png 
         3d animation page/male0220.png 
         3d animation page/male0221.png 
         3d animation page/male0222.png 
         3d animation page/male0223.png 
        3d animation page/male0224.png
         3d animation page/male0225.png 
         3d animation page/male0226.png 
         3d animation page/male0227.png 
         3d animation page/male0228.png 
         3d animation page/male0229.png 
         3d animation page/male0230.png 
         3d animation page/male0231.png 
         3d animation page/male0232.png 
         3d animation page/male0233.png 
         3d animation page/male0234.png 
         3d animation page/male0235.png 
         3d animation page/male0236.png 
         3d animation page/male0237.png 
         3d animation page/male0238.png 
         3d animation page/male0239.png 
         3d animation page/male0240.png 
         3d animation page/male0241.png 
         3d animation page/male0242.png 
         3d animation page/male0243.png 
         3d animation page/male0244.png 
         3d animation page/male0245.png 
         3d animation page/male0246.png 
         3d animation page/male0247.png 
         3d animation page/male0248.png 
         3d animation page/male0249.png 
         3d animation page/male0250.png 
         3d animation page/male0251.png 
         3d animation page/male0252.png 
         3d animation page/male0253.png 
         3d animation page/male0254.png 
         3d animation page/male0255.png 
         3d animation page/male0256.png 
         3d animation page/male0257.png 
         3d animation page/male0258.png 
         3d animation page/male0259.png 
         3d animation page/male0260.png 
         3d animation page/male0261.png 
         3d animation page/male0262.png 
         3d animation page/male0263.png 
         3d animation page/male0264.png 
         3d animation page/male0265.png 
         3d animation page/male0266.png 
         3d animation page/male0267.png 
         3d animation page/male0268.png 
         3d animation page/male0269.png 
         3d animation page/male0270.png 
         3d animation page/male0271.png 
         3d animation page/male0272.png 
         3d animation page/male0273.png 
         3d animation page/male0274.png 
         3d animation page/male0275.png 
         3d animation page/male0276.png 
         3d animation page/male0277.png 
         3d animation page/male0278.png 
         3d animation page/male0279.png 
         3d animation page/male0280.png 
         3d animation page/male0281.png 
         3d animation page/male0282.png 
         3d animation page/male0283.png 
         3d animation page/male0284.png 
         3d animation page/male0285.png 
         3d animation page/male0286.png 
         3d animation page/male0287.png 
         3d animation page/male0288.png 
         3d animation page/male0289.png 
         3d animation page/male0290.png 
         3d animation page/male0291.png 
         3d animation page/male0292.png 
         3d animation page/male0293.png 
         3d animation page/male0294.png 
         3d animation page/male0295.png 
         3d animation page/male0296.png 
         3d animation page/male0297.png 
         3d animation page/male0298.png 
         3d animation page/male0299.png 
         3d animation page/male0300.png 
         `;
    return data.split("\n")[index];


  }
  
  const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})