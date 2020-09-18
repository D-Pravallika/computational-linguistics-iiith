var corpus = [
    'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
    'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
    'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'
    ];
var corpValue;

function selectval(value){
    document.getElementById("sols").innerHTML = "";
    document.getElementById("sols2").innerHTML = "";
    document.form2.roots.value = "";
    document.form.tokens.value = "";
    document.form.types.value = "";
    document.getElementById("inp-tokens").style.backgroundColor = "white";
    document.getElementById("inp-types").style.backgroundColor = "white";
    document.getElementById("inp-roots").style.backgroundColor = "white";
    document.getElementById("submit").classList.remove("hiden");
    document.getElementById("root-input").classList.add("hiden");
    document.getElementById("rootss").innerHTML = "";
    corpValue = value;
    if(value != "select"){
        document.getElementById("enterr").innerHTML = "Enter the correct number of tokens and types for the above corpus:";
        document.getElementById("corpus-para").innerHTML = corpus[value];
        document.getElementById("tableval").classList.remove("hiden");
    }
    else {
        alert("Select a Corpus");
    }
}

function res(form){
    var tokens = document.getElementById("inp-tokens");
    var types = document.getElementById("inp-types");
    var sols = document.getElementById("sols");
    var str = corpus[corpValue].toLowerCase();
    var str1 = str.replace(/[".?,]+/g , '');
    var str2 = str1.replace(/\s\s+/g, ' ');
    var words = str2.split(" ");
    var length = words.length;
    var unique = countUniqueword(words);
    if(document.form.tokens.value == length && document.form.types.value == unique){
        sols.innerHTML = "Right Answer";
        sols.style.color ="green";
        tokens.style.backgroundColor = "green";
        types.style.backgroundColor = "green";
        document.getElementById("continue").classList.remove("hiden");
    }
    else if(document.form.tokens.value == length && document.form.types.value != unique){
        sols.innerHTML = "Wrong Answer";
        sols.style.color ="red";
        tokens.style.backgroundColor = "green";
        types.style.backgroundColor = "red";
        document.getElementById("continue").classList.add("hiden");
    }
    else if(document.form.tokens.value != length && document.form.types.value == unique){
        sols.innerHTML = "Wrong Answer";
        sols.style.color ="red";
        tokens.style.backgroundColor = "red";
        types.style.backgroundColor = "green";
        document.getElementById("continue").classList.add("hiden");
    }
    else {
        sols.innerHTML = "Wrong Answer";
        sols.style.color ="red";
        tokens.style.backgroundColor = "red";
        types.style.backgroundColor = "red";
        document.getElementById("continue").classList.add("hiden");
    }       
}

function countUniqueword(array) {
    uniqueWords = new Set(array).size;
    return uniqueWords;
}

function rooot(){
    document.getElementById("submit").classList.add("hiden");
    document.getElementById("continue").classList.add("hiden");
    document.getElementById("sols").innerHTML = "";
    document.getElementById("root-input").classList.remove("hiden");
    document.getElementById("rootss").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types." + "<br><br>" + "#new types:";
}

require(['../Libraries/Snowball.min']);
    
function froot() {
    var str = corpus[corpValue].toLowerCase();
    var str1 = str.replace(/[".?,]+/g , '');
    var str2 = str1.replace(/\s\s+/g, ' ');
    var words = str2.split(" ");
    var length = words.length;
    var roots = [];
    var stemmer = new Snowball('English');
    for(var i=0; i<length; i++){ 
        stemmer.setCurrent(words[i]);
        stemmer.stem();
        roots[i] = stemmer.getCurrent();
    }
    var types;
    if(corpValue == 0){
        types = countUniqueword(roots) - 5; 
    }
    else if(corpValue == 1){
        types = countUniqueword(roots) - 8; 
    }
    else if(corpValue == 2){
        types = countUniqueword(roots) - 7; 
    }
    res2(types);
}

function res2(roots){
    var answer = document.form2.roots.value;
    var sols = document.getElementById("sols2");
    if(answer == roots){
        sols.innerHTML = "Right Answer";
        sols.style.color ="green";
        document.getElementById("inp-roots").style.backgroundColor = "green";
    }
    else{
        sols.innerHTML = "Wrong Answer";
        sols.style.color ="red";
        document.getElementById("inp-roots").style.backgroundColor = "red";
    }
}