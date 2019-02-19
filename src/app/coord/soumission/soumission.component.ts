import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.css']
})
export class SoumissionComponent implements OnInit {

    form: FormGroup;
username: any;
    constructor(private fb: FormBuilder, private tokenstorage: TokenStorageService) {

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
      if (this.tokenstorage.getToken()) {
        this.username = this.tokenstorage.getUsername();
        console.log(this.username);
      }
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

