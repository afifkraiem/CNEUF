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
        partenaireAcad: this.fb.array([]),
        partenaireSe: this.fb.array([]),
        partenaireAutre: this.fb.array([]),
        implantations: this.fb.array([]),
        RecettePartAcad: this.fb.array([]),
        RecettePartSe: this.fb.array([]),
        RecettePartAutre: this.fb.array([])



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
    createRecAcad() {
      return this.fb.group ({
        faa1: '',
        faa2: '',
        faa3: '',
        faa4: '',
        iaa1: '',
        iaa2: '',
        iaa3: '',
        iaa4: '',
        paa1: '',
        paa2: '',
        paa3: '',
        paa4: ''

      });
    }
    createRecSe() {
      return this.fb.group ({
        fsa1: '',
        fsa2: '',
        fsa3: '',
        fsa4: '',
        isa1: '',
        isa2: '',
        isa3: '',
        isa4: '',
        psa1: '',
        psa2: '',
        psa3: '',
        psa4: ''

      });
    }
    createRecAut() {
      return this.fb.group ({
        fta1: '',
        fta2: '',
        fta3: '',
        fta4: '',
        ita1: '',
        ita2: '',
        ita3: '',
        ita4: '',
        pta1: '',
        pta2: '',
        pta3: '',
        pta4: ''

      });
    }
    get acadForms() {
      return this.form.get('partenaireAcad') as FormArray;
    }
    get recAcad() {
      return this.form.get('RecettePartAcad') as FormArray;
    }
    get recSe() {
      return this.form.get('RecettePartSe') as FormArray;
    }
    get recAut() {
      return this.form.get('RecettePartAutre') as FormArray;
    }

    addParts() {
    const acad = <FormArray>this.form.controls.partenaireAcad as FormArray;
      acad.push(this.createPart() );

      const part = <FormArray>this.form.controls.RecettePartAcad as FormArray;
      part.push(this.createRecAcad() );
    }

  get partesnaires() {
    return this.form.get('partenaires') as FormArray;
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
    const part = <FormArray>this.form.controls.RecettePartSe as FormArray;
    part.push(this.createRecSe() );   
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
  const part = <FormArray>this.form.controls.RecettePartAutre as FormArray;
      part.push(this.createRecAut() );
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
  this.candserice.saveCand(this.form.value).subscribe( data => {
    alert('cneuf created successfully.');
  });
  }
 
  }

