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
        partenaireAcad: this.fb.array([]),
        partenaireSe: this.fb.array([]),
        partenaireAutre: this.fb.array([]),
        implantations: this.fb.array([]),
        partenaires: this.fb.array([])

      });
      if (this.tokenstorage.getToken()) {
        this.username = this.tokenstorage.getUsername();
        console.log(this.username);
      }

    }
    createPart() {
      return this.fb.group({
        institution: '',
        nom: '',
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
    createinst() {
      return this.fb.group ({
        fpa1: '',
        fpa2: '',
        fpa3: '',
        fpa4: '',
        ipa1: '',
        ipa2: '',
        ipa3: '',
        ipa4: '',
        ppa1: '',
        ppa2: '',
        ppa3: '',
        ppa4: ''

      });
    }
    get acadForms() {
      return this.form.get('partenaireAcad') as FormArray;
    }
    get partesnaires() {
      return this.form.get('partenaires') as FormArray;
    }

    addParts() {
    const acad = <FormArray>this.form.controls.partenaireAcad as FormArray;
      acad.push(this.createPart() );

      const part = <FormArray>this.form.controls.partenaires as FormArray;
      part.push(this.createinst() );
    }
  removePart(index) {
    this.acadForms.removeAt(index);
  }

  get ecoForms() {
    return this.form.get('partenaireSe') as FormArray;
  }

  addEco() {
  const eco = <FormArray>this.form.controls.partenaireSe as FormArray;
    eco.push(this.createPart());
}

removeEco(index) {
  this.ecoForms.removeAt(index);
}
get autForms() {
  return this.form.get('partenaireAutre') as FormArray;
}

addAut() {
const aut = <FormArray>this.form.controls.partenaireAutre as FormArray;
  aut.push(this.createPart());
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
}
removeImpl(index) {
this.implForms.removeAt(index);
}

Soumettre() {
  console.log(this.form.value);
  console.log('hello');
  this.candserice.saveCand(this.form.value).subscribe( data => {
    alert('cneuf created successfully.');
  });
  }
 
  }

