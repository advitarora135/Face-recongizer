function startClassification(){
    navigator.mediaDevices.getDisplayMedia({ audio:true });
    classifer.ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2cJiUEdff/model.json', modelReady);
}

function modelReady() {
    classifier.classifying(gotresults);
}
