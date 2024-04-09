/* 2. Asegúrese de que cuando presione el botón Enviar en el formulario, se 
genere un div de 300 px de alto y 300 px de ancho y, a su vez, este div creado 
se adjunte al div #wall (no se preocupe por el contenido o el color). de ese 
div, nos ocuparemos de eso más adelante.) */

let boton = document.getElementById('boton')
let textoInput= document.getElementById('textoInput')
let textoDevuelto = document.getElementById('textoDevuelto')
let inputColor=document.getElementById('inputColor')
let divDevuelto=document.getElementById('divDevuelto')
let cerrar=document.getElementById('cerrar')


boton.addEventListener("click", (e) => {
//e.preventDefault()
console.log(e);
console.log(textoInput.value)
textoDevuelto.innerHTML=textoInput.value


})

/* 3. Cree una entrada de tipo de color para el formulario y modifique el 
script para que el fondo del nuevo div sea el color seleccionado. */

boton.addEventListener('click', (e) =>{
e.preventDefault()
console.log(inputColor.value)


divDevuelto.classList.replace('bg-white',`bg-[${inputColor.value}]`)

textoDevuelto.classList.remove('hidden')
divDevuelto.classList.remove('hidden')
cerrar.classList.remove('hidden')
})

/* 4. Agregue una "X dentro de un lapso con clase "cerrar" en cada nuevo div,
 para agregar la funcionalidad de eliminar ese graffiti. */


cerrar.addEventListener('click', e =>{
    function reinicializar(){
        divDevuelto.classList.add('hidden')
        cerrar.classList.add('hidden')
        divDevuelto.classList.replace(`bg-[${inputColor.value}]`,'bg-white')
    }
    reinicializar()
 })












