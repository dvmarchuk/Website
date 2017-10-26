
var canvas = document.getElementById("renderCanvas");

// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
// This begins the creation of a function that we will 'call' just after it's buil

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera1 = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);

    camera1.attachControl(canvas, true);

    // ArcRotateCamera >> Camera turning around a 3D point (here Vector zero) with mouse and cursor keys
// Parameters : name, alpha, beta, radius, target, scene
    var camera2 = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera2.attachControl(canvas, true);


    var camera3 = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 30, new BABYLON.Vector3(0, 0, 0), scene);
    camera3.attachControl(canvas, true);



    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(10, 40, 40);


    camera1.viewport = new BABYLON.Viewport(0, 0, 0.33, 1.0);
    camera2.viewport = new BABYLON.Viewport(.33, 0, .33, 1.0);
    camera3.viewport = new BABYLON.Viewport(.66, 0, .33, 1.0);



    scene.activeCameras.push(camera1);
    scene.activeCameras.push(camera2);
    scene.activeCameras.push(camera3);

    // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    var square = BABYLON.Mesh.CreateSquare("square1", 16, 2, scene);

    return scene;


};


var scene = createScene();


// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
