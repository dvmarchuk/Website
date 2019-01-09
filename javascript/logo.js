/**
 * Created by DennisMarchuk on 11/13/2017.
 */

/**
 * Created by DennisMarchuk on 9/8/2017.
 */



var B = BABYLON;

// Get the canvas element from our HTML above
var canvas = document.getElementById("renderCanvas");

// Load the B 3D engine
var engine = new B.Engine(canvas, true);

var shark = null;

var onSuccess = function(meshes, particleSystems, skeletons) {
    console.log("moving prisoner");
    var prisoner = scene.getMeshByName("Prisoner");
    prisoner.rotation.x = -Math.PI/2;

    console.log(meshes);

    scene.beginAnimation(skeletons[0], 1, 566);

};

var createScene = function() {

    var scene = new B.Scene(engine);

    //var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 5, 100), scene);
    //camera.setTarget(BABYLON.Vector3.Zero());

    //Adding a light
    var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

    //Adding an Arc Rotate Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0,0,0, BABYLON.Vector3(100,100,30), scene);
    camera.attachControl(canvas, false);

    //var ground = BABYLON.MeshBuilder.CreateGround("myGround", {width: 1000, height: 1000, subdivsions: 4}, scene);

    var meshNames = ["Plane.001", "Text", "Plane"];
    var baseDir = "../materials/";
    var fileName = "correctlogowithanimationtwosided.babylon";

    //B.SceneLoader.ImportMesh(meshNames, baseDir, fileName, scene);

    var logo;
    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh(meshNames, "../materials/", "correctlogowithanimationtwosided.babylon", scene, function (newMeshes) {
        // Set the target of the camera to the first imported mesh
        camera.target = newMeshes[0];
        logo = newMeshes[0];
        logo.rotation.y = slider.value;
        scene.registerBeforeRender(function() {   logo.rotation.y += 0.01;});

    });

    // Move the light with the camera
    // scene.registerBeforeRender(function () {
    //     light.position = camera.position;
    // });

    // GUI
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    var panel = new BABYLON.GUI.StackPanel();
    panel.width = "220px";
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(panel);

    var header = new BABYLON.GUI.TextBlock();
    header.text = "Y-rotation: 0 deg";
    header.height = "30px";
    header.color = "white";
    panel.addControl(header);

    var slider = new BABYLON.GUI.Slider();
    slider.minimum = 0;
    slider.maximum = 2 * Math.PI;
    slider.value = 0;
    slider.height = "20px";
    slider.width = "200px";
    slider.onValueChangedObservable.add(function(value) {
        header.text = "Y-rotation: " + (BABYLON.Tools.ToDegrees(value) | 0) + " deg";
        if (logo) {
            logo.rotation.y = value;
        }
    });
    panel.addControl(slider);



    return scene;
};

var scene = createScene();

var animationOn = false;

engine.runRenderLoop(function() {
    scene.render();

});

window.addEventListener("resize", function() {
    engine.resize();
});


/*** END OF FILE ***/
































































// // Get the canvas element from our html above
// var canvas = document.getElementById("renderCanvas");
//
// // Load the BABYLON 3D engine
// var engine = new BABYLON.Engine(canvas, true);
// // This begins the creation of a function that we will 'call' just after it's built
// var createScene = function () {
//
//
//     // Now create a basic Babylon Scene object
//     var scene = new BABYLON.Scene(engine);
//
//     // Change the scene background color to green.
//     scene.clearColor = new BABYLON.Color3(1, 1, 1);
//
//     BABYLON.SceneLoader.Load("", "logo.babylon", engine, function(scene) {
//         scene.executeWhenReady(function () {
//
//         })
//     }
//
//
//
//
//
//
//
//     // Leave this function
//     return scene;
//
// };  // End of createScene function
//
// // Now, call the createScene function that you just finished creating
// var scene = createScene();
//
// // Register a render loop to repeatedly render the scene
// engine.runRenderLoop(function () {
//     scene.render();
// });
//
// // Watch for browser/canvas resize events
// window.addEventListener("resize", function () {
//     engine.resize();
// });
//

//





// "autoAnimate": true,
//     "autoAnimateFrom": 1,
//     "autoAnimateTo": 68,
//     "autoAnimateLoop": true