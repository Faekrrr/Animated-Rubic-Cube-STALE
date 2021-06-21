import * as THREE from 'three';

//Document Sizeing adjustment


//------------------

//Scene & Render
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer( { antialias: true } );
const backgroundColor = new THREE.Color( 0x000000 );
scene.background = backgroundColor;
//------------------


//Camera
const camera = new THREE.PerspectiveCamera(75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000);
camera.position.z = 15;
//------------------

//Texture Import
const texture = new THREE.TextureLoader().load( "assets/pz.png" );
//------------------

//Cubes
const geometry =  new THREE.BoxGeometry( 1.25, 1.25, 1.25 );
const linesGeometry =  new THREE.BoxGeometry( 1.25, 1.25, 1.25 );
const materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const edges = new THREE.EdgesGeometry( linesGeometry );
const lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 10 } );
//Front Cubes
const cube1     =       new THREE.Mesh( geometry, materialFront );
const line1     =       new THREE.LineSegments( edges, lineMaterial );

const cube2     =       new THREE.Mesh( geometry, materialFront );
const line2     =       new THREE.LineSegments( edges, lineMaterial );

const cube3     =       new THREE.Mesh( geometry, materialFront );
const line3     =       new THREE.LineSegments( edges, lineMaterial );

const cube4     =       new THREE.Mesh( geometry, materialFront );
const line4     =       new THREE.LineSegments( edges, lineMaterial );

const cube5     =       new THREE.Mesh( geometry, materialFront );
const line5     =       new THREE.LineSegments( edges, lineMaterial );

const cube6     =       new THREE.Mesh( geometry, materialFront );
const line6     =       new THREE.LineSegments( edges, lineMaterial );

const cube7     =       new THREE.Mesh( geometry, materialFront );
const line7     =       new THREE.LineSegments( edges, lineMaterial );

const cube8     =       new THREE.Mesh( geometry, materialFront );
const line8     =       new THREE.LineSegments( edges, lineMaterial );

const cube9     =       new THREE.Mesh( geometry, materialFront );
const line9     =       new THREE.LineSegments( edges, lineMaterial );


cube1.position.x = -1.25;   cube1.position.y = 1.25;    cube1.position.z = 1.25;
line1.position.x = -1.25;   line1.position.y = 1.25;    line1.position.z = 1.25;

cube2.position.x = 0;       cube2.position.y = 1.25;    cube2.position.z = 1.25; 
line2.position.x = 0;       line2.position.y = 1.25;    line2.position.z = 1.25; 

cube3.position.x = 1.25;    cube3.position.y = 1.25;    cube3.position.z = 1.25;
line3.position.x = 1.25;    line3.position.y = 1.25;    line3.position.z = 1.25;


cube4.position.x = -1.25;   cube4.position.y = 0;       cube4.position.z = 1.25;
line4.position.x = -1.25;   line4.position.y = 0;       line4.position.z = 1.25;

cube5.position.x = 0;       cube5.position.y = 0;       cube5.position.z = 1.25;
line5.position.x = 0;       line5.position.y = 0;       line5.position.z = 1.25;

cube6.position.x = 1.25;    cube6.position.y = 0;       cube6.position.z = 1.25;
line6.position.x = 1.25;    line6.position.y = 0;       line6.position.z = 1.25;


cube7.position.x = -1.25;   cube7.position.y = -1.25;   cube7.position.z = 1.25;
line7.position.x = -1.25;   line7.position.y = -1.25;   line7.position.z = 1.25;

cube8.position.x = 0;       cube8.position.y = -1.25;   cube8.position.z = 1.25;
line8.position.x = 0;       line8.position.y = -1.25;   line8.position.z = 1.25;

cube9.position.x = 1.25;    cube9.position.y = -1.25;   cube9.position.z = 1.25;
line9.position.x = 1.25;    line9.position.y = -1.25;   line9.position.z = 1.25;


// Middle cubes
const materialMiddle = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube10    =      new THREE.Mesh( geometry, materialMiddle );
const line10     =       new THREE.LineSegments( edges, lineMaterial );

const cube11    =      new THREE.Mesh( geometry, materialMiddle );
const line11    =       new THREE.LineSegments( edges, lineMaterial );

const cube12    =      new THREE.Mesh( geometry, materialMiddle );
const line12     =       new THREE.LineSegments( edges, lineMaterial );

const cube13    =      new THREE.Mesh( geometry, materialMiddle );
const line13     =       new THREE.LineSegments( edges, lineMaterial );

const cube14    =      new THREE.Mesh( geometry, materialMiddle );
const line14     =       new THREE.LineSegments( edges, lineMaterial );

const cube15    =      new THREE.Mesh( geometry, materialMiddle );
const line15     =       new THREE.LineSegments( edges, lineMaterial );

const cube16    =      new THREE.Mesh( geometry, materialMiddle );
const line16     =       new THREE.LineSegments( edges, lineMaterial );

const cube17    =      new THREE.Mesh( geometry, materialMiddle );
const line17     =       new THREE.LineSegments( edges, lineMaterial );

const cube18    =      new THREE.Mesh( geometry, materialMiddle );
const line18     =       new THREE.LineSegments( edges, lineMaterial );


cube10.position.x = -1.25;   cube10.position.y = 1.25;    cube10.position.z = 0;
line10.position.x = -1.25;   line10.position.y = 1.25;    line10.position.z = 0;

cube11.position.x = 0;       cube11.position.y = 1.25;    cube11.position.z = 0;  
line11.position.x = 0;       line11.position.y = 1.25;    line11.position.z = 0; 

cube12.position.x = 1.25;    cube12.position.y = 1.25;    cube12.position.z = 0;
line12.position.x = 1.25;    line12.position.y = 1.25;    line12.position.z = 0;


cube13.position.x = -1.25;   cube13.position.y = 0;       cube13.position.z = 0;
line13.position.x = -1.25;   line13.position.y = 0;       line13.position.z = 0;

cube14.position.x = 0;       cube14.position.y = 0;       cube14.position.z = 0;
line14.position.x = 0;       line14.position.y = 0;       line14.position.z = 0;

cube15.position.x = 1.25;    cube15.position.y = 0;       cube15.position.z = 0;
line15.position.x = 1.25;    line15.position.y = 0;       line15.position.z = 0;


cube16.position.x = -1.25;   cube16.position.y = -1.25;   cube16.position.z = 0;
line16.position.x = -1.25;   line16.position.y = -1.25;   line16.position.z = 0;

cube17.position.x = 0;       cube17.position.y = -1.25;   cube17.position.z = 0;
line17.position.x = 0;       line17.position.y = -1.25;   line17.position.z = 0;

cube18.position.x = 1.25;    cube18.position.y = -1.25;   cube18.position.z = 0;
line18.position.x = 1.25;    line18.position.y = -1.25;   line18.position.z = 0;

// Middle cubes
const materialBack = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

const cube19    =      new THREE.Mesh( geometry, materialBack );
const line19     =       new THREE.LineSegments( edges, lineMaterial );

const cube20    =      new THREE.Mesh( geometry, materialBack );
const line20     =       new THREE.LineSegments( edges, lineMaterial );

const cube21    =      new THREE.Mesh( geometry, materialBack );
const line21     =       new THREE.LineSegments( edges, lineMaterial );

const cube22    =      new THREE.Mesh( geometry, materialBack );
const line22     =       new THREE.LineSegments( edges, lineMaterial );

const cube23    =      new THREE.Mesh( geometry, materialBack );
const line23     =       new THREE.LineSegments( edges, lineMaterial );

const cube24    =      new THREE.Mesh( geometry, materialBack );
const line24     =       new THREE.LineSegments( edges, lineMaterial );

const cube25    =      new THREE.Mesh( geometry, materialBack );
const line25     =       new THREE.LineSegments( edges, lineMaterial );

const cube26    =      new THREE.Mesh( geometry, materialBack );
const line26     =       new THREE.LineSegments( edges, lineMaterial );

const cube27    =      new THREE.Mesh( geometry, materialBack );
const line27     =       new THREE.LineSegments( edges, lineMaterial );


