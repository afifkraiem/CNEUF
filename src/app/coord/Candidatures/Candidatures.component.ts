import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-Candidatures',
  templateUrl: './Candidatures.component.html',
  styleUrls: ['./Candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.form = this.fb.group({
      nom_projet: '',
      presentation: '',
      nom_porteur_projet: '',
      date_debut: '',
      direction_reg: '',
      duree: '',
      montant_global: '',
      montant_auf: '',
      contexte: '',
      objectif: '',
      cadre_logic: '',
      description: '',
      localisation: '',
      locaux: '',
      plan_amenagement: '',
      stratg_comm: '',
      stratg_perren: '',
      gouvernance: '',
      date_transfert: '',
      org_opera: '',
      


      academiques: this.fb.array([this.addAcad()]),
    });
  }
  addAcad() {
    return this.fb.group({
      institution: '',
      nom: '',
      document: '',
      lettre: '',
      fonction: '',
      tel: '',
      num: '',
      email: '',
      adresse: '',
      code: '',
      ville: '',
      pays: '',
      doc: '',
    });
  }
  get acadForms() {
    return this.form.get('academiques') as FormArray;
  }

  addParts() {
  const acad = <FormArray>this.form.controls.academiques as FormArray;
    acad.push(this.fb.group({
      institution: '',
      nom: '',
      document: '',
      lettre: '',
      fonction: '',
      tel: '',
      num: '',
      email: '',
      adresse: '',
      code: '',
      ville: '',
      pays: '',
      doc: '',
    }));
  }
removePart(index) {
  this.acadForms.removeAt(index);
}
}
