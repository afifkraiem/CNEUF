import { CandidatureService } from './../../services/candidature.service';
import { Candidature } from './../../candidature';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
        RecettePartAutre: this.fb.array([]),
        RecetteAUF: this.fb.group ({
          afa1: new FormControl(''),
          cafa1: new FormControl(''),
          afa2: new FormControl(''),
          cafa2: new FormControl(''),
          afa3: new FormControl(''),
          cafa3: new FormControl(''),
          afa4: new FormControl(''),
          cafa4: new FormControl(''),
          aia1: new FormControl(''),
          caia1: new FormControl(''),
          aia2: new FormControl(''),
          caia2: new FormControl(''),
          aia3: new FormControl(''),
          caia3: new FormControl(''),
          aia4: new FormControl(''),
          caia4: new FormControl(''),
          apa1: new FormControl(''),
          capa1: new FormControl(''),
          apa2: new FormControl(''),
          capa2: new FormControl(''),
          apa3: new FormControl(''),
          capa3: new FormControl(''),
          apa4: new FormControl(''),
          capa4: new FormControl(''),
          }),
          Depences: this.fb.group({
            d_fct_a1: '',
            d_fct_a2: '',
            d_fct_a3: '',
            d_fct_a4: '',
            d_invest_a1: '',
            d_invest_a2: '',
            d_invest_a3: '',
            d_invest_a4: '',
            d_perso_a1: '',
            d_perso_a2: '',
            d_perso_a3: '',
            d_perso_a4: '',
            m_d_fct_a1: '',
            m_d_fct_a2: '',
            m_d_fct_a3: '',
            m_d_fct_a4: '',
            m_d_invest_a1: '',
            m_d_invest_a2: '',
            m_d_invest_a3: '',
            m_d_invest_a4: '',
            m_d_perso_a1: '',
            m_d_perso_a2: '',
            m_d_perso_a3: '',
            m_d_perso_a4: ''

          }),
          devis_travaux: '',
          budget_prev: '',
          equipement: '',
          charte_qualite: '',
          cgu: ''



      });

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
      cppa4: '',
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
          paa4: '',
          cfaa1: '',
          cfaa2: '',
          cfaa3: '',
          cfaa4: '',
          ciaa1: '',
          ciaa2: '',
          ciaa3: '',
          ciaa4: '',
          cpaa1: '',
          cpaa2: '',
          cpaa3: '',
          cpaa4: ''

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
        psa4: '',
        cfsa1: '',
        cfsa2: '',
        cfsa3: '',
        cfsa4: '',
        cisa1: '',
        cisa2: '',
        cisa3: '',
        cisa4: '',
        cpsa1: '',
        cpsa2: '',
        cpsa3: '',
        cpsa4: ''
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
        pta4: '',
        cfta1: '',
        cfta2: '',
        cfta3: '',
        cfta4: '',
        cita1: '',
        cita2: '',
        cita3: '',
        cita4: '',
        cpta1: '',
        cpta2: '',
        cpta3: '',
        cpta4: ''



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
      part.push(this.createRecAcad());
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

