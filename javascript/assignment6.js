/**
 * Created by DennisMarchuk on 10/9/2017.
 */
/*

 Include a button on the screen that when toggled, stops or starts the animation.
 Include two different standard particle systems.

 */

var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var box1;
var animationBox;

function createScene() {
    var scene = new BABYLON.Scene(engine);
    var light = new BABYLON.PointLight("Point", new BABYLON.Vector3(5, 10, 5), scene);
    //Camera
    var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 0, 0, 0, BABYLON.Vector3.Zero(), scene);
    arcCamera.setPosition(new BABYLON.Vector3(60, 20, -2));
    arcCamera.attachControl(canvas, false);



    /*******************************************************************************************************/
    //box animation
    //Create a box


    //Boxes
    box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
    box1.position.x = -20;

    var materialBox = new BABYLON.StandardMaterial("texture1", scene);
    materialBox.diffuseColor = new BABYLON.Color3(1, 1, 1);

    //Applying materials
    box1.material = materialBox;

    // Creation of a basic animation with box 1
    //----------------------------------------

    var animationBox = new BABYLON.Animation("tutoAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // Animation keys
    var keys = [];
    keys.push({
        frame: 0,
        value: 0
    });

    keys.push({
        frame: 20,
        value: 10
    });

    keys.push({
        frame: 100,
        value: -20
    });

    animationBox.setKeys(keys);

    box1.animations.push(animationBox);

    scene.beginAnimation(box1, 0, 100, true);

    // Blending animation
    var animation2Box = new BABYLON.Animation("tutoAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    animation2Box.enableBlending = true;
    animation2Box.blendingSpeed = 0.01;
    // Animation keys
    var keys = [];
    keys.push({
        frame: 0,
        value: 0
    });

    keys.push({
        frame: 20,
        value: 10
    });

    keys.push({
        frame: 100,
        value: -30
    });

    animation2Box.setKeys(keys);





    /*****************************************************************************************************************/
    //Sprites


    //Create a manager for the player's sprite animation
    var spriteManagerPlayer = new BABYLON.SpriteManager("playerManager", "../textures/player.png", 1, 64, scene);

    // First animated player
    var player = new BABYLON.Sprite("player", spriteManagerPlayer);
    player.playAnimation(0, 40, true, 100);
    player.position.y = 2;
    player.position.x = 30
    player.size = 10;
    player.isPickable = true;


    // Picking
    spriteManagerPlayer.isPickable = true;

//Creating SpriteTree
    var spriteManagerTrees = new BABYLON.SpriteManager("treesManager", "../textures/palm.png", 2000, 800, scene);

    //We create 15 trees at random positions
    for (var i = 0; i < 500; i++) {
        var tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * 100 - 50;
        tree.position.z = Math.random() * 100 - 50;
        tree.isPickable = true;

        //Some "dead" trees
        if (Math.round(Math.random() * 5) === 0) {
            tree.angle = Math.PI * 90 / 180;
            tree.position.y = -0.3;
        }

        tree.size = 5;
    }




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
    var ground = BABYLON.Mesh.CreateGround("ground1", 100, 100, 2, scene);
    var materialGround = new BABYLON.StandardMaterial("sandTexture", scene);
    materialGround.diffuseColor = new BABYLON.Color3(1, 1, 1);
    materialGround.diffuseTexture = new BABYLON.Texture("../textures/sand.jpg", scene);
    ground.material = materialGround;
    ground.position.y = -2.5;
    ground.receiveShadows = true;


    // //Creating non-linear easing function
    var easingFunction = new BABYLON.CircleEase();
    easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    animationBox.setEasingFunction(easingFunction);

/*******************************************************************************************************************/
    //particles
    // Fountain object
    var fountain = BABYLON.Mesh.CreateBox("fountain", 5.0, scene);


    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("../textures/arrow.png", scene);

    // Where the particles come from
    particleSystem.emitter = fountain; // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
    particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.updateSpeed = 0.005;

    fountain.position.y = 0;
    fountain.position.x = 50;
    fountain.position.z = 50;


    // Start the particle system
    particleSystem.start();

    // Fountain's animation
    var keys = [];
    var animation = new BABYLON.Animation("animation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    // At the animation key 50, the value of scaling is "0.2"
    keys.push({
        frame: 50,
        value: Math.PI
    });

    // At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 0
    });

//second fountain
    // Fountain object
    var fountain2 = BABYLON.Mesh.CreateBox("foutain", 5.0, scene);



    // Create a particle system
    var particleSystem2 = new BABYLON.ParticleSystem("particles2", 2000, scene);

    //Texture of each particle
    particleSystem2.particleTexture = new BABYLON.Texture("../textures/fire.jpg", scene);

    // Where the particles come from
    particleSystem2.emitter = fountain2; // the starting object, the emitter
    particleSystem2.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
    particleSystem2.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...

    // Colors of all particles
    // particleSystem2.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    // particleSystem2.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem2.color1 = new BABYLON.Color4(1, 0, 0, 1);
    particleSystem2.color2 = new BABYLON.Color4(1, 1, 0, 1);
    particleSystem2.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem2.minSize = 0.1;
    particleSystem2.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem2.minLifeTime = 0.3;
    particleSystem2.maxLifeTime = 1.5;

    //position
    fountain2.position.y = 0;
    fountain2.position.x = -50;
    fountain2.position.z = -50;



    // Emission rate
    particleSystem2.emitRate = 7000;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem2.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem2.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem2.direction1 = new BABYLON.Vector3(-7, 8, 3);
    particleSystem2.direction2 = new BABYLON.Vector3(7, 8, -3);

    // Angular speed, in radians
    particleSystem2.minAngularSpeed = 0;
    particleSystem2.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem2.minEmitPower = 1;
    particleSystem2.maxEmitPower = 3;
    particleSystem2.updateSpeed = 0.005;

    // Start the particle system
    particleSystem2.start();

    // Fountain's animation
    var keys2 = [];
    var animation2 = new BABYLON.Animation("animation2", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // At the animation key 0, the value of scaling is "1"
    keys2.push({
        frame: 0,
        value: 0
    });

    // At the animation key 50, the value of scaling is "0.2"
    keys2.push({
        frame: 50,
        value: Math.PI
    });

    // At the animation key 100, the value of scaling is "1"
    keys2.push({
        frame: 100,
        value: 0
    });

    // Launch animation
    animation2.setKeys(keys);
    fountain2.animations.push(animation2);
    scene.beginAnimation(fountain2, 0, 100, true);



    /*****************************************************************************************************************/
    //soilid particle
    // texture and material
    var url = "../textures/mcgphd.jpg";
    var mat = new BABYLON.StandardMaterial("mat1", scene);
    //mat.backFaceCulling = false;
    var texture = new BABYLON.Texture(url, scene);
    mat.diffuseTexture = texture;

    // SPS creation
    var tetra = BABYLON.MeshBuilder.CreatePolyhedron("tetra", {size: .5}, scene);
    var box = BABYLON.MeshBuilder.CreateBox("box", { size: .5 }, scene);
    var SPS = new BABYLON.SolidParticleSystem('SPS', scene);
    SPS.addShape(tetra, 100);
    SPS.addShape(box, 100);
    var mesh = SPS.buildMesh();
    mesh.material = mat;
    mesh.position.y = 0;
    mesh.position.x = 20;
    tetra.dispose();  // free memory
    box.dispose();


    // SPS behavior definition
    var speed = 1.5;
    var gravity = -0.01;

    // init
    SPS.initParticles = function() {
        // just recycle everything
        for (var p = 0; p < this.nbParticles; p++) {
            this.recycleParticle(this.particles[p]);
        }
    };

    // recycle
    SPS.recycleParticle = function(particle) {
        // Set particle new velocity, scale and rotation
        // As this function is called for each particle, we don't allocate new
        // memory by using "new BABYLON.Vector3()" but we set directly the
        // x, y, z particle properties instead
        particle.position.x = 0;
        particle.position.y = 0;
        particle.position.z = 0;
        particle.velocity.x = (Math.random() - 0.5) * speed;
        particle.velocity.y = Math.random() * speed;
        particle.velocity.z = (Math.random() - 0.5) * speed;
        var scale = Math.random() + 0.5;
        particle.scale.x = scale;
        particle.scale.y = scale;
        particle.scale.z = scale;
        particle.rotation.x = Math.random() * 3.5;
        particle.rotation.y = Math.random() * 3.5;
        particle.rotation.z = Math.random() * 3.5;
        particle.color.r = Math.random() * 0.6 + 0.5;
        particle.color.g = Math.random() * 0.6 + 0.5;
        particle.color.b = Math.random() * 0.6 + 0.5;
        particle.color.a = Math.random() * 0.6 + 0.5;
    };


    // update : will be called by setParticles()
    SPS.updateParticle = function(particle) {
        // some physics here
        if (particle.position.y < 0) {
            this.recycleParticle(particle);
        }
        particle.velocity.y += gravity;                         // apply gravity to y
        (particle.position).addInPlace(particle.velocity);      // update particle new position
        particle.position.y += speed / 2;

        var sign = (particle.idx % 2 == 0) ? 1 : -1;            // rotation sign and new value
        particle.rotation.z += 0.1 * sign;
        particle.rotation.x += 0.05 * sign;
        particle.rotation.y += 0.008 * sign;
    };


    // init all particle values and set them once to apply textures, colors, etc
    SPS.initParticles();
    SPS.setParticles();

    // Tuning :
    SPS.computeParticleColor = false;
    SPS.computeParticleTexture = false;

    scene.registerBeforeRender(function() {
        SPS.setParticles();
        SPS.mesh.rotation.y += 0.01;
    });



    // Launch animation
    animation.setKeys(keys);
    fountain.animations.push(animation);
    scene.beginAnimation(fountain, 0, 100, true);



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



var pressed = 0;
function pauseAnimation() {

    //Starting animation on button press
    var newAnimation = scene.beginAnimation(box1, 0, 100, true);
    //newAnimation.pause();
    pressMe();

//box

    function pressMe(){

        if (pressed == 0) {
            console.log("Animation paused");
            newAnimation.pause();
            pressed = 1;
        }
        else {
            newAnimation.restart();
            pressed = 0;
            console.log("Animation restarted");
        }
    }

}