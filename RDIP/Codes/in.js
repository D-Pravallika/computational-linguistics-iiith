var arr_eng =  [["John ate an apple before afternoon",
    "before afternoon John ate an apple",	
    "John before afternoon ate an apple"],
    ["some students like to study in the night",
    "at night some students like to study"],
    ["John and Mary went to church",
    "Mary and John went to church"],
    ["John went to church after eating",	
    "after eating John went to church",
    "John after eating went to church"],
    ["did he go to market",	
    "he did go to market"],
    ["the woman who called my sister sells cosmetics",
    "the woman who sells cosmetics called my sister",
    "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics"],
    ["John goes to the library and studies",
    "John studies and goes to the library"],
    ["John ate an apple so did she",
    "she ate an apple so did John"],
    ["the teacher returned the book after she noticed the error",
    "the teacher noticed the error after she returned the book",
    "after the teacher returned the book she noticed the error",
    "after the teacher noticed the error she returned the book",
    "she returned the book after the teacher noticed the error",
    "she noticed the error after the teacher returned the book",
    "after she returned the book the teacher noticed the error",
    "after she noticed the error the teacher returned the book"],
    ["I told her that I bought a book yesterday",
    "I told her yesterday that I bought a book",
    "yesterday I told her that I bought a book",
    "I bought a book that I told her yesterday",
    "I bought a book yesterday that I told her",	
    "yesterday I bought a book that I told her"]];

var arr_hin = [["राम और श्याम बाजार गयें",
     "राम और श्याम गयें बाजार",
     "बाजार गयें राम और श्याम",
     "गयें बाजार राम और श्याम"],
    ["राम सोया और श्याम भी",
     "श्याम सोया और राम भी",
     "सोया श्याम और राम भी",
     "सोया राम और श्याम भी"],
    ["मैंने उसे बताया कि राम सो रहा है",
     "मैंने उसे बताया कि सो रहा है राम",
     "उसे मैंने बताया कि राम सो रहा है",
     "उसे मैंने बताया कि सो रहा है राम",
     "मैंने बताया उसे कि राम सो रहा है",
     "मैंने बताया उसे कि सो रहा है राम",
     "उसे बताया मैंने कि राम सो रहा है",
     "उसे बताया मैंने कि सो रहा है राम",
     "बताया मैंने उसे कि राम सो रहा है",
     "बताया मैंने उसे कि सो रहा है राम",
     "बताया उसे मैंने कि राम सो रहा है",
     "बताया उसे मैंने कि सो रहा है राम"],
    ["राम खाकर सोया",
     "खाकर राम सोया",
     "राम सोया खाकर",
     "खाकर सोया राम",
     "सोया राम खाकर",
     "सोया खाकर राम"],
    ["बिल्लियों को मारकर कुत्ता सो गया",
     "मारकर बिल्लियों को कुत्ता सो गया", 
     "बिल्लियों को मारकर सो गया कुत्ता",
     "मारकर बिल्लियों को सो गया कुत्ता",
     "कुत्ता सो गया बिल्लियों को मारकर",
     "कुत्ता सो गया मारकर बिल्लियों को",
     "सो गया कुत्ता बिल्लियों को मारकर",
     "सो गया कुत्ता मारकर बिल्लियों को"],
    ["एक लाल किताब वहाँ है",
     "एक लाल किताब है वहाँ",
     "वहाँ है एक लाल किताब",
     "है वहाँ एक लाल किताब"],
    ["एक बड़ी सी किताब वहाँ है",
     "एक बड़ी सी किताब है वहाँ",
     "बड़ी सी एक किताब वहाँ है",
     "बड़ी सी एक किताब है वहाँ",
     "वहाँ है एक बड़ी सी किताब",
     "वहाँ है बड़ी सी एक किताब",
     "है वहाँ एक बड़ी सी किताब",
     "है वहाँ बड़ी सी एक किताब"]];

function Sentmsg(value){
    document.getElementById("line1l").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
    document.getElementById("line2l").innerHTML = "(<i>select the buttons in proper order</i>)";
    randomm(value);
    if(document.getElementById("wordsel").childNodes.length != 0){
        clr();
    }
}

function randomm(value){
    var button = document.getElementById("word-buttons"); 
    while (button.hasChildNodes()) {  
    button.removeChild(button.firstChild);
    }
    if (value == "1"){
        var str = arr_eng[Math.floor(Math.random() * arr_eng.length)][0]; 
        console.log(str);
        var words = randomwrd(str);
    }
        else if (value == "2"){
            var str = arr_hin[Math.floor(Math.random() * arr_hin.length)][0];
            console.log(str);
            var words = randomwrd(str);
        }
        for(var i=0; i<words.length; i++){
            var btn = document.createElement("BUTTON"); 
            btn.className = "wrd-btn";
            btn.value = words[i];
            btn.id = i;
            btn.onclick = function() {dispWords(this.id); };
            btn.innerHTML = words[i];
            document.getElementById("word-buttons").appendChild(btn); 
        }
}

