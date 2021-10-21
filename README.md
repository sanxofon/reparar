##  REPARAR, extendamos la vida útil de las cosas

**Descripción:** Imágenes panorámicas 360 interactivas en Web (PHP/HTML/JS/CSS).

**Requerimientos desde diseño:** Imagen de fondo y elementos interactivos dentro de cada escena (imagen/audio/video/enlaces)

Los datos se subirán al repositorio en GitHub:
 - https://github.com/sanxofon/reparar/

La imagen de prueba está en línea acá:
 - https://sanxofon.github.io/reparar/escenario%202-david.jpghttps://codepen.io/sanxofon/full/qBXNyNa

Una primera versión de prueba (Panolens.js) está acá:
 - https://codepen.io/sanxofon/full/qBXNyNa

La carpeta en GDrive y el documento GDocs se pueden accesar acá:

    drive.google.com/drive/folders/1rTLXGpiZ0Zta5F8fQbAQj57p93fDhPK_?usp=sharing
    docs.google.com/document/d/1jektWKxsRtS_qN8NguuWhu2Rrr_bRBiAewd75myPH8I/edit?usp=sharing

### Análisis de librerías y servicios relacionados

#### Software pago:
 - https://www.theasys.io/samples/ 20-24 USD / mes
 - https://www.momento360.com/  5-6 USD / mes
 - https://kuula.co/    16-20 USD / mes
 - https://panoraven.com/   15-19 USD / mes
 - https://360player.io/    11-12 USD / mes

Ninguno me pareció suficientemente bueno como para que valga la pena pagar por ellos. Más bien me parecieron más simples que lo que se puede lograr con algunos de código abierto.

#### Software abierto:

##### 360 Image Viewer
 - http://360-image-viewer-test.surge.sh/
 - https://github.com/Jam3/360-image-viewer

##### Photo Sphere Viewer
 - https://photo-sphere-viewer.js.org/
 - https://jsfiddle.net/mistic100/5r684etx/
 - https://github.com/mistic100/Photo-Sphere-Viewer

##### Pannellum
 - https://pannellum.org
 - https://pannellum.org/documentation/examples/hot-spots/
 - https://pannellum.org/documentation/examples/tour/
 - https://github.com/mpetroff/pannellum

##### PanoViewer
 - https://naver.github.io/egjs-view360/panoviewer.html
 - https://naver.github.io/egjs-view360/examples/panoviewer/etc/hotspot.html
 - https://naver.github.io/egjs-view360/panoviewer.html#projections
 - https://github.com/naver/egjs-view360

##### A-Frame
 - https://aframe.io/
 - https://aframe.io/examples/showcase/
 - https://aframe.io/examples/showcase/sky/

##### Marzipano
 - https://www.marzipano.net/
 - https://www.marzipano.net/demos.html
 - https://www.marzipano.net/tool/
 - https://www.marzipano.net/demos/hotspot-styles/
 - https://www.marzipano.net/demos/embedded-hotspots/
 - https://www.marzipano.net/demos/transitions/
 - https://www.marzipano.net/demos/layer-effects/
 - https://www.marzipano.net/demos/cube-generated/
 - https://github.com/google/marzipano

##### Panolens.js
 - https://pchen66.github.io/Panolens/
 - https://pchen66.github.io/Panolens/#Example
 - https://pchen66.github.io/Panolens/examples/panorama_infospot_focus.html
 - https://pchen66.github.io/Panolens/examples/panorama_storytelling.html
 - https://pchen66.github.io/Panolens/examples/panorama_interactive.html
 - https://codepen.io/pchen66/pen/dRYNNG
 - https://github.com/pchen66/panolens.js

Mis opciones favoritas son **Marzipano** y **Panolens.js**

#### Imágenes equirectangulares y cubemaps

##### Equirectangular

![Grid de equirectangular](https://github.com/sanxofon/reparar/blob/main/Equirectangular-Grid-1849x948.jpg?raw=true)

##### Cubemap

![Ejemplo de Cubremap](https://github.com/sanxofon/reparar/blob/main/cubemap-example-1.jpg?raw=true)

#### Herramientas en línea para ayudar al diseño

Para testear rápido una imagen en la proyección encontré:

 - http://panoramaviewer.1bestlink.net/
 - https://www.marzipano.net/tool/
 - https://360toolkit.co/

Esta última también es una herramienta para convertir **Cubemap** <=> **Equirectangular**
 - https://graphicdesign.stackexchange.com/questions/84774/how-to-convert-a-normal-photo-into-an-equirectangular-image

Herramienta para convertir de Panorama a Cubemap:
 - https://jaxry.github.io/panorama-to-cubemap/

Otra similar:
 - https://jonaszeitler.se/cubemap-toastmap-generator/

Otra página con un conversor similar (pero de HDRI a Cubemap):
 - https://matheowis.github.io/HDRI-to-CubeMap/

Y otra que convierte de Equirectangular a Cubemap:
 - https://github.com/ostef/cubemap-generator

##### Hugin
Otra herramienta interesantes es **Hugin**:
 - http://hugin.sourceforge.net/tutorials/enfuse-360/en.shtml
 - https://sourceforge.net/projects/hugin/files/hugin/

Las instrucciones están por acá:
 - https://www.cs.umd.edu/hcil/ARDN/HuginAdjusts/

 La versión para Windows se puede descargar acá:
  - https://sourceforge.net/projects/hugin/files/hugin/hugin-2016.0/

#### Tutoriales sobre diseño en 360:
Más sobre cómo hacer imágenes equirectangulares:
 - https://dmswart.com/2016/06/28/drawing-a-panorama/
 - http://vovakurbatov.com/articles/easy-way-to-make-360-vr-designs
