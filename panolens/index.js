var panorama, viewer, container, infospot, infospot2, textureLoader, tex1, tex2;

container = document.querySelector( '#container' );
textureLoader = new THREE.TextureLoader();
tex1 = textureLoader.load( 'mancha-texto-esbonito.png' );
tex2 = textureLoader.load( 'mancha-esbonito.png' );


//panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );
panorama = new PANOLENS.ImagePanorama( 
  //'escenario%202-david.jpg'
    'equirectangular.png'                                 );

// Default infospot
infospot = new PANOLENS.Infospot( 
  600, 
  "mancha-texto-esbonito.png"
);

infospot.position.set( 1000, 100, -2000 );
infospot.addHoverText( "Default Infospot", 100 );
infospot.addEventListener( "click", function(){
  this.focus();
} );

// Custom infospot
infospot2 = new PANOLENS.Infospot( 
  600, 
  "mancha-texto-esbonito.png", false
);

infospot2.material.rotation = 30 * Math.PI / 180;
infospot2.position.set( -1000, 100, -2000 );
infospot2.addHoverText( "Custom Infospot", 80 );
infospot2.addEventListener( "click", function(){
  this.focus();
} );
infospot2.addEventListener( 'hoverenter', function( event ){
  this.material.opacity = 0.6;
  this.material.color.set( 0x00ff00 * Math.random() );
  this.material.map = tex2;
  this.scale.x *= 2;
  this.scale.y *= 2;
} );
infospot2.addEventListener( 'hoverleave', function( event ){
  this.material.opacity = 1;
  this.material.color.set( 0xffffff );
  this.material.map = tex1;
  this.scale.x /= 2;
  this.scale.y /= 2;
} );

panorama.add( infospot, infospot2 );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama );