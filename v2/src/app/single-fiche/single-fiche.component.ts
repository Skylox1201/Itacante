import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fiche } from '../fiche/models/fiche.model';
import { FicheService } from '../services/fiche.service';

@Component({
  selector: 'app-single-fiche',
  templateUrl: './single-fiche.component.html',
  styleUrls: ['./single-fiche.component.scss']
})
export class SingleFicheComponent implements OnInit {

  fiche!: Fiche;
  constructor(private ficheService: FicheService,
    private route: ActivatedRoute){}


  ngOnInit(): void {
    const fiche_id = +this.route.snapshot.params['id'];
    this.fiche = this.ficheService.getFicheById(fiche_id);
  }

}
