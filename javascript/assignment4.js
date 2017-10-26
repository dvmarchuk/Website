/**
 * Created by DennisMarchuk on 9/25/2017.
 */


var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);


var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    var light = new BABYLON.DirectionalLight("direct", new BABYLON.Vector3(0, 0, 1), scene);

    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 5, -30));
    camera.attachControl(canvas, true);

    //Create a custom mesh
    var customMesh = new BABYLON.Mesh("custom", scene);


    //Set arrays for positions and indices
    var positions = [-7.5, -3, 3, -9.5, -7, 3, -5.5, -7, 3, -5, 2, 3, -7, -2, 3, -3, -2, 3, -10, 2, 3, -12, -2, 3, -8, -2, 3, -7.5, -1.5, 3, -8.5, -3, 3, -6.5, -3, 3];
    var indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var colors = [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1];

    var squareMesh = new BABYLON.Mesh("square", scene);
    var positionsS = [-8.5, -1.5, 3, -6.5, -1.5, 3, -8.5, -3, 3, -6.5, -3, 3];
    var indicesS = [0, 1, 2, 3];
    var colorsS = [1, 0, 0, 1];

    //Empty array to contain calculated values
    var normals = [];

    var vertexData = new BABYLON.VertexData();
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);

    //Assign positions, indices and normals to vertexData
    vertexData.positions = positions;
    vertexData.indices = indices;
    vertexData.normals = normals;
    vertexData.colors = colors;

    var mergeMesh = BABYLON.Mesh.MergeMeshes([customMesh], true, true);


    var mmTag = {};
    BABYLON.Tags.EnableFor(mergeMesh);

    // var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh === customMesh; });
    // if (pickInfo.hit) {
    //     var decalSize = new BABYLON.Vector3(10, 10, 10);
    //
    //     var newDecal = BABYLON.Mesh.CreateDecal("decal", mergeMesh, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
    //     newDecal.material = decalMaterial;
    // }


    /******************************************************************************************************************/
    //line morphing

    // lines creation
    var path = [];
    for (var index = 0; index < 100; index+=10) {

    for (var i = -20; i < 20; i++) {
        var x = i;
        var y = index;
        var z = index;
        path.push(new BABYLON.Vector3(x, y, z));
    }
    var mesh = BABYLON.Mesh.CreateLines("lines", path, scene, true);

    var updatePath = function (path, k) {
        for (var i = 0; i < path.length; i++) {
            var x = path[i].x;
            var z = path[i].z;
            var y = 5 * Math.sin(i / 3 + k);
            path[i].x = x;
            path[i].y = y;
            path[i].z = z;
        }
    };

    // morphing
    var k = 0;
    scene.registerBeforeRender(function () {
        updatePath(path, k);
        //updateLines(mesh, path);
        mesh = BABYLON.Mesh.CreateLines(null, path, null, null, mesh);
        k += 0.05;
        //pl.position = camera.position;
    });
}

    //var newDecal = BABYLON.Mesh.CreateDecal("decal", mesh, (-3,-3,-3), normal, 10, angle);
    /*******************************************************************************************************************
     * *********************************************************************
     *
     *
     */

    //
    // BABYLON.SceneLoader.ImportMesh("Shcroendiger'scat", "/scenes/", "SSAOcat.babylon", scene, function (newMeshes) {
    //     var cat = newMeshes[0];
    //
    //     // Set the target of the camera to the first imported mesh
    //     camera.target = cat;
    //
    //     var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
    //     decalMaterial.diffuseTexture = new BABYLON.Texture("/textures/triangle.png", scene);
    //     decalMaterial.diffuseTexture.hasAlpha = true;
    //     decalMaterial.zOffset = -2;
    //
    //     var onPointerDown = function (evt) {
    //         if (evt.button !== 0) {
    //             return;
    //         }
    //
    //         // check if we are under a mesh
    //         var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) { return mesh === cat; });
    //         if (pickInfo.hit) {
    //             var decalSize = new BABYLON.Vector3(10, 10, 10);
    //
    //             var newDecal = BABYLON.Mesh.CreateDecal("decal", cat, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
    //             newDecal.material = decalMaterial;
    //         }
    //     }
    //     var canvas = engine.getRenderingCanvas();
    //     canvas.addEventListener("pointerdown", onPointerDown, false);
    //
    //     scene.onDispose = function () {
    //         canvas.removeEventListener("pointerdown", onPointerDown);
    //     }


        /*************************************************************************************************************
         *
         *
         *
         *
         *
         *
         *
         *
         */



            //Apply vertexData to custom mesh

    // var canvas = engine.getRenderingCanvas();
    // canvas.addEventListener("pointerdown", onPointerDown, false);
    //
    // scene.onDispose = function () {
    //     canvas.removeEventListener("pointerdown", onPointerDown);
    // }

    var pyramid = BABYLON.Mesh.CreatePolyhedron("pyramid", 2, scene);
    pyramid.enableEdgesRendering();
    pyramid.edgesWidth = 4.0;
    pyramid.edgesColor = new BABYLON.Color4(0, 0, 1, 1);


    // var meshs = mergeMesh[0];
    // for (var index = 0; index < 100; index++) {
    //     var newInstance = meshs.createInstance("i" + index);
    //     var xs = range / 2 - Math.random() * range;
    //     var zs = range / 2 - Math.random() * range;
    //
    //     var ys = ground.getHeightAtCoordinates(x, z); // Getting height from ground object
    //
    //     newInstance.position = new BABYLON.Vector3(xs, ys, zs);
    //
    //    newInstance.rotate(BABYLON.Axis.Y, Math.random() * Math.PI * 2, BABYLON.Space.WORLD);
    //
    //     var scale = 0.5 + Math.random() * 2;
    //     newInstance.scaling.addInPlace(new BABYLON.Vector3(scale, scale, scale));
    // }


    //adding the decal
    function myFunction() {
        var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
        decalMaterial.diffuseTexture = new BABYLON.Texture("../images/triangle.png", scene);
        decalMaterial.diffuseTexture.hasAlpha = true;
        decalMaterial.zOffset = -2;

        var onPointerDown = function (evt) {
            if (evt.button !== 0) {
                return;
            }

            // check if we are under a mesh
            var pickInfo = scene.pick(scene.pointerX, scene.pointerY, function (mesh) {
                return mesh === newMesh;
            });
            if (pickInfo.hit) {
                var decalSize = new BABYLON.Vector3(10, 10, 10);

                var newDecal = BABYLON.Mesh.CreateDecal("decal", newMesh, pickInfo.pickedPoint, pickInfo.getNormal(true), decalSize);
                newDecal.material = decalMaterial;
            }
        };
        var canvas = engine.getRenderingCanvas();
        canvas.addEventListener("pointerdown", onPointerDown, false);

        scene.onDispose = function () {
            canvas.removeEventListener("pointerdown", onPointerDown);
        };
    }
    myFunction();


    vertexData.applyToMesh(mergeMesh);


    return scene;
};

var scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});
