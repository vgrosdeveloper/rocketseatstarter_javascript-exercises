function experiencia(anosdeestudo) {
    if( anosdeestudo >= 0 && anosdeestudo <= 1){
        console.log('Iniciante');
    } else if (anosdeestudo >= 1 && anosdeestudo <= 3){
        console.log('Intermediário');
    } else if (anosdeestudo >= 3 && anosdeestudo <= 6){
        console.log('Avançado'); 
    } else {
        console.log('Jedi Master');
    }
}
    var anosdeestudo = 5;
    
    console.log(experiencia(anosdeestudo));
 