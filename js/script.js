const FORMULARIO = document.getElementById('form-contact');

function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#78A083",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#344955",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#78A083",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#344955",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#78A083",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#344955",
            lineCap:"circle",
            animate:2000,
        });
    })
}

cargarAnimaciones();

FORMULARIO.addEventListener('submit', function(e){
    e.preventDefault();
    alert('¡Este mensaje no será enviado, pero puedes contactar por mail!')
})
