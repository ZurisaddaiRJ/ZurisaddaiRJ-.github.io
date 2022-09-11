import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Orizaba, Ver.",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros : [
        { descripcion: "Estudio del Arduino" },
        { descripcion: "Elaboración de un Arduino" }
      ]
    };
    let work2 = {
      fecha: "2014-2018",
      ubicacion: "Orizaba, Ver.",
      puesto: "CEO",
      empresa: "ADESOFT",
      logros : [
        { descripcion: "Estudio de mecatrónica" },
        { descripcion: "Elaboración de un Prototipo" }
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);


  }

}
