import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Enquiry } from '../../model/enquiry';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {
    enquiries: Enquiry[] = [];
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.apiService.getEnquiries().subscribe(data => {
        this.enquiries = data;
      });
    }

}
