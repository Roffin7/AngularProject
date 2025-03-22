import { Pipe, PipeTransform } from '@angular/core';
import { Enquiry } from '../model/enquiry';

@Pipe({
  name: 'filterservice'
})
export class FilterservicePipe implements PipeTransform {

  transform(enquirylist: Enquiry[], serviceType:string): Enquiry[] {
    if(serviceType === 'All') 
      return enquirylist;
    
    return enquirylist.filter(enquiry => enquiry.serviceType === serviceType);
  }

}