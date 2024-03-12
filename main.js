Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedimg' src='" + data_uri + "'/>";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PGIV8zJ1J/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model loaded!!");
}

function check(){
    img = document.getElementById("capturedimg");
    classifier.classify(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("objectname").innerHTML=result[0].label;
        document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(25);
    }
}