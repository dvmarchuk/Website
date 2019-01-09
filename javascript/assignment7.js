/**
 * Created by DennisMarchuk on 10/15/2017.
 * */
// Move the camera using actions and keyboard triggers          do the arrow keys count?

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
//var box;
//var sphere;
//var sphere;
var animationBox;
var camera;

function createScene() {
    var scene = new BABYLON.Scene(engine);
    var light = new BABYLON.PointLight("Point", new BABYLON.Vector3(5, 10, 5), scene);
    //Camera
    camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 5, -100), scene);
    camera.attachControl(canvas, true);
    console.log("can you hear me?")
    // var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, BABYLON.Vector3.Zero(), scene);
    // arcCamera.setPosition(new BABYLON.Vector3(60, 20, -2));
    // arcCamera.attachControl(canvas, false);






    /*************************************************************************************************************/
    //skybox

    //Adding the SkyBox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 500.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;


    //Ground.
    var ground = BABYLON.Mesh.CreateGround("ground1", 300, 300, 2, scene);
    var materialGround = new BABYLON.StandardMaterial("sandTexture", scene);
    materialGround.diffuseColor = new BABYLON.Color3(1, 1, 1);
    materialGround.diffuseTexture = new BABYLON.Texture("../textures/sand.jpg", scene);
    ground.material = materialGround;
    ground.position.y = -2.5;
    ground.receiveShadows = true;


    //Ground.
    // var bouncingGround = BABYLON.Mesh.CreateGround("ground1", 100, 100, 2, scene);
    // var materialBouncingGround = new BABYLON.StandardMaterial("sandTexture", scene);
    // materialGround.diffuseColor = new BABYLON.Color3(1, 1, 1);
    // materialGround.diffuseTexture = new BABYLON.Texture("../textures/sand.jpg", scene);
    // ground.material = materialGround;
    // ground.position.y = -2.5;
    // ground.receiveShadows = true;



    /****************************************************************************************************************/
    //box


    //simple box
    box = BABYLON.Mesh.CreateBox("crate", 5, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    box.material.diffuseTexture = new BABYLON.Texture("../textures/mcgphd.jpg", scene);
    box.material.diffuseTexture.hasAlpha = true;
//    box.position = new BABYLON.Vector3(5, 9, 10);



    /****************************************************************************************************************/
    //gravity

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 10, scene);


    // Move the sphere upward 1/2 its height
    sphere.position.y = 10;
    box.position.y = 20;
    box.position.x = 3;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene

    scene.enablePhysics();

    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1 }, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1 }, scene);
    box.physicsImpostor = new BABYLON.PhysicsImpostor(box, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 1 }, scene);
    scene.collisionsEnabled = true;
    box.checkCollisions = true;
    sphere.checkCollisions = true;














    /*************************************************************************************************************/
    //camera gravity

    //Set gravity for the scene (G force like, on Y-axis)
    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);

    // Enable Collisions
    scene.collisionsEnabled = true;

    //Then apply collisions and gravity to the active camera
    camera.checkCollisions = true;
    camera.applyGravity = true;

    //Set the ellipsoid around the camera (e.g. your player's size)
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

    //finally, say which mesh will be collisionable
    ground.checkCollisions = true;
    sphere.checkCollisions = true;





    /**************************************************************************************************************/
    //potential stuff to add (sprites)
    /*****************************************************************************************************************/
    //Sprites

    //
    // //Create a manager for the player's sprite animation
    // var spriteManagerPlayer = new BABYLON.SpriteManager("playerManager", "../textures/player.png", 1, 64, scene);
    //
    // // First animated player
    // var player = new BABYLON.Sprite("player", spriteManagerPlayer);
    // player.playAnimation(0, 40, true, 100);
    // player.position.y = 20;
    // player.position.x = 30
    // player.size = 10;
    // player.isPickable = true;
    //
    //
    // // Picking
    // spriteManagerPlayer.isPickable = true;

