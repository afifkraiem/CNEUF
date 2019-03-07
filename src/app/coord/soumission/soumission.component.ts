import { CandidatureService } from './../../services/candidature.service';
import { Candidature } from './../../candidature';
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
candidature: Candidature;
parts: any [];
testnom: string;
pnom: string;
    constructor(private fb: FormBuilder, private tokenstorage: TokenStorageService, private candserice: CandidatureService) {

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
        academiques: this.fb.array([]),
        economiques: this.fb.array([]),
        autres: this.fb.array([]),
        implantations: this.fb.array([]),
        partenaires: this.fb.array([]) 

      });
      if (this.tokenstorage.getToken()) {
        this.username = this.tokenstorage.getUsername();
        console.log(this.username);
      }
    }
    createinst() {
      return this.fb.group ({
      fpa1: '',
      cfpa1: '',
      fpa2: '',
      cfpa2: '',
      fpa3: '',
      cfpa3: '',
      fpa4: '',
      cfpa4: '',
      ipa1: '',
      cipa1: '',
      ipa2: '',
      cipa2: '',
      ipa3: '',
      cipa3: '',
      ipa4: '',
      cipa4: '',
      ppa1: '',
      cppa1: '',
      ppa2: '',
      cppa2: '',
      ppa3: '',
      cppa3: '',
      ppa4: '',
      cppa4: ''
      
      });
      } 

    createPart() {
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
      acad.push(this.createPart() );
     
    const part = <FormArray>this.form.controls.partenaires as FormArray;
    part.push(this.createinst() ); 
    }

  get partesnaires() {
    return this.form.get('partenaires') as FormArray;
    } 

  removePart(index) {
    this.acadForms.removeAt(index);
  }

  get ecoForms() {
    return this.form.get('economiques') as FormArray;
  }

  addEco() {
  const eco = <FormArray>this.form.controls.economiques as FormArray;
    eco.push(this.createPart());
    const part = <FormArray>this.form.controls.partenaires as FormArray;
    part.push(this.createinst() ); 
 
}

removeEco(index) {
  this.ecoForms.removeAt(index);
}
get autForms() {
  return this.form.get('autres') as FormArray;
}

addAut() {
const aut = <FormArray>this.form.controls.autres as FormArray;
  aut.push(this.createPart());
  const part = <FormArray>this.form.controls.partenaires as FormArray;
    part.push(this.createinst() ); 
 
}
removeAut(index) {
this.autForms.removeAt(index);
}

get implForms() {
  return this.form.get('implantations') as FormArray;
}

addImpl() {
const impl = <FormArray>this.form.controls.implantations as FormArray;
  impl.push(this.createPart());
  const part = <FormArray>this.form.controls.partenaires as FormArray;
    part.push(this.createinst() ); 
 
}
removeImpl(index) {
this.implForms.removeAt(index);
}

Soumettre() {
  console.log(this.form.value);
  console.log('hello');
  console.log(this.form.controls.academiques.value.nom);
  }
  test(){
  
    this.testnom = this.form.controls.nom_projet.value;
    console.log(this.testnom);
   
  }

  test1(){
  
    this.parts = this.form.controls.academiques.value;
    this.parts.every(part => {
      console.log(part.nom);
      this.pnom = part.nom;
      return true;
      });
  }
  }

