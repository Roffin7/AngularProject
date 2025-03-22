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

  serviceTypes: string[] = [
     'All',
    'Branding and Communication',
    'Inbound & Content Marketing',
    'Film & Webinar',
    'Digital Marketing',
    'ECommerce & Websites',
    'Market Analysis'
    ];

    selected:string = 'All'
    constructor(private api:ApiService){

    }
  
    ngOnInit(){ 
       this.api.getEnquiries().subscribe({
         next: (response:Enquiry[]) => {
           this.enquiries = response;
         },
         error: (error) => {
           console.log("Error while fetching enquiries", error);
         }
    })
  }

}
