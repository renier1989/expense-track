export const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const formarFecha = fecha => {
    const fechaNueva = new Date(fecha); 
    const opciones = {
        year : 'numeric',
        month : 'long',
        day : '2-digit',
    }
    return fechaNueva.toLocaleDateString('en-US',opciones);

}

export const formatCurrency = (number)=>{
    return number.toLocaleString('en-US', {
        style : 'currency',
        currency : 'USD'
    });
}