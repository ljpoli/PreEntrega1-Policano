let edad = Number (prompt("Ingrese su edad"));

if ( edad >= 18 ){  
    console.log ("Sos mayor de edad!");

}else{ ( edad < 18 )
    alert ("Los valores de esta tabla no se ajustan a tu edad");
    alert ("Ingrese ``Esc`` para salir").toUpperCase();
}

    do {

    
    let total = "";
            

    let peso = Number (prompt("Ingrese su peso en kg"));
    let altura = Number (prompt("Ingrese su altura en m"));

    total = peso / (altura * altura)
    alert ("su imc es: "+total)
    
    switch (true){
        
    case total >12 && total < 18.4:
    alert ("Peso bajo");
    break;
   

    case total > 18.5 && total < 24.9:
    alert ("Peso normal");
    break;
     

    case total > 25 && total < 29.9:
    alert ("Sobrepeso");
    break;
   

    case total = 30 && total > 30:
    alert ("Obesidad");
    break;

    default:
    alert ("Estos resultados no son validos");
    break;  
}

        

    rta = prompt("Ingrese``Esc`` para salir. U otra letra para continuar").toUpperCase();
    }while(rta != "Esc")

    


