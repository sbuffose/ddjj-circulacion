function createCertificate() {
  // Certificate Number
  let number = 0;
  // Campos
  const nombre = document.querySelector('#nombres');
  const apellido = document.querySelector('#apellido');
  const dni = document.querySelector('#dni');
  const dni_confirm = document.querySelector('#dni_confirm');
  const nro_tramite = document.querySelector('#nro_tramite');
  const nro_tramite_confirm = document.querySelector('#nro_tramite_confirm');
  const genero = document.querySelector('#genero');
  const cuil_1 = document.querySelector('#cuil_1');
  const cuil_2 = document.querySelector('#cuil_2');
  const cuil_3 = document.querySelector('#cuil_3');
  const cel_cod_area = document.querySelector('#cel_cod_area');
  const cel_number = document.querySelector('#cel_number');
  const email = document.querySelector('#email');
  const email_confirm = document.querySelector('#email_confirm');
  const direccion = document.querySelector('#direccion');
  const provincia = document.querySelector('#provincia');
  const localidad = document.querySelector('#localidad');
  const cuit_empleador = document.querySelector('#cuit_empleador');
  const actividad_profesional = document.querySelector('#actividad_profesional');
  const lugar_profesional = document.querySelector('#lugar_profesional');
  const empresa_particular_profesional = document.querySelector('#empresa_particular_profesional');
  const telefono_laboral = document.querySelector('#telefono_laboral');
  const patente_vehiculo = document.querySelector('#patente_vehiculo');
  const motivo_circulacion_22 = document.querySelector('#motivo_circulacion_22');
  chrome.storage.sync.get('number', function(data) {
    number = data.number;
    chrome.storage.sync.set({number: number + 1})
  })

  chrome.storage.sync.get('certificates', function(data) {
    nombre.value = data.certificates[number][0];
    apellido.value = data.certificates[number][1];
    dni.value = data.certificates[number][2];
    dni_confirm.value = data.certificates[number][2];
    nro_tramite.value = data.certificates[number][3];
    nro_tramite_confirm.value = data.certificates[number][3];
    cuil_1.value = data.certificates[number][5].slice(0, 2);
    cuil_2.value = data.certificates[number][5].slice(2, data.certificates[number][5].length - 1);
    cuil_3.value = data.certificates[number][5].slice(data.certificates[number][5].length - 1, 1);
    cel_cod_area.value = data.certificates[number][6];
    cel_number.value = data.certificates[number][7];
    email.value = data.certificates[number][8];
    email_confirm.value = data.certificates[number][8];
    direccion.value = data.certificates[number][9];
    provincia.value = "AR-B";
    localidad.value = data.certificates[number][11];
    cuit_empleador.value = data.certificates[number][12];
    actividad_profesional.value = data.certificates[number][13];
    lugar_profesional.value = data.certificates[number][14];
    empresa_particular_profesional.value = data.certificates[number][15];
    telefono_laboral.value = data.certificates[number][16];
    patente_vehiculo.value = data.certificates[number][17];
    motivo_circulacion_22.value = 22;
    if (data.certificates[number][4] === "M") {
      genero.value = "M"
    } else if (data.certificates[number][4] === "F") {
      genero.value = "F"
    } else {
      alert("Revisar campo 'Genero'")
    }
    if (data.number === data.certificates.length ) {
      alert("Esa fue la última persona en el excel.")
    }
  });
}

createCertificate();

