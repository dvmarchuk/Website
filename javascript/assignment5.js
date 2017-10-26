/**
 * Created by DennisMarchuk on 9/8/2017.
 */

// Get the canvas element from our html above
var canvas = document.getElementById("renderCanvas");

// Load the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
// This begins the creation of a function that we will 'call' just after it's built
var createScene = function () {

    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // This attaches the camera to the canvas
    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(1, 0, 0);

    /****************************************************************************/
    //Skybox

    // Skybox
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    //Skybox
    //Automatic creation
    // var envTexture = new BABYLON.CubeTexture("./textures/TropicalSunnyDay", scene);
    // scene.createDefaultSkybox(envTexture);



    // var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);






    // Sphere
    var shape = BABYLON.MeshBuilder.CreateGround("shape", {width:4, height:4}, scene);
    var shapeMaterial = new BABYLON.StandardMaterial("mat", scene);
    shapeMaterial.backFaceCulling = true;
    shapeMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/skybox", scene);
    shapeMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.PLANAR_MODE;
    shapeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    shapeMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    shape.material = shapeMaterial;

    shape.rotation.y = Math.PI/8;
    shape.rotation.x = -Math.PI/8;

    // var tree1 = QuickTreeGenerator(15, 10, 5, woodMaterial, leafMaterial, scene);
    // tree1.position.x = 20;
    // tree1.position.y = 2;

    //var tree = simplePineGenerator(canopies, height, trunkMaterial, leafMaterial, scene);
    // var createFontain = function (name, x, y, z, scene, shadowGenerator, marbleMaterial, fireMaterial) {
    //     var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 20, scene);
    //     torus.position = new BABYLON.Vector3(x, y, z);
    //     torus.material = marbleMaterial;
    //
    //     var fontainGround = BABYLON.Mesh.CreateBox("fontainGround", 4, scene);
    //     fontainGround.position = new BABYLON.Vector3(x, y - 2, z);
    //     fontainGround.material = marbleMaterial;
    //
    //     var fontainSculptur1 = BABYLON.Mesh.CreateCylinder("fontainSculptur1", 2, 2, 1, 10, 1, scene);
    //     fontainSculptur1.position = new BABYLON.Vector3(x, y, z);
    //     fontainSculptur1.material = marbleMaterial;
    //
    //     var fontainSculptur2 = BABYLON.Mesh.CreateSphere("fontainSculptur2", 7, 1.7, scene);
    //     fontainSculptur2.position = new BABYLON.Vector3(x, y + 0.9, z);
    //     fontainSculptur2.material = fireMaterial;
    //     fontainSculptur2.rotate(new BABYLON.Vector3(1.0, 0.0, 0.0), Math.PI / 2.0, BABYLON.Space.Local);
    //
    //     shadowGenerator.getShadowMap().renderList.push(torus);
    //     shadowGenerator.getShadowMap().renderList.push(fontainSculptur1);
    //     shadowGenerator.getShadowMap().renderList.push(fontainSculptur2);
    // }
    //
    // var marbleMaterial = new BABYLON.StandardMaterial("torus", scene);
    // var marbleTexture = new BABYLON.MarbleProceduralTexture("marble", 512, scene);
    // marbleTexture.numberOfBricksHeight = 5;
    // marbleTexture.numberOfBricksWidth = 5;
    // marbleMaterial.ambientTexture = marbleTexture;
    //
    //
    // var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
    // var fireTexture = new BABYLON.FireProceduralTexture("fire", 256, scene);
    // fireMaterial.diffuseTexture = fireTexture;
    // fireMaterial.opacityTexture = fireTexture;
    //
    // //Applying some shadows
    // var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
    // square.receiveShadows = true;
    //
    // createFontain("fontain", 20, 0.25, 0, scene, shadowGenerator, marbleMaterial, fireMaterial);

    var material0 = new BABYLON.StandardMaterial("mat0", scene);
    material0.diffuseColor = new BABYLON.Color3(1, 0, 0);
    material0.bumpTexture = new BABYLON.Texture("normalMap.jpg", scene);


    var material1 = new BABYLON.StandardMaterial("mat1", scene);
    material1.diffuseColor = new BABYLON.Color3(0, 0, 1);


    var material2 = new BABYLON.StandardMaterial("mat2", scene);
    material2.emissiveColor = new BABYLON.Color3(0.4, 0, 0.4);

    var multimat = new BABYLON.MultiMaterial("multi", scene);
    multimat.subMaterials.push(material0);
    multimat.subMaterials.push(material1);
    multimat.subMaterials.push(material2);

    var sphere = BABYLON.Mesh.CreateSphere("Sphere0", 16, 3, scene);
    sphere.material = multimat;

    sphere.subMeshes = [];
    var verticesCount = sphere.getTotalVertices();

    sphere.subMeshes.push(new BABYLON.SubMesh(0, 0, verticesCount, 0, 900, sphere));
    sphere.subMeshes.push(new BABYLON.SubMesh(1, 0, verticesCount, 900, 900, sphere));
    sphere.subMeshes.push(new BABYLON.SubMesh(2, 0, verticesCount, 1800, 2088, sphere));



    // Leave this function
    return scene;

};  // End of createScene function

// Now, call the createScene function that you just finished creating
var scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});

