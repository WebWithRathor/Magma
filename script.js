function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });




  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


}
loco();
gsap.timeline()

.from("#page1 .hiden h1",{
  y:'300%',
  duration:1,
  stagger:.2,
  rotate:30
})
.from("#page1 .intro h3",{
  width:0,
  duration:1,
},'page1')
.from("#page1 .intro button",{
  x:'-20%',
  duration:1,
},'page1')

function canva1() {
  const canvas = document.querySelector("#page2>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
   img/frame/frames00007.png
    img/frame/frames00010.png
    img/frame/frames00013.png
    img/frame/frames00016.png
    img/frame/frames00019.png
    img/frame/frames00022.png
    img/frame/frames00025.png
    img/frame/frames00028.png
    img/frame/frames00031.png
    img/frame/frames00034.png
    img/frame/frames00037.png
    img/frame/frames00040.png
    img/frame/frames00043.png
    img/frame/frames00046.png
    img/frame/frames00049.png
    img/frame/frames00052.png
    img/frame/frames00055.png
    img/frame/frames00058.png
    img/frame/frames00061.png
    img/frame/frames00064.png
    img/frame/frames00067.png
    img/frame/frames00070.png
    img/frame/frames00073.png
    img/frame/frames00076.png
    img/frame/frames00079.png
    img/frame/frames00082.png
    img/frame/frames00085.png
    img/frame/frames00088.png
    img/frame/frames00091.png
    img/frame/frames00094.png
    img/frame/frames00097.png
    img/frame/frames00100.png
    img/frame/frames00103.png
    img/frame/frames00106.png
    img/frame/frames00109.png
    img/frame/frames00112.png
    img/frame/frames00115.png
    img/frame/frames00118.png
    img/frame/frames00121.png
    img/frame/frames00124.png
    img/frame/frames00127.png
    img/frame/frames00130.png
    img/frame/frames00133.png
    img/frame/frames00136.png
    img/frame/frames00139.png
    img/frame/frames00142.png
    img/frame/frames00145.png
    img/frame/frames00148.png
    img/frame/frames00151.png
    img/frame/frames00154.png
    img/frame/frames00157.png
    img/frame/frames00160.png
    img/frame/frames00163.png
    img/frame/frames00166.png
    img/frame/frames00169.png
    img/frame/frames00172.png
    img/frame/frames00175.png
    img/frame/frames00178.png
    img/frame/frames00181.png
    img/frame/frames00184.png
    img/frame/frames00187.png
    img/frame/frames00190.png
    img/frame/frames00193.png
    img/frame/frames00196.png
    img/frame/frames00199.png
    img/frame/frames00202.png   
  `;
    return data.split("\n")[index];
  }

  const frameCount = 67;

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
      trigger: `#page2`,
      start: `top 0%`,
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

    trigger: "#page2",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
}
canva1();
gsap.to("#page2 h1", {
  y: "-100%",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "top 0%",
    scrub: .15
  }
})
function canva2() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
   img/bridge/bridges00004.png
   img/bridge/bridges00007.png
   img/bridge/bridges00010.png
   img/bridge/bridges00013.png
   img/bridge/bridges00016.png
   img/bridge/bridges00019.png
   img/bridge/bridges00022.png
   img/bridge/bridges00025.png
   img/bridge/bridges00028.png
   img/bridge/bridges00031.png
   img/bridge/bridges00034.png
   img/bridge/bridges00037.png
   img/bridge/bridges00040.png
   img/bridge/bridges00043.png
   img/bridge/bridges00046.png
   img/bridge/bridges00049.png
   img/bridge/bridges00052.png
   img/bridge/bridges00055.png
   img/bridge/bridges00058.png
   img/bridge/bridges00061.png
   img/bridge/bridges00064.png
   img/bridge/bridges00067.png
   img/bridge/bridges00070.png
   img/bridge/bridges00073.png
   img/bridge/bridges00076.png
   img/bridge/bridges00079.png
   img/bridge/bridges00082.png
   img/bridge/bridges00085.png
   img/bridge/bridges00088.png
   img/bridge/bridges00091.png
   img/bridge/bridges00094.png
   img/bridge/bridges00097.png
   img/bridge/bridges00100.png
   img/bridge/bridges00103.png
   img/bridge/bridges00106.png
   img/bridge/bridges00109.png
   img/bridge/bridges00112.png
   img/bridge/bridges00115.png
   img/bridge/bridges00118.png
   img/bridge/bridges00121.png
   img/bridge/bridges00124.png
   img/bridge/bridges00127.png
   img/bridge/bridges00130.png
   img/bridge/bridges00133.png
   img/bridge/bridges00136.png
   img/bridge/bridges00139.png
   img/bridge/bridges00142.png
   img/bridge/bridges00145.png
   img/bridge/bridges00148.png
   img/bridge/bridges00151.png
   img/bridge/bridges00154.png
   img/bridge/bridges00157.png
   img/bridge/bridges00160.png
   img/bridge/bridges00163.png
  
  `;
    return data.split("\n")[index];
  }

  const frameCount = 54;

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
      trigger: `#page3`,
      start: `top 0%`,
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

    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
}
canva2();
gsap.to("#page3 h1", {
  y: "-100%",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    start: "top 0%",
    scrub: .15
  }
})
function canva3() {
  const canvas = document.querySelector("#page4>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
  `;
    return data.split("\n")[index];
  }

  const frameCount = 176;

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
      trigger: `#page4`,
      start: `top 0%`,
      end: `600% top`,
      scroller: `#main`,
      onUpdate: (a) => {
        if (Math.floor(a.progress * 100) <= 60) {
          document.querySelector(".circle h1").textContent = Math.floor(a.progress * 100) + '%'
        }
      }
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

    trigger: "#page4",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
}
canva3();

gsap.to("#page4 .bar", {
  y: "-100%",
  duration: 2,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "top 0%",
    scrub: 2
  }
})
var tm = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "top 0%",
    end: "600% 0%",
    scrub: 1
  }
})
tm
  .from("#page4 .circle", {
    width: '25%',
    opacity: 0,
    duration: 70,
  }, 'a')
  .from("#page4 .circle1", {
    width: '15%',
    opacity: 0,
    duration: 70,
  }, 'a')
  .to("#page4 .circle1>h1,#page4 .circle1>h2", {
    opacity: 0,
    duration: 10

  })
  .from("#page4 .circle img", {
    opacity: 0,
    scale: 0,
    duration: 10
  })
  .to("#page4 .circle", {
    width: '25%',
    opacity: 0,
    duration: 10,
  }, 'b')
  .to("#page4 .circle1", {
    opacity: 0,
    duration: 10,
    width: '15%',
  }, 'b')
  .to("#page4 .circle img", {
    opacity: 0,
    duration: 10,
    scale: 0,
  }, 'b')
  .from("#page4 .video", {
    opacity: 0,
    duration: 20,
    scale: 2,
  })
  .from("#page4 .hiden h1", {
    opacity: 0,
    duration: 10,
    y: "100%",
    rotate:15
  }, 'd')
  .from("#page4 .video button", {
    opacity: 0,
    duration: 10,
    y: "100%"
  }, 'd')