// //Creating SpriteTree
//     var spriteManagerTrees = new BABYLON.SpriteManager("treesManager", "../textures/palm.png", 2000, 800, scene);
//
//     //We create 15 trees at random positions
//     for (var i = 0; i < 500; i++) {
//         var tree = new BABYLON.Sprite("tree", spriteManagerTrees);
//         tree.position.x = Math.random() * 100 - 50;
//         tree.position.z = Math.random() * 100 - 50;
//         tree.isPickable = true;
//
//         //Some "dead" trees
//         if (Math.round(Math.random() * 5) === 0) {
//             tree.angle = Math.PI * 90 / 180;
//             tree.position.y = -0.3;
//         }
//
//         tree.size = 5;
//     }




    /**************************************************************************************************************/
    //raycasting
    // var box2 = BABYLON.Mesh.CreateBox("box2", 4.0, scene);
    // box2.position.y = 2;
    // box2.scaling.z = 2;
    // var matBox = new BABYLON.StandardMaterial("matBox", scene);
    // matBox.diffuseColor = new BABYLON.Color3(1.0, 0.1, 0.1);
    // box2.material = matBox;
    // box2.isPickable = false;
    //
    //
    //
    //
    //
    //
    //
    // function mousemovef(){
    //     var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    //
    //     if (pickResult.hit) {
    //         var diffX = pickResult.pickedPoint.x - box.position.x;
    //         var diffY = pickResult.pickedPoint.z - box.position.z;
    //         box.rotation.y = Math.atan2(diffX,diffY);
    //     }
    // }
    //
    // scene.onPointerMove = function () {
    //     mousemovef();
    // };
    //
    // function vecToLocal(vector, mesh){
    //     var m = mesh.getWorldMatrix();
    //     var v = BABYLON.Vector3.TransformCoordinates(vector, m);
    //     return v;
    // }
    //
    // function castRay(){
    //     var origin = box.position;
    //
    //     var forward = new BABYLON.Vector3(0,0,1);
    //     forward = vecToLocal(forward, box);
    //
    //     var direction = forward.subtract(origin);
    //     direction = BABYLON.Vector3.Normalize(direction);
    //
    //     var length = 100;
    //
    //     var ray = new BABYLON.Ray(origin, direction, length);
    //     // ray.show(scene, new BABYLON.Color3(1, 1, 0.1));
    //
    //     var hit = scene.pickWithRay(ray);
    //
    //     if (hit.pickedMesh){
    //         hit.pickedMesh.scaling.y += 0.01;
    //     }
    // }
    //
    // scene.registerBeforeRender(function () {
    //     castRay();
    // });


    /***********************************************************************************************************/
    //using actions



    var box3 = BABYLON.Mesh.CreateBox("box3", 4.0, scene);//TODO
    box3.position.y = 2;

    box3.actionManager = new BABYLON.ActionManager(scene);
    var action2 = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, box3, "visibility", 0.2, 1000);
    box3.actionManager.registerAction(action2);





    // var moveCamera = function() {
    //     //camera.setPosition(new BABYLON.Vector3(10, 10, 2));
    //
    //     //camera.reset();
    //
    //     //camera.setPosition(new BABYLON.Vector3(0, 5, -100));
    //
    //     //camera.useAutoRotationBehavior = true;
    //
    // };
    //
    // box3.actionManager = new BABYLON.ActionManager(scene);
    // var action2 = new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger, moveCamera());
    // box3.actionManager.registerAction(action2);







    /***************************************************************************************************************/
    //registering an action

    // var marbleTexture = new BABYLON.StandardMaterial("mcg", scene);
    // marbleTexture.diffuseTexture = new BABYLON.Texture("../images/arrow.png");

    // var sphere1 = BABYLON.Mesh.CreateSphere("sphere2", 16, 10, scene);
    // sphere1.material = marbleTexture;
    box.actionManager = new BABYLON.ActionManager(scene);
    box.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (evt) {
        alert("This is McG PhD!");
    }));



    /*************************************************************************************************************/
    //raycasting a fires

    var target = BABYLON.Vector3.Zero();

    function castRay(target){
        var ray = BABYLON.Ray.CreateNewFromTo(camera.position, target);


        var foo = function(mesh) {
            return (mesh.name != "ray" && mesh.name != "decal" && mesh.name != "line");
        };

        var pickResults = scene.multiPickWithRay(ray, foo);
        if (pickResults.length == 0)
            return;

        var pickResult = pickResults[0];
        var min = Number.MAX_VALUE;
        for (var item in pickResults) {
           // console.log("checking distance for " + pickResults[item].pickedMesh.name + ": " + pickResults[item].distance);
            if (pickResults[item].distance < min) {
                pickResult = pickResults[item];
                min = pickResults[item].distance;
            }
        }

        if (pickResult.hit == true){
            var mesh = pickResult.pickedMesh;
            position = pickResult.pickedPoint;
            normal = pickResult.getNormal(true);

                var line = BABYLON.Mesh.CreateLines("line", [
                    position,
                    new BABYLON.Vector3(position.x + normal.x, position.y + normal.y, position.z + normal.z)
                ], scene);


            var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
            decalMaterial.diffuseTexture = new BABYLON.Texture("../textures/heart.png", scene);
            decalMaterial.diffuseTexture.hasAlpha = true;
            //decalMaterial.zOffset = -2;

            var decalSize = new BABYLON.Vector3(3,3,3);

            var newDecal = BABYLON.Mesh.CreateDecal("decal", mesh, position, normal, decalSize);
            newDecal.material = decalMaterial;
        }
    }




    scene.registerBeforeRender(function () {
        castRay(target);
    });





    // Leave this function
    return scene;

};  // End of createScene function



// Now, call the createScene function that you just finished creating
var scene = createScene();

// Register a render loop to repeatedly render the scene
// engine.runRenderLoop(function () {
//     scene.render();
// });



engine.runRenderLoop(function() {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});

