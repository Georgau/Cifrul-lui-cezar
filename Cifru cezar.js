function criptareCezar(text,cheie){
    var resultat="";
    for (let i=0;i<text.lenght;i++){
        let litera=text[i];
        if(litera.match(/[a-z]/i)){
            let codASCII= text.charCodeAt(i);
            //majuscule
            if(codASCII>=65 && codASCII<=90){
                litera = String.fromCharCode(((codASCII - 65 + cheie)% 26)+65);
            }
            else if(codASCII>= 97 && codASCII<=122){
                litera = String.fromCharCode(((codASCII-97+cheie)%26)+97);
            }
        }
        resultat += litera;
    }
    console.log(rezultat,"afisat");
    return resultat;
}
function cripteaza(){
    const text = document.getElementById('input-text').value;
    console.log(text);
    const cheie = parseInt(document.getElementById("cheie-criptare").value);

    if(isNaN(cheie)){
        document.getElementById('rezultat').innerText = "Nu este o cheie valida";
        return;
    }else{
        console.log(cheie,"este o cheie valida")
    }

    const textCriptat = criptareCezar(text,cheie)
    document.getElementById("rezultat").innerText
}