//create skybox
//do pokemon character

/*

 Use CSG to approximate a Pokemon character
 Create a button such that when it is pressed, it toggles on and off an image of the Pokemon character
 Include at least two different parametric shapes
 Utilize PolygonMeshBuilder
 Include a surface created with a height map
 Utilize the browsers IndexedDB
 Create a custom loading screen
 Include a skybox

 */

var B = BABYLON;

var canvas = document.getElementById("renderCanvas");
var engine = new B.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

var createScene = function() {
    var scene = new B.Scene(engine);

    cam1 = new B.ArcRotateCamera("cam1", 0, 0.5, 80, new B.Vector3(0, 0, 0), scene);
    cam1.attachControl(canvas, true);
    scene.activeCameras.push(cam1);

    //skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../images/skybox.png", scene);
    var skybox = BABYLON.MeshBuilder.CreateBox("../images/skybox.jpg", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;



    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);

        //Creation of a cuboid from box shape

        //Creation of an ellipsoid from sphere shape
        var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 5, diameterX: 5}, isVisible=false, color="brown", scene);

        //Creation of a pyramid from cylinder shape
        var pyramid = BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameterTop: 5, diameterBottom: 5, height: 5, tessellation: 34}, scene);


        // Moving the shapes
        sphere.position = new BABYLON.Vector3(-4, 2, 0);   // Using a vector
        pyramid.position.x = 4;                           // Using a single coordinate component
        pyramid.position.y = 3;                          // Using a single coordinate component
        sphere.position.x = 4;
        sphere.position.y = 5.5;




    return scene;
};

var scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener("resize", function() {
    engine.resize();
});

function pressMe() {
    console.log("button is pressed");
    var notes = document.getElementById("note-panel");
    if (notes === null) {
        console.log("no element with id 'note-panel'");
        return;
    }
    notes.innerHTML = "<img src='../images/pokemon.png' style='width: 480px;'/>";

    var prop = window.getComputedStyle(notes, null).getPropertyValue("visibility");

    if (prop == "hidden") {
        notes.style.visibility = "visible";
        console.log("visible");

    }
    else {
        notes.style.visibility = "hidden";
        console.log("hidden");

    }
}


