Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = docmuent.getElementById(camera);

webcam.attach( '#camera ' );

function take_snapshot()
{
    webcam.snap(function(data_url)) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' data_url '"/>"'
    }
}

console.log('m15 version:', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/train/image/model.json', modelLoaded);

function modelLoaded() {
    console.log(' Model Loaded! ')
}

function check()
{
    img = document.getElementById(' captured_image ');
    classifier.classify(img, gotResult);
}

function gotresult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_of_object_name").innerHTML = results[0].label
        document.getElementById("result_of_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}