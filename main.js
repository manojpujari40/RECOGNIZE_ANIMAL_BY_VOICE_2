function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : ture});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WVYhUkhHc/model.json". modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}