cube19.position.x = -1.25;   cube19.position.y = 1.25;    cube19.position.z = -1.25;
line19.position.x = -1.25;   line19.position.y = 1.25;    line19.position.z = -1.25;

cube20.position.x = 0;       cube20.position.y = 1.25;    cube20.position.z = -1.25; 
line20.position.x = 0;       line20.position.y = 1.25;    line20.position.z = -1.25; 

cube21.position.x = 1.25;    cube21.position.y = 1.25;    cube21.position.z = -1.25;
line21.position.x = 1.25;    line21.position.y = 1.25;    line21.position.z = -1.25;


cube22.position.x = -1.25;   cube22.position.y = 0;       cube22.position.z = -1.25;
line22.position.x = -1.25;   line22.position.y = 0;       line22.position.z = -1.25;

cube23.position.x = 0;       cube23.position.y = 0;       cube23.position.z = -1.25;
line23.position.x = 0;       line23.position.y = 0;       line23.position.z = -1.25;

cube24.position.x = 1.25;    cube24.position.y = 0;       cube24.position.z = -1.25;
line24.position.x = 1.25;    line24.position.y = 0;       line24.position.z = -1.25;


cube25.position.x = -1.25;   cube25.position.y = -1.25;   cube25.position.z = -1.25;
line25.position.x = -1.25;   line25.position.y = -1.25;   line25.position.z = -1.25;

cube26.position.x = 0;       cube26.position.y = -1.25;   cube26.position.z = -1.25;
line26.position.x = 0;       line26.position.y = -1.25;   line26.position.z = -1.25;

cube27.position.x = 1.25;    cube27.position.y = -1.25;   cube27.position.z = -1.25;
line27.position.x = 1.25;    line27.position.y = -1.25;   line27.position.z = -1.25;


//------------------
const cubeTopHor = new THREE.Group();
const cubeMidHor = new THREE.Group();
const cubeBotHor = new THREE.Group();

const cubeRightVer = new THREE.Group();
const cubeMidVer = new THREE.Group();
const cubeLeftVer = new THREE.Group();

cubeTopHor.add( cube1, cube2, cube3,
                cube10, cube11, cube12,
                cube19, cube20, cube21 );
                cubeTopHor.name = 'cubeTopHor';


//Scene Creating sector

scene.add( cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9 );
scene.add( cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18 );
scene.add( cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26, cube27 );

scene.add( line1, line2, line3, line4, line5, line6, line7, line8, line9 );
scene.add( line10, line11, line12, line13, line14, line15, line16, line17, line18 );
scene.add( line19, line20, line21, line22, line23, line24, line25, line26, line27 );

renderer.setAnimationLoop( function () {
renderer.render( scene, camera );
} );

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//------------------

//Animation & working

let mouseDown = false, mouseX = 0, mouseY = 0;
let canvas = renderer.domElement;
let PAUSE = false;
let animationID;

let AnimationSpeed = 0.02;
let animationEdgeMax = 3;
let animationEdgeMin = 1.25;

let cameraDirection = 1;
let cameraPosition = 0.022;

let RotationRate = 0.0089;

scene.rotation.x = -1;
scene.rotation.z = -1;
let RotationRatee = 0;
let animationDirection = 1;

