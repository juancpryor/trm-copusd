// Add app key provided by datos.gov portal

const datosKey = '8QDVstFtyXNyOSESJqn2ucpVN';

// API provided by datos.gov portal for TRM

const datosTRMURI = 'https://www.datos.gov.co/resource/mcec-87by.json';

// Request DOM for date and UI
const placeTRM = document.querySelector('#trm');
const fechaForm = document.querySelector('form');

fechaForm.addEventListener('submit', e => {
    e.preventDefault();
    const fecha = fechaForm.fecha.value.trim();
    fechaForm.reset();
    const query = datosTRMURI + `?vigenciadesde=` + fecha;
    
    $.ajax({
        url: query,
        type: "GET",
        data: {
          "$limit" : 100,
          "$$app_token" : datosKey
        }
    }).done(function(data) {
        // return data[0];
        // alert("Retrieved " + data.length + " records from the dataset!");
        const result = data.map(a => a.valor.toString());
        console.log(data);
        console.log(result);
        placeTRM.innerHTML = `<div class="my-3" id="fechaTRM">La TRM para ${fecha} es de</div>
                <div class="display-4 my-4">
                    <span>COP</span>
                    <span>${result}</span>
                </div>`;
    });
    console.log(fecha);
});
