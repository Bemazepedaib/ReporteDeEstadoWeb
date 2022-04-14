import { Component } from '@angular/core';
import axios from 'axios'

let dependencias: Array<String> =
  ["DESPACHO EJECUTIVO|https://www.nayarit.gob.mx/HTML/despacho.html",
    "SECRETARIA GENERAL DE GOBIERNO|https://sgg.nayarit.gob.mx/",
    "SECRETARIA DE ADMINISTRACION Y FINZANZAS|https://www.hacienda-nayarit.gob.mx/",
    "SECRETARÍA DE DES. SUSTENTABLE|https://sds.nayarit.gob.mx/",
    "SECRETARÍA DE INFRAESTRUCTURA|https://sop.nayarit.gob.mx/",
    "SECRETARÍA DE EDUCACIÓN|https://educacion.nayarit.gob.mx/",
    "SECRETARÍA DE DES. RURAL|https://www.sederma.gob.mx/",
    "SECRETARÍA PARA LA HONESTIDAD Y BUENA GOBERNANZA|https://www.contraloria.nayarit.gob.mx/",
    "SECRETARÍA DE ECONOMIA|https://economia.nayarit.gob.mx/",
    "SECRETARÍA DE TURISMO|https://www.nayarit.gob.mx/images/SitioEnConstruccion.png",
    "SECRETARÍA DE SALUD|http://www.ssn.gob.mx/Portal/index.php",
    "SECRETARÍA DE BIENESTAR E IGUALDAD SUSTANTIVA|http://www.ssn.gob.mx/Portal/index.php",
    "SECRETARÍA DE MOVILIDAD|https://www.nayarit.gob.mx/images/SitioEnConstruccion.png",
    "SECRETARÍA DE SEGURIDAD Y PROTECCIÓN CIUDADANA|https://www.nayarit.gob.mx/images/SitioEnConstruccion.png",
    "SISTEMA DE AGENDA GUBERNAMENTAL|https://sag.nayarit.gob.mx/#/login",
    "MANO CON MANO|https://dev.nayarit.gob.mx/",
    "NIÑOS DEL MILENIO|https://fideicomisoninosdelmilenio.nayarit.gob.mx/",
    "INSTITUTO NAYARITA DE EDUCACIÓN PARA ADULTOS|https://inea.nayarit.gob.mx/",
    "REACTIVACIÓN TURÍSTICA|https://reactivacionturistica.nayarit.gob.mx/#/",
    "REGISTRO CIVIL|https://registrocivil.nayarit.gob.mx/",
    "ORGANIGRAMA|http://organigrama.nayarit.gob.mx/",
    "SECRETARIA DE DESARROLLO SOCIAL.|http://sedeso.nayarit.gob.mx/",
    "SISTEMA DE INFORMACIÓN ESTATAL|https://sie.nayarit.gob.mx/login",
    "PLATAFORMA SSMESSICyT|https://ssemssicyt.nayarit.gob.mx/login/",
    "PORTAL DE TRANSPARENCIA|https://transparencia.nayarit.gob.mx/",
    "REGISTROS DE TRAMITES Y SERVICIOS|http://tramites.nayarit.gob.mx/"]