function animate(){ 
    animationID = requestAnimationFrame( animate );
    scene.rotation.y += 0.00; scene.rotation.y += 0.00; scene.rotation.z += 0.02;
    
    camera.position.z += cameraPosition * cameraDirection; 

    if(PAUSE === true){
        cancelAnimationFrame( animationID );
        }

    if (cube1.position.y >= animationEdgeMax){
        animationDirection = -1;
        cameraDirection = 1;
    }
    if ( cube1.position.y <= animationEdgeMin){
        animationDirection = 1;
        cameraDirection = -1;

        cube1.rotation.z = RotationRatee;
        line1.rotation.z = RotationRatee;
    
        cube2.rotation.z = RotationRatee;
        line2.rotation.z = RotationRatee;
        
        cube3.rotation.z = RotationRatee;
        line3.rotation.z = RotationRatee;
    
        cube4.rotation.z = RotationRatee;
        line4.rotation.z = RotationRatee;
        
        cube5.rotation.z = RotationRatee;
        line5.rotation.z = RotationRatee;
    
        cube6.rotation.z = RotationRatee;
        line6.rotation.z = RotationRatee;
    
        cube7.rotation.z = RotationRatee;
        line7.rotation.z = RotationRatee;
    
        cube8.rotation.z = RotationRatee;
        line8.rotation.z = RotationRatee;
    
        cube9.rotation.z = RotationRatee;
        line9.rotation.z = RotationRatee;
    
        cube10.rotation.z = RotationRatee;
        line10.rotation.z = RotationRatee;
    
        cube11.rotation.z = RotationRatee;
        line11.rotation.z = RotationRatee;
    
        cube12.rotation.z = RotationRatee;
        line12.rotation.z = RotationRatee;
    
        cube13.rotation.z = RotationRatee;
        line13.rotation.z = RotationRatee;
    
        cube14.rotation.z = RotationRatee;
        line14.rotation.z = RotationRatee;
    
        cube15.rotation.z = RotationRatee;
        line15.rotation.z = RotationRatee;
    
        cube16.rotation.z = RotationRatee;
        line16.rotation.z = RotationRatee;
    
        cube17.rotation.z = RotationRatee;
        line17.rotation.z = RotationRatee;
    
        cube18.rotation.z = RotationRatee;
        line18.rotation.z = RotationRatee;
    
        cube19.rotation.z = RotationRatee;
        line19.rotation.z = RotationRatee;
    
        cube20.rotation.z = RotationRatee;
        line20.rotation.z = RotationRatee;
    
        cube21.rotation.z = RotationRatee;
        line21.rotation.z = RotationRatee;
    
        cube22.rotation.z = RotationRatee;
        line22.rotation.z = RotationRatee;
    
        cube23.rotation.z = RotationRatee;
        line23.rotation.z = RotationRatee;
    
        cube24.rotation.z = RotationRatee;
        line24.rotation.z = RotationRatee;
    
        cube25.rotation.z = RotationRatee;
        line25.rotation.z = RotationRatee;
    
        cube26.rotation.z = RotationRatee;
        line26.rotation.z = RotationRatee;
    
        cube27.rotation.z = RotationRatee;
        line27.rotation.z = RotationRatee;

    }

    cube1.rotation.z += RotationRate;
    line1.rotation.z += RotationRate;

    cube2.rotation.z -= RotationRate;
    line2.rotation.z -= RotationRate;
    
    cube3.rotation.z += RotationRate;
    line3.rotation.z += RotationRate;

    cube4.rotation.z -= RotationRate;
    line4.rotation.z -= RotationRate;
    
    cube5.rotation.z += RotationRate;
    line5.rotation.z += RotationRate;

    cube6.rotation.z -= RotationRate;
    line6.rotation.z -= RotationRate;

    cube7.rotation.z += RotationRate;
    line7.rotation.z += RotationRate;

    cube8.rotation.z -= RotationRate;
    line8.rotation.z -= RotationRate;

    cube9.rotation.z += RotationRate;
    line9.rotation.z += RotationRate;

    cube10.rotation.z -= RotationRate;
    line10.rotation.z -= RotationRate;

    cube11.rotation.z += RotationRate;
    line11.rotation.z += RotationRate;

    cube12.rotation.z -= RotationRate;
    line12.rotation.z -= RotationRate;

    cube13.rotation.z -= RotationRate;
    line13.rotation.z -= RotationRate;

    cube14.rotation.z += RotationRate;
    line14.rotation.z += RotationRate;

    cube15.rotation.z += RotationRate;
    line15.rotation.z += RotationRate;

    cube16.rotation.z += RotationRate;
    line16.rotation.z += RotationRate;

    cube17.rotation.z += RotationRate;
    line17.rotation.z += RotationRate;

    cube18.rotation.z += RotationRate;
    line18.rotation.z += RotationRate;

    cube19.rotation.z += RotationRate;
    line19.rotation.z += RotationRate;

    cube20.rotation.z += RotationRate;
    line20.rotation.z += RotationRate;

    cube21.rotation.z += RotationRate;
    line21.rotation.z += RotationRate;

    cube22.rotation.z += RotationRate;
    line22.rotation.z += RotationRate;

    cube23.rotation.z += RotationRate;
    line23.rotation.z += RotationRate;

    cube24.rotation.z += RotationRate;
    line24.rotation.z += RotationRate;

    cube25.rotation.z += RotationRate;
    line25.rotation.z += RotationRate;

    cube26.rotation.z += RotationRate;
    line26.rotation.z += RotationRate;

    cube27.rotation.z += RotationRate;
    line27.rotation.z += RotationRate;

    //TOP
    //Cube1
        cube1.position.x -= animationDirection * AnimationSpeed;
        cube1.position.y += animationDirection * AnimationSpeed;
        cube1.position.z += animationDirection * AnimationSpeed;
        line1.position.x -= animationDirection * AnimationSpeed;
        line1.position.y += animationDirection * AnimationSpeed;
        line1.position.z += animationDirection * AnimationSpeed;
    
    //Cube2
        // cube2.position.x -= animationDirection * AnimationSpeed;
        cube2.position.y += animationDirection * AnimationSpeed;
        // cube2.position.z += animationDirection * AnimationSpeed;
        // line2.position.x -= animationDirection * AnimationSpeed;
        line2.position.y += animationDirection * AnimationSpeed;
        // line2.position.z += animationDirection * AnimationSpeed;

    //Cube3
        cube3.position.x += animationDirection * AnimationSpeed;
        cube3.position.y += animationDirection * AnimationSpeed;
        cube3.position.z += animationDirection * AnimationSpeed;
        line3.position.x += animationDirection * AnimationSpeed;
        line3.position.y += animationDirection * AnimationSpeed;
        line3.position.z += animationDirection * AnimationSpeed;

    //Cube4
        cube4.position.x -= animationDirection * AnimationSpeed;
        // cube4.position.y += animationDirection * AnimationSpeed;
        // cube4.position.z += animationDirection * AnimationSpeed;
        line4.position.x -= animationDirection * AnimationSpeed;
        // line4.position.y += animationDirection * AnimationSpeed;
        // line4.position.z += animationDirection * AnimationSpeed;

    //Cube5
        // cube5.position.x += animationDirection * AnimationSpeed;
        // cube5.position.y += animationDirection * AnimationSpeed;
        cube5.position.z += animationDirection * AnimationSpeed;
        // line5.position.x += animationDirection * AnimationSpeed;
        // line5.position.y += animationDirection * AnimationSpeed;
        line5.position.z += animationDirection * AnimationSpeed;

    //Cube6
        cube6.position.x += animationDirection * AnimationSpeed;
        // cube6.position.y += animationDirection * AnimationSpeed;
        // cube6.position.z += animationDirection * AnimationSpeed;
        line6.position.x += animationDirection * AnimationSpeed;
        // line6.position.y += animationDirection * AnimationSpeed;
        // line6.position.z += animationDirection * AnimationSpeed;

    //Cube7
        cube7.position.x -= animationDirection * AnimationSpeed;
        cube7.position.y -= animationDirection * AnimationSpeed;
        cube7.position.z += animationDirection * AnimationSpeed;
        line7.position.x -= animationDirection * AnimationSpeed;
        line7.position.y -= animationDirection * AnimationSpeed;
        line7.position.z += animationDirection * AnimationSpeed;

    //Cube8
        // cube2.position.x -= animationDirection * AnimationSpeed;
        cube8.position.y -= animationDirection * AnimationSpeed;
        // cube2.position.z += animationDirection * AnimationSpeed;
        // line2.position.x -= animationDirection * AnimationSpeed;
        line8.position.y -= animationDirection * AnimationSpeed;
        // line2.position.z += animationDirection * AnimationSpeed;

    //Cube9
        cube9.position.x += animationDirection * AnimationSpeed;
        cube9.position.y -= animationDirection * AnimationSpeed;
        cube9.position.z += animationDirection * AnimationSpeed;
        line9.position.x += animationDirection * AnimationSpeed;
        line9.position.y -= animationDirection * AnimationSpeed;
        line9.position.z += animationDirection * AnimationSpeed;

    //MIDDLE
    //Cube10
        cube10.position.x -= animationDirection * AnimationSpeed;
        cube10.position.y += animationDirection * AnimationSpeed;
        // cube10.position.z += animationDirection * AnimationSpeed;
        line10.position.x -= animationDirection * AnimationSpeed;
        line10.position.y += animationDirection * AnimationSpeed;
        // line10.position.z += animationDirection * AnimationSpeed;
    
    //Cube11
        // cube11.position.x -= animationDirection * AnimationSpeed;
        cube11.position.y += animationDirection * AnimationSpeed * 2;
        // cube11.position.z += animationDirection * AnimationSpeed;
        // line11.position.x -= animationDirection * AnimationSpeed;
        line11.position.y += animationDirection * AnimationSpeed * 2;
        // line11.position.z += animationDirection * AnimationSpeed;

    //Cube12
        cube12.position.x += animationDirection * AnimationSpeed;
        cube12.position.y += animationDirection * AnimationSpeed;
        // cube12.position.z += animationDirection * AnimationSpeed;
        line12.position.x += animationDirection * AnimationSpeed;
        line12.position.y += animationDirection * AnimationSpeed;
        // line12.position.z += animationDirection * AnimationSpeed;

    //Cube13
        cube13.position.x -= animationDirection * AnimationSpeed * 2;
        // cube13.position.y += animationDirection * AnimationSpeed * 2;
        // cube13.position.z += animationDirection * AnimationSpeed;
        line13.position.x -= animationDirection * AnimationSpeed * 2;
        // line13.position.y += animationDirection * AnimationSpeed * 2;
        // line13.position.z += animationDirection * AnimationSpeed * 2;

    //Cube14
        cube14.rotation.z += 0.009;
        line14.rotation.z += 0.009;

    //Cube15
        cube15.position.x += animationDirection * AnimationSpeed * 2;
        // cube15.position.y += animationDirection * AnimationSpeed * 2;
        // cube15.position.z += animationDirection * AnimationSpeed;
        line15.position.x += animationDirection * AnimationSpeed * 2;
        // line15.position.y += animationDirection * AnimationSpeed * 2;
        // line15.position.z += animationDirection * AnimationSpeed * 2;

    //Cube16
        cube16.position.x -= animationDirection * AnimationSpeed;
        cube16.position.y -= animationDirection * AnimationSpeed;
        // cube16.position.z += animationDirection * AnimationSpeed;
        line16.position.x -= animationDirection * AnimationSpeed;
        line16.position.y -= animationDirection * AnimationSpeed;
        // line16.position.z += animationDirection * AnimationSpeed;

    //Cube17
        // cube17.position.x += animationDirection * AnimationSpeed * 2;
        cube17.position.y -= animationDirection * AnimationSpeed * 2;
        // cube17.position.z += animationDirection * AnimationSpeed;
        // line17.position.x -= animationDirection * AnimationSpeed * 2;
        line17.position.y -= animationDirection * AnimationSpeed * 2;
        // line17.position.z += animationDirection * AnimationSpeed * 2;

    //Cube18
        cube18.position.x += animationDirection * AnimationSpeed;
        cube18.position.y -= animationDirection * AnimationSpeed;
        // cube18.position.z += animationDirection * AnimationSpeed;
        line18.position.x += animationDirection * AnimationSpeed;
        line18.position.y -= animationDirection * AnimationSpeed;
        // line18.position.z += animationDirection * AnimationSpeed;

    //Cube19
        cube19.position.x -= animationDirection * AnimationSpeed;
        cube19.position.y += animationDirection * AnimationSpeed;
        cube19.position.z -= animationDirection * AnimationSpeed;
        line19.position.x -= animationDirection * AnimationSpeed;
        line19.position.y += animationDirection * AnimationSpeed;
        line19.position.z -= animationDirection * AnimationSpeed;

    //Cube20
        // cube20.position.x -= animationDirection * AnimationSpeed;
        cube20.position.y += animationDirection * AnimationSpeed;
        // cube20.position.z -= animationDirection * AnimationSpeed;
        // line20.position.x -= animationDirection * AnimationSpeed;
        line20.position.y += animationDirection * AnimationSpeed;
        // line20.position.z -= animationDirection * AnimationSpeed;

    //Cube21
        cube21.position.x += animationDirection * AnimationSpeed;
        cube21.position.y += animationDirection * AnimationSpeed;
        cube21.position.z -= animationDirection * AnimationSpeed;
        line21.position.x += animationDirection * AnimationSpeed;
        line21.position.y += animationDirection * AnimationSpeed;
        line21.position.z -= animationDirection * AnimationSpeed;

    //Cube22
        cube22.position.x -= animationDirection * AnimationSpeed;
        // cube22.position.y -= animationDirection * AnimationSpeed;
        // cube22.position.z -= animationDirection * AnimationSpeed;
        line22.position.x -= animationDirection * AnimationSpeed;
        // line22.position.y -= animationDirection * AnimationSpeed;
        // line22.position.z -= animationDirection * AnimationSpeed;

    //Cube23
        cube23.position.z -= animationDirection * AnimationSpeed;
        line23.position.z -= animationDirection * AnimationSpeed;

    //Cube24
        cube24.position.x += animationDirection * AnimationSpeed;
        // cube24.position.y -= animationDirection * AnimationSpeed;
        // cube24.position.z -= animationDirection * AnimationSpeed;
        line24.position.x += animationDirection * AnimationSpeed;
        // line24.position.y -= animationDirection * AnimationSpeed;
        // line24.position.z -= animationDirection * AnimationSpeed;

    //Cube25
        cube25.position.x -= animationDirection * AnimationSpeed;
        cube25.position.y -= animationDirection * AnimationSpeed;
        cube25.position.z -= animationDirection * AnimationSpeed;
        line25.position.x -= animationDirection * AnimationSpeed;
        line25.position.y -= animationDirection * AnimationSpeed;
        line25.position.z -= animationDirection * AnimationSpeed;

    //Cube26
        // cube26.position.x += animationDirection * AnimationSpeed;
        cube26.position.y -= animationDirection * AnimationSpeed;
        // cube26.position.z -= animationDirection * AnimationSpeed;
        // line26.position.x += animationDirection * AnimationSpeed;
        line26.position.y -= animationDirection * AnimationSpeed;
        // line26.position.z -= animationDirection * AnimationSpeed;

    //Cube27
        cube27.position.x += animationDirection * AnimationSpeed;
        cube27.position.y -= animationDirection * AnimationSpeed;
        cube27.position.z -= animationDirection * AnimationSpeed;
        line27.position.x += animationDirection * AnimationSpeed;
        line27.position.y -= animationDirection * AnimationSpeed;
        line27.position.z -= animationDirection * AnimationSpeed;

    }

canvas.addEventListener('mousedown', function(evt) {
        evt.preventDefault();
        mouseDown = true;
        mouseX = evt.clientX;
        mouseY = evt.clientY;
        PAUSE = true; 
    }, false);

canvas.addEventListener('mousemove', function (evt) {
    if (!mouseDown) {return} // is the button pressed?
    evt.preventDefault();
    let deltaX = evt.clientX - mouseX,
        deltaY = evt.clientY - mouseY;
        mouseX = evt.clientX;
        mouseY = evt.clientY;
        let object = scene;
        dragAction(deltaX, deltaY, object);
    }, false);

function dragAction(deltaX: number, deltaY: number, object: THREE.Scene) {
    object.rotation.z += deltaX / 200;
    console.log(object.name);
    object.rotation.x += deltaY / 200;
}

document.addEventListener( 'wheel', (event) => {
    camera.position.z += event.deltaY / 100;
});


canvas.addEventListener('mouseup', function (evt) {
    evt.preventDefault();
    mouseDown = false;
    PAUSE = false;
    animate();
}, false);
//------------------
animate( );