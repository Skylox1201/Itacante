import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FicheService } from '../services/fiche.service';
import { Fiche } from './models/fiche.model';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit{
  @Input() fiche!: Fiche;

  constructor(private ficheService: FicheService,
    private router: Router){}

  ngOnInit() {

  }

  onViewFiche() {
    this.router.navigateByUrl(`fiches/${this.fiche.id}`)
  }
}