function randomwrd(string){
        var words = string.split(" "); 
        var arr = shuffling(words);
        console.log(arr);

        return arr;
}

function shuffling(arr) { 
        var currentIndex = arr.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = temporaryValue;
        }      
        return arr;
}

function dispWords(id){ 
            var val = document.getElementById(id).value;
            var sentence = document.getElementById("wordsel");
            var words = sentence.innerHTML.split(" ");
            var word_count = words.length;
            var word_limit = document.getElementById("word-buttons").childElementCount;
            if (sentence.childNodes.length==0) { 
                if(document.getElementById("elements").classList.contains("hiden")){
                    document.getElementById("elements").classList.remove("hiden");
                }             
                sentence.innerHTML = val;
                var element = document.getElementById(id);
                element.classList.add("hiden");  
            }
            else if(word_count==word_limit-1){ 
                document.getElementById("checkBtn").classList.remove("hiden");
                sentence.innerHTML += " " + val;
                var element = document.getElementById(id);
                element.classList.add("hiden");  
            }
            else {
                sentence.innerHTML += " " + val;
                var element = document.getElementById(id);
                element.classList.add("hiden");          
            }
}

function clr(){
        var sentence = document.getElementById("wordsel");
        var child = document.getElementById("word-buttons").childElementCount;
        for(var i=0; i<child; i++){ 
            if(document.getElementById("word-buttons").childNodes[i].classList.contains("hiden")){
                document.getElementById("word-buttons").childNodes[i].classList.remove("hiden");
            }
        }             
        sentence.innerHTML = "";
        document.getElementById("elements").classList.add("hiden");
        document.getElementById("checkBtn").classList.add("hiden");
        document.getElementById("solsBtn").classList.add("hiden");
        document.getElementById("solsBtn").innerHTML = "Get Correct Sentence";
        document.getElementById("solution").innerHTML = "";
        document.getElementById("answers").innerHTML = "";   
}

function checkCorrectness(){
    var sentence = document.getElementById("wordsel").innerHTML;
    for(var i = 0; i < arr_eng.length; i++) {
        for(var j = 0; j < arr_eng[i].length; j++) {
            if(sentence == arr_eng[i][j]){
                document.getElementById("solution").style.color = "green";
                document.getElementById("solution").innerHTML = "Right Answer!!!";
                return true;
            }
        }
    }
    for(var i = 0; i < arr_hin.length; i++) {
        for(var j = 0; j < arr_hin[i].length; j++) {
            if(sentence == arr_hin[i][j]){
                document.getElementById("solution").style.color = "green";
                document.getElementById("solution").innerHTML = "Right Answer!!!";
                return true;
            }
        }
    }
    document.getElementById("solution").innerHTML = "Wrong Answer!!!";
    document.getElementById("solution").style.color = "red";
    document.getElementById("solsBtn").classList.remove("hiden");
    document.getElementById("solsBtn").innerHTML = "Get Correct Sentence";
    document.getElementById("answers").innerHTML = "";
    return false;
}

function Finalsols(){
    var matched_sentence;
    var language;
    var sentence = document.getElementById("wordsel");
    var btn = document.getElementById("solsBtn");
    var words = sentence.innerHTML.split(" "); 
    if (btn.innerHTML =="Get Correct Sentence"){
        btn.innerHTML = "Hide the Correct Sentence";
        for(var i = 0; i < arr_eng.length; i++) {
            if(arrayseq(words,arr_eng[i][0].split(" "))){
                language = 1;
                matched_sentence = i;
            }
        }
        for(var i = 0; i < arr_hin.length; i++) {
            if(arrayseq(words,arr_hin[i][0].split(" "))){
                language =2;
                matched_sentence = i;
            }
        }
        if (language==1){
            for(var i=0; i<arr_eng[matched_sentence].length; i++){
                document.getElementById("answers").innerHTML += arr_eng[matched_sentence][i] + "<br>";
            }
        }
        if (language==2){
            for(var i=0; i<arr_hin[matched_sentence].length; i++){
                document.getElementById("answers").innerHTML += arr_hin[matched_sentence][i] + "<br>";
            }
        }
    }
    else if (btn.innerHTML == "Hide the Correct Sentence"){
        btn.innerHTML = "GET ANSWERS";
        document.getElementById("answers").classList.add("hiden");
    }
    else{
        btn.innerHTML = "Hide the Correct Sentence";
        document.getElementById("answers").classList.re
    }
}

function arrayseq(arr1, arr2){ 
    if (!Array.isArray(arr1) || ! Array.isArray(arr2) || arr1.length !== arr2.length)
        return false;
        var arr11 = arr1.concat().sort();
        var arr22 = arr2.concat().sort();
        for (var i = 0; i < arr1.length; i++){
            if (arr11[i] !== arr22[i])
                return false;
    }
    return true;
}