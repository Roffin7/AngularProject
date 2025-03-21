import { Component, Input } from '@angular/core';
import { service } from '../../../model/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css'
})
export class ServiceItemComponent {
  @Input() service: service= {
    id: '',
    title: '',
    description: '',
    image: ''
  };

  constructor(private router:Router){}

  onServiceClick(id:string) {
    this.router.navigate(['/services', id], { state: { title: this.service.title } });
  }
}