function helloWorld(code){
    if (code=="en"){
        console.log("Hello world!");
    }
    else if (code == "fr"){
        console.log("Bonjour le monde!");
    }
    else if (code == "de"){
        console.log("Hallo Welt!");
    }
    else if (code===undefined){
        console.log("Hello World!");
    }
   
}

helloWorld("en");
helloWorld("de");
helloWorld("fr");
helloWorld();