function canva4() {
  const canvas = document.querySelector("#page6 .right>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    https://thisismagma.com/assets/home/roadmap/seq/1.webp
https://thisismagma.com/assets/home/roadmap/seq/2.webp
https://thisismagma.com/assets/home/roadmap/seq/3.webp
https://thisismagma.com/assets/home/roadmap/seq/4.webp
https://thisismagma.com/assets/home/roadmap/seq/5.webp
https://thisismagma.com/assets/home/roadmap/seq/6.webp
https://thisismagma.com/assets/home/roadmap/seq/7.webp
https://thisismagma.com/assets/home/roadmap/seq/8.webp
https://thisismagma.com/assets/home/roadmap/seq/9.webp
https://thisismagma.com/assets/home/roadmap/seq/10.webp
https://thisismagma.com/assets/home/roadmap/seq/11.webp
https://thisismagma.com/assets/home/roadmap/seq/12.webp
https://thisismagma.com/assets/home/roadmap/seq/13.webp
https://thisismagma.com/assets/home/roadmap/seq/14.webp
https://thisismagma.com/assets/home/roadmap/seq/15.webp
https://thisismagma.com/assets/home/roadmap/seq/16.webp
https://thisismagma.com/assets/home/roadmap/seq/17.webp
https://thisismagma.com/assets/home/roadmap/seq/18.webp
https://thisismagma.com/assets/home/roadmap/seq/19.webp
https://thisismagma.com/assets/home/roadmap/seq/20.webp
https://thisismagma.com/assets/home/roadmap/seq/21.webp
https://thisismagma.com/assets/home/roadmap/seq/22.webp
https://thisismagma.com/assets/home/roadmap/seq/23.webp
https://thisismagma.com/assets/home/roadmap/seq/24.webp
https://thisismagma.com/assets/home/roadmap/seq/25.webp
https://thisismagma.com/assets/home/roadmap/seq/26.webp
https://thisismagma.com/assets/home/roadmap/seq/27.webp
https://thisismagma.com/assets/home/roadmap/seq/28.webp
https://thisismagma.com/assets/home/roadmap/seq/29.webp
https://thisismagma.com/assets/home/roadmap/seq/30.webp
https://thisismagma.com/assets/home/roadmap/seq/31.webp
https://thisismagma.com/assets/home/roadmap/seq/32.webp
https://thisismagma.com/assets/home/roadmap/seq/33.webp
https://thisismagma.com/assets/home/roadmap/seq/34.webp
https://thisismagma.com/assets/home/roadmap/seq/35.webp
https://thisismagma.com/assets/home/roadmap/seq/36.webp
https://thisismagma.com/assets/home/roadmap/seq/37.webp
https://thisismagma.com/assets/home/roadmap/seq/38.webp
https://thisismagma.com/assets/home/roadmap/seq/39.webp
https://thisismagma.com/assets/home/roadmap/seq/40.webp
https://thisismagma.com/assets/home/roadmap/seq/41.webp
https://thisismagma.com/assets/home/roadmap/seq/42.webp
https://thisismagma.com/assets/home/roadmap/seq/43.webp
https://thisismagma.com/assets/home/roadmap/seq/44.webp
https://thisismagma.com/assets/home/roadmap/seq/45.webp
https://thisismagma.com/assets/home/roadmap/seq/46.webp
https://thisismagma.com/assets/home/roadmap/seq/47.webp
https://thisismagma.com/assets/home/roadmap/seq/48.webp
https://thisismagma.com/assets/home/roadmap/seq/49.webp
https://thisismagma.com/assets/home/roadmap/seq/50.webp
https://thisismagma.com/assets/home/roadmap/seq/51.webp
https://thisismagma.com/assets/home/roadmap/seq/52.webp
https://thisismagma.com/assets/home/roadmap/seq/53.webp
https://thisismagma.com/assets/home/roadmap/seq/54.webp
https://thisismagma.com/assets/home/roadmap/seq/55.webp
https://thisismagma.com/assets/home/roadmap/seq/56.webp
https://thisismagma.com/assets/home/roadmap/seq/57.webp
https://thisismagma.com/assets/home/roadmap/seq/58.webp
https://thisismagma.com/assets/home/roadmap/seq/59.webp
https://thisismagma.com/assets/home/roadmap/seq/60.webp
https://thisismagma.com/assets/home/roadmap/seq/61.webp
https://thisismagma.com/assets/home/roadmap/seq/62.webp
https://thisismagma.com/assets/home/roadmap/seq/63.webp
https://thisismagma.com/assets/home/roadmap/seq/64.webp
https://thisismagma.com/assets/home/roadmap/seq/65.webp
https://thisismagma.com/assets/home/roadmap/seq/66.webp
https://thisismagma.com/assets/home/roadmap/seq/67.webp
https://thisismagma.com/assets/home/roadmap/seq/68.webp
https://thisismagma.com/assets/home/roadmap/seq/69.webp
https://thisismagma.com/assets/home/roadmap/seq/70.webp
https://thisismagma.com/assets/home/roadmap/seq/71.webp
https://thisismagma.com/assets/home/roadmap/seq/72.webp
https://thisismagma.com/assets/home/roadmap/seq/73.webp
https://thisismagma.com/assets/home/roadmap/seq/74.webp
https://thisismagma.com/assets/home/roadmap/seq/75.webp
     `;
    return data.split("\n")[index];
  }

  const frameCount = 75;

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
      trigger: `#page6`,
      start: `top 0%`,
      end: `600% top`,
      scroller: `#main`,
      onUpdate: (a) => {
        if (Math.floor(a.progress * 100) <= 60) {
          document.querySelector(".circle h1").textContent = Math.floor(a.progress * 100) + '%'
        }
      }
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var squareSize = Math.min(canvas.width, canvas.height);
    var hRatio = squareSize / img.width;
    var vRatio = squareSize / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var newWidth = img.width * ratio;
    var newHeight = img.height * ratio;

    // Calculate center shift based on the square canvas
    var centerShift_x = (squareSize - newWidth) / 2;
    var centerShift_y = (squareSize - newHeight) / 2;

    ctx.clearRect(0, 0, squareSize, squareSize);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      newWidth,
      newHeight
    );
  }

  ScrollTrigger.create({

    trigger: "#page6",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
}
canva4();

gsap.timeline({
  ease: "linear",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page6",
    start: "top top",
    end: "600% top",
    scrub: .5
  }
})
  .from("#page6 .row:nth-child(2)", {
    color: "white",
  }, 'as')
  .to("#page6 .row", {
    y: "-100%",
  }, 'as')
  .to("#page6 .row:nth-child(3)", {
    color: "white",
  }, 'as')
  .to("#page6 .row:nth-child(3)", {
    color: "#3551a5",
  }, 'ast')
  .to("#page6 .row", {
    y: "-200%"
  }, 'ast')
  .to("#page6 .row:nth-child(4)", {
    color: "white",

  }, 'ast')
  .to("#page6 .row:nth-child(4)", {
    color: "#3551a5",
  }, 'asth')
  .to("#page6 .row", {
    y: "-300%"
  }, 'asth')
  .to("#page6 .row:nth-child(5)", {
    color: "white",
  }, 'asth')

