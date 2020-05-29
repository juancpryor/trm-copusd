// Add app key provided by datos.gov portal

const datosKey = 'xxxxxxxxxxxxxxxxxxx';

// API provided by datos.gov portal for TRM

const datosTRMURI = 'https://www.datos.gov.co/resource/mcec-87by.json';

// Get information from datos.gov.co portal for the submitted date

$('form').on('submit', function(event) {
    event.preventDefault();
    let fechaSolicitada = $('form').find('input[name="fecha"]').val().trim();
    let fecha = fechaSolicitada;
    let query = `https://www.datos.gov.co/resource/mcec-87by.json?vigenciadesde=` + fecha;
    document.querySelector('form').reset();    
    // Update UI and show contrainer with data    
    $("#container-trm").fadeIn(2000).removeClass("d-none");

    $.ajax({
        url: query,
        type: "GET",
        data: {
            "$$app_token" : datosKey
        }
    }).done(function(data) {
        
        // 4 nested ifs for weekend and non-banking holidays
                
        if(data.map(a => a.valor.toString()).length === 1){
            const resultTRM = data.map(a => a.valor.toString());
            $("#container-trm").fadeIn(2000).removeClass("d-none");
            $("#trm").html(`<div class="my-3" id="fechaTRM">La TRM para ${fechaSolicitada} es de</div>
                    <div class="display-4 my-4">
                        <span>COP</span>
                        <span>${resultTRM}</span>
                    </div>`);
        }   else{    
            fecha = dateFns.addDays(dateFns.parse(fecha), -1);
            fecha = dateFns.format(fecha, 'YYYY-MM-DD');
            query = `https://www.datos.gov.co/resource/mcec-87by.json?vigenciadesde=` + fecha;
            $.ajax({
                url: query,
                type: "GET",
                data: {
                    "$$app_token" : datosKey
                }
            }).done(function(data) {
                if(data.map(a => a.valor.toString()).length === 1){
                    const resultTRM = data.map(a => a.valor.toString());
                    $("#container-trm").fadeIn(2000).removeClass("d-none");
                    $("#trm").html(`<div class="my-3" id="fechaTRM">La TRM para ${fechaSolicitada} es de</div>
                            <div class="display-4 my-4">
                                <span>COP</span>
                                <span>${resultTRM}</span>
                            </div>`);
                } else {
                    fecha = dateFns.addDays(dateFns.parse(fecha), -1);
                    fecha = dateFns.format(fecha, 'YYYY-MM-DD');
                    query = `https://www.datos.gov.co/resource/mcec-87by.json?vigenciadesde=` + fecha;
                        $.ajax({
                        url: query,
                        type: "GET",
                        data: {
                            "$$app_token" : datosKey
                        }
                    }).done(function(data) {
                        if(data.map(a => a.valor.toString()).length === 1){
                            const resultTRM = data.map(a => a.valor.toString());
                            $("#container-trm").fadeIn(2000).removeClass("d-none");
                            $("#trm").html(`<div class="my-3" id="fechaTRM">La TRM para ${fechaSolicitada} es de</div>
                                    <div class="display-4 my-4">
                                        <span>COP</span>
                                        <span>${resultTRM}</span>
                                    </div>`);
                        } else {
                            fecha = dateFns.addDays(dateFns.parse(fecha), -1);
                            fecha = dateFns.format(fecha, 'YYYY-MM-DD');
                            query = `https://www.datos.gov.co/resource/mcec-87by.json?vigenciadesde=` + fecha;
                            $.ajax({
                                url: query,
                                type: "GET",
                                data: {
                                    "$$app_token" : datosKey
                                }
                            }).done(function(data) {
                                if(data.map(a => a.valor.toString()).length === 1){
                                    const resultTRM = data.map(a => a.valor.toString());
                                    $("#container-trm").fadeIn(2000).removeClass("d-none");
                                    $("#trm").html(`<div class="my-3" id="fechaTRM">La TRM para ${fechaSolicitada} es de</div>
                                            <div class="display-4 my-4">
                                                <span>COP</span>
                                                <span>${resultTRM}</span>
                                            </div>`);
                                } else {
                                        fecha = dateFns.addDays(dateFns.parse(fecha), -1);
                                        fecha = dateFns.format(fecha, 'YYYY-MM-DD');
                                        query = `https://www.datos.gov.co/resource/mcec-87by.json?vigenciadesde=` + fecha;
                                        $.ajax({
                                            url: query,
                                            type: "GET",
                                            data: {
                                                "$$app_token" : datosKey
                                            }
                                        }).done(function(data) {
                                            if(data.map(a => a.valor.toString()).length === 1){
                                                const resultTRM = data.map(a => a.valor.toString());
                                                $("#container-trm").fadeIn(2000).removeClass("d-none");
                                                $("#trm").html(`<div class="my-3" id="fechaTRM">La TRM para ${fechaSolicitada} es de</div>
                                                        <div class="display-4 my-4">
                                                            <span>COP</span>
                                                            <span>${resultTRM}</span>
                                                        </div>`);
                                            } else {
                                                console.log('There seems to be a mistake')
                                            };
                                        });    
                                    //
                                };
                            });            

                            //
                        };
                    
                        });
                };
            });
        };
    });
});
