function pluralizer(noun,number){
    if(noun=="goose"){
        plural=number+" geese";
    }
    else{
    plural=number+" "+noun+"s";
    }
    return plural;
}

let plural;
plural=pluralizer("cat",3);
console.log(plural);
plural=pluralizer("goose",3);
console.log(plural);