gsap.to("#page6 .row:nth-child(5)", {
  color: "#3551a5",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page7",
    start: "-10% 90%",
    scrub: 1,
  }
})


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }

});

gsap.to(".inf-bar", {
  transform: `translateX(0%)`,
  repeat: -1,
  ease: "linear",
  duration: 18
})

gsap.to(".nav1 ,.nav2 #book", {
  y: "-180%",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1",
    start: "5% 3%",
    scrub: 1,
    end: "15% 10%",
  }
})


function splitcolor(e) {
  var clutter = '';
  document.querySelector(`${e} h1`).textContent.split(``).forEach(function (e) {
    clutter += `<span>${e}</span>`
  })
  document.querySelector(`${e} h1`).innerHTML = clutter

  gsap.from(`${e} h1 span`, {
    opacity: .3,
    stagger: .5,
    scrollTrigger: {
      scroller: `#main`,
      trigger: `${e} h1`,
      start: `top 70%`,
      end: `top 20%`,
      scrub: 1
    }
  })

}
splitcolor("#page2")
splitcolor("#page3")
splitcolor("#page4")

function cursormove(){
  const c = document.querySelector("#cursor")
document.querySelector("#page7 .swiper").addEventListener("mousemove",function(dets){
  gsap.to(c,{
    x:dets.clientX - c.clientWidth/2,
    y:dets.clientY -c.clientHeight/2,
  })
})
document.querySelector("#page7 .swiper").addEventListener("mouseenter",function(){
  gsap.to(c,{
    scale:1
  })
})
document.querySelector("#page7 .swiper").addEventListener("mouseleave",function(){
  gsap.to(c,{
    scale:0
  })
})
}
cursormove();

function front(){
  var count = 0;
  var random = 0;
  var inter = setInterval(function(){
    count+=4;
    if(count <= 100){
      document.querySelector("#front > h1").textContent = count + '%';
    }else{
      gsap.timeline()
      .to("#front h1",{
        opacity:0,
      })
      .to("#front",{
        height:0
      })
      clearInterval(inter);
    }
  },100)
}
gsap.from("#front .hiden h1 ",{
  y:'300%',
  opacity:0,
  rotate:30,
  scrollTrigger:{
    scroller:'#main',
    trigger:"#front",
    start:"top 1%",
    onComplete:setTimeout(front,500)
  }
})

