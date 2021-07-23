import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {

  constructor() { }

  @Input() dep:any;

  ngOnInit(): void {
  }

}
