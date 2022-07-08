import { Component, OnInit } from '@angular/core';
import { Fiche } from '../fiche/models/fiche.model';
import { FicheService } from '../services/fiche.service';

@Component({
  selector: 'app-fiche-list',
  templateUrl: './fiche-list.component.html',
  styleUrls: ['./fiche-list.component.scss']
})
export class FicheListComponent implements OnInit {

  fiches!: Fiche[];

  constructor(private ficheService : FicheService) {  }

  ngOnInit(): void {
    this.fiches = this.ficheService.getAllFiches();
  }

}