let organismos: Array<String> =
  ["COMISION ESTATAL DE AGUA POTABLE Y ALCANTARILLADO|https://cea.nayarit.gob.mx/",
    "FIDEICOMISO FOVIMNAY|https://fovim.nayarit.gob.mx/",
    "PERIODICO OFICIAL|https://periodicooficial.nayarit.gob.mx/",
    "INSTITUTO TECNOLOGICO DEL NORTE DE NAYARIT|https://itnortedenayarit.edu.mx/",
    "SEGUIMIENTO DE OFICIOS|https://seguimiento.nayarit.gob.mx/login",
    "CEDULA PROFESIONAL|http://cedulaprofesional.nayarit.gob.mx/",
    "CECAMED|https://www.cecamed.nayarit.gob.mx/seccion/conocenos/quienes_somos",
    "BENEFICIENCIA PÚBLICA DEL ESTADO DE NAYARIT|https://beneficencia.nayarit.gob.mx/",
    "CEAIV|https://ceaiv.nayarit.gob.mx/",
    "CENTRO DE JUSTICIA FAMILIAR|https://www.cjfamiliar.nayarit.gob.mx/",
    "COMISIÓN FORESTAL DE NAYARIT|https://www.cofonay.nayarit.gob.mx/",
    "FIDEICOMISO DE PROMOCIÓN TURÍSTICA|https://fiprotur.nayarit.gob.mx/",
    "FONDOS DE FOMENTO INDUSTRIAL DEL ESTADO DE NAYARIT|https://www.fondosnayarit.gob.mx/",
    "INSTITUTO NAYARITA DE CULTURA FISICA Y DEPORTE|https://incufid.nayarit.gob.mx/",
    "COVID-19|https://covid19.nayarit.gob.mx/",
    "TEATRO DEL PUEBLO|https://teatrodelpueblo.nayarit.gob.mx/",
    "CONSEJO ESTATAL CONTRA LAS ADICCIONES|https://www.ceca.nayarit.gob.mx/",
    "INSTITUTO NAYARITA DE LA JUVENTUD|https://www.injuve.nayarit.gob.mx/#slides",
    "INSTITUTO PARA LA MUJER NAYARITA|http://inmunay.nayarit.gob.mx/",
    "REPORTE INMUEBLES|http://reporte.inmuebles.nayarit.gob.mx/login.aspx",
    "SEGURO POPULAR|http://seguropopular.nayarit.gob.mx/",
    "SISTEMA DE RADIO Y TELEVISIÓN DE NAYARIT|https://www.srtn.nayarit.gob.mx/",
    "TV10|http://www.10tv.nayarit.gob.mx/",
    "UNIVERSIDAD TECNOLOGICA DE LA SIERRA|https://utsierra.nayarit.gob.mx/",
    "FONDOS ESTATALES DE FINANCIAMIENTO|https://fircaes.nayarit.gob.mx/",
    "TRANSPARENCIA FISCAL|https://www.nayarit.gob.mx/transparenciafiscal/",
    "KOHA|http://bibliotecaalameda-intra.nayarit.gob.mx/",
    "ALERTA DE VIOLENCIA DE GÉNERO CONTRA LAS MUJERES|https://avgm.nayarit.gob.mx/",
    "REPRESENTACIÓN CIUDAD DE MÉXICO -NAYARIT|https://www.cdmx.nayarit.gob.mx/",
    "FISCALÍA GENERAL DEL ESTADO DE NAYARIT|https://fiscaliageneral.nayarit.gob.mx/web/",
    "NAYARIT ENAMORA|https://admin.nayaritenamora.nayarit.gob.mx/#/login",
    "SISTEMA DE GESTIÓN DE BIBLIOTECA|https://solonarguello.nayarit.gob.mx/",
    "DIF NAYARIT|http://dif-nayarit.gob.mx/",
    "GOBIERNO DE ACAPONETA|https://acaponeta.nayarit.gob.mx/",
    "DIF ACAPONETA|http://dif.acaponeta.nayarit.gob.mx/",
    "DIF SANTA MARIA DEL ORO|https://dif.santamariadeloro.nayarit.gob.mx/",
    "INSTITUTO MUNICIPAL DE PLANEACIÓN DE SAMAO|https://implansmo.nayarit.gob.mx/",
    "GOBIERNO DE SAMAO|http://santamariadeloro.nayarit.gob.mx/"]

@Component({
  selector: 'app-tabladatos',
  templateUrl: './tabladatos.component.html',
  styleUrls: ['./tabladatos.component.css']
})
export class tabladatosComponent {
  a = dependencias[0].split("|")
  b = organismos[0].split("|")
  rows1 = [{ 'no': (1).toString(), 'estado': estadoCheck(this.a[1]), 'pagina': this.a[0], 'enlace': this.a[1] }];
  columns1 = [{ prop: 'No' }, { name: 'Estado' }, { name: 'Pagina' }, { name: 'Enlace' }];
  rows2 = [{ 'no': (1).toString(), 'estado': estadoCheck(this.b[1]), 'pagina': this.b[0], 'enlace': this.b[1] }];
  columns2 = [{ prop: 'No' }, { name: 'Estado' }, { name: 'Pagina' }, { name: 'Enlace' }];

  constructor() {
    for (let i = 1; i < dependencias.length; i++) {
      var depe = dependencias[i].split("|")
      this.rows1.push({ 'no': (i + 1).toString(), 'estado': estadoCheck(depe[1]), 'pagina': depe[0], 'enlace': depe[1] })
      this.columns1.pop
    }
    for (let i = 1; i < organismos.length; i++) {
      var orga = organismos[i].split("|")
      this.rows2.push({ 'no': (i + 1).toString(), 'estado': estadoCheck(orga[1]), 'pagina': orga[0], 'enlace': orga[1] })
      this.columns2.pop
    }
  }
  visitarlink(link: any) {
    window.open(link.enlace, "Diseño Web", "width=max, height=max")
  }
  getCellClass({ row, column, value }: any): any {
    return {
      'is-activo': value === 'Activo',
      'is-inactivo': value === 'Inactivo',
      'is-warning': value === 'Alerta'
    };
  }
}
//https://cea.nayarit.gob.mx/
//http://organigrama.nayarit.gob.mx/
//http://sedeso.nayarit.gob.mx/ 

function estadoCheck(link: String) {
  var a = ""
  var status=-1
  axios({
    method: 'get',
    url: link.toString()
  })
  .catch(error => {
    if (error.response) {
      console.log(error.response)
      status=error.response.status
    } else if (error.request) {
      console.log(error.request)
    } else {
      // anything else
    }
  })
  //.then(res => console.log(res))
  //.catch(err => console.error(err));
  // 200,302,404,401,ERR_NAME_NOT_RESOLVED,ERR_CERT_DATE_INVALID
  console.log(status)
  switch (status) {
    case 200:
      a = 'Activo';
      break;
    /*case 'ERR_NAME_NOT_RESOLVED':
      a = 'Inactivo'
      break;*/
    default:
      a = 'Inactivo';
      break;
  }
  return a
}