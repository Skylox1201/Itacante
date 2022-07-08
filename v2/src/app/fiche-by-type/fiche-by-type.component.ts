import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fiche } from '../fiche/models/fiche.model';
import { FicheService } from '../services/fiche.service';


@Component({
  selector: 'app-fiche-by-type',
  templateUrl: './fiche-by-type.component.html',
  styleUrls: ['./fiche-by-type.component.scss']
})
export class FicheByTypeComponent implements OnInit {

  fiche!: Fiche;
  constructor(private ficheService: FicheService,
    private route: ActivatedRoute){}


  ngOnInit(): void {
    const fiche_type = this.route.snapshot.params['type'];
    this.fiche = this.ficheService.getFicheByType(fiche_type)
  }

}
