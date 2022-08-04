video = "";
STATUS = "";
object = [];

function preload() {

    video = createVideo("video.mp4");

}

function setup() {

    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide()
}

function draw() {

    image(video, 0, 0, 480, 380);
    if (STATUS != "") {
        object_detector.detect(video, gotResult);
        for ( var i = 0; i < object.length; i++) {

            document.getElementById("status").innerHTML = "Status: Detected Object" ;
            document.getElementById("No_of_obj").innerHTML = object.length;
            fill("#ff0000")
            precentage = floor(object[i].confidence *100)
            text(object[i] + "" + percentage + "%" + object[i].x + 15 + object[i].y + 15)
            noFill()
            stroke("#ff0000")
            rect(object[i].x ,object[i].y ,object[i].width ,object[i].height )


        }
    }


}

function start() {

    object_detector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Staus : Object Detecting"

}


function modelLoaded() {

    console.log("model Loaded")
    STATUS = true
    video.loop(1)
    video.volume(0)
    video.speed(1)



}

function gotResult(error, results) {
    if (error) {

        console.log(error)
    }
    else
        console.log(results);
    object = results;
}