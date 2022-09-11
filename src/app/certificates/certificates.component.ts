import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let cert1 = {
      titulo: "Reconocimiento de Primaria (2014).",
      descripcion: "Por haber obtenido el mayor promedio de la generación."
    };

    let cert2 = {
      titulo: "Reconocimiento de Secundaria (2017).",
      descripcion: "Por haber obtenido el segundo lugar con mejor promedio de la generación."
    };

    let cert3 = {
      titulo: "Reconocimiento de Preparatoria (2020).",
      descripcion: "Por haber obtenido el segundo lugar con el mejor promedio de la generación."
    };

    let cert4 = {
      titulo: "Reconocimiento de Programación",
      descripcion: "Por haber participado en una competencia de programación"
    };

    let cert5 = {
      titulo: "Proyecto de Domótica",
      descripcion: "Realización exitosa de un proyecto utilizando la domótica"
    };


    this.certificates.push(cert1);
    this.certificates.push(cert2);
    this.certificates.push(cert3);
    this.certificates.push(cert4);
    this.certificates.push(cert5);


  }

}
