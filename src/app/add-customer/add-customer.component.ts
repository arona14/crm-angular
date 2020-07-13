import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerservice:CustomerService) { }

  customer : Customer=new Customer();  
  submitted = false;  

  ngOnInit(): void {
    this.submitted=false;
  }

  customersaveform=new FormGroup({  
    customer_type: new FormControl('' , [Validators.required ] ),  
    customer_agency_id: new FormControl(),  
    customer_interface_id: new FormControl(''),
    customer_name: new FormControl('', [Validators.required]),
    customer_address1: new FormControl(''),
    customer_address2: new FormControl(''),
    customer_cts_country: new FormControl(''),
    code:  new FormControl('')
    
  });

  saveCustomer(saveCustomer){  
    this.customer=new Customer();     
    this.customer.customer_type=this.CustomerType.value;
    this.customer.name=this.CustomerName.value;  
    this.customer.agency_id=this.CustomerAgencyId.value;  
    this.customer.interface_id=this.CustomerInterfaceId.value;
    this.customer.address1=this.Customeraddress1.value;
    this.customer.address2=this.CustomerAddress2.value;
    this.customer.cts_country=this.CustomerCtsCountry.value;
    // this.customer.city=this.CustomerCity.value;
    // this.customer.state=this.CustomerState.value;
    // this.customer.country=this.CustomerCountry.value;
    // this.customer.zip_code=this.CustomerZipCode.value;
    // this.customer.email=this.CustomerEmail.value;
    // this.customer.phone=this.CustomerPhone.value;  
    // this.customer.fax=this.CustomerFax.value;  
    // this.customer.responsible_agent=this.CustomerResponsibleAgent.value;
    // this.customer.iata_number=this.CustomerIataNumber.value;
    // this.customer.notes=this.CustomerNotes.value;
    // this.customer.logo_url=this.CustomerLogoUrl.value;
    // this.customer.email_itin=this.CustomerEmailItin.value;
    // this.customer.email_sched=this.CustomerEmailSched.value;
    // this.customer.email_accounting=this.CustomerEmailAccounting.value;
    this.submitted = true;  
    this.save();  
  }
  
  save() {  
    console.log(2222)
    this.customerservice.createCustomer(this.customer)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.customer = new Customer();  
  }

  get CustomerName(){  
    return this.customersaveform.get('customer_name');  
  }
  
  get CustomerType(){  
    return this.customersaveform.get('customer_type');  
  }

  get CustomerInterfaceId(){  
    return this.customersaveform.get('customer_interface_id');  
  }

  get Customeraddress1(){  
    return this.customersaveform.get('customer_address1');  
  }

  get CustomerAgencyId(){  
    return this.customersaveform.get('customer_agency_id');  
  }

  get CustomerAddress2(){  
    return this.customersaveform.get('customer_address2');  
  }

  get CustomerCtsCountry(){  
     return this.customersaveform.get('customer_cts_country');  
   }
  // get CustomerCity(){  
  //   return this.customersaveform.get('customer_city');  
  // }

  // get CustomerState(){  
  //   return this.customersaveform.get('customer_state');  
  // }

  // get CustomerCountry(){  
  //   return this.customersaveform.get('customer_country');  
  // }

  // get CustomerZipCode(){  
  //   return this.customersaveform.get('customer_zip_code');  
  // }


  // get CustomerEmail(){  
  //   return this.customersaveform.get('customer_name');  
  // }
  
  // get CustomerPhone(){  
  //   return this.customersaveform.get('customer_type');  
  // }

  // get CustomerFax(){  
  //   return this.customersaveform.get('customer_interface_id');  
  // }

  // get CustomerResponsibleAgent(){  
  //   return this.customersaveform.get('customer_agency_id');  
  // }

  // get CustomerIataNumber(){  
  //   return this.customersaveform.get('customer_address2');  
  // }

  // get CustomerNotes(){  
  //   return this.customersaveform.get('customer_city');  
  // }

  // get CustomerLogoUrl(){  
  //   return this.customersaveform.get('customer_state');  
  // }

  // get CustomerEmailItin(){  
  //   return this.customersaveform.get('customer_country');  
  // }

  // get CustomerEmailAccounting(){  
  //   return this.customersaveform.get('customer_zip_code');  
  // }

  addCustomerForm(){  
    this.submitted=false;  
    this.customersaveform.reset();  
  }  

  get CustomerEmailSched(){  
    return this.customersaveform.get('customer_zip_code');  
  }

}
