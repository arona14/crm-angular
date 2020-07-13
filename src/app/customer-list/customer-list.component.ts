import { Component, OnInit } from '@angular/core';  
import { CustomerService } from '../customer.service';  
import { Customer } from '../customer';  
import { Observable,Subject } from "rxjs";  

  
import {FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerservice:CustomerService) { }

  customersArray: any[] = [];  
  dtOptions = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  customers: Observable<Customer[]>;  
  customer : Customer=new Customer();  
  deleteMessage=false;  
  customerlist:any;  
  isupdated = false; 

  ngOnInit(): void {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.customerservice.getCustomerList().subscribe(data =>{  
    this.customers =data;  
    this.dtTrigger.next();  
    })  
  }

  deleteCustomer(code: string) {  
    this.customerservice.deleteCustomer(code)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.customerservice.getCustomerList().subscribe(data =>{  
            this.customers =data  
            })  
        },  
        error => console.log(error));  
  }  

  updateCustomer(code: string){  
    this.customerservice.getCustomer(code)  
      .subscribe(  
        data => {  
          this.customerlist=[data]            
        },  
        error => console.log(error));  
  }

  customerupdateform=new FormGroup({  
    customer_code:new FormControl(),  
    customer_name:new FormControl(),  
    customer_type:new FormControl(),  
    student_branch:new FormControl(),
    customer_agency_id: new FormControl(),
    customer_interface_id: new FormControl(),
    customer_address1: new FormControl(),
    customer_address2: new FormControl(),
    customer_cts_country: new FormControl(),
  });

  updateCust(){  
    this.customer=new Customer();   
   this.customer.code=this.CustomerCode.value;
   this.customer.customer_type=this.CustomerType.value; 
   this.customer.name=this.CustomerName.value;  
   this.customer.agency_id=this.CustomerAgencyId.value;  
   this.customer.interface_id=this.CustomerInterfaceId.value;    
   this.customer.address1 = this.Customeraddress1.value;
   this.customer.address2 = this.CustomerAddress2.value;
   this.customer.cts_country = this.CustomerCtsCountry.value;
   console.log(11111111111111111)
   console.log(this.customer)
   this.customerservice.updateCustomer(this.customer.code, this.customer).subscribe(  
    data => {       
      this.isupdated=true;  
      this.customerservice.getCustomerList().subscribe(data =>{  
        this.customer =data  
        })  
    },  
    error => console.log(error));  
  }  

  get CustomerName(){  
    return this.customerupdateform.get('customer_name');  
  }
  
  get CustomerType(){  
    return this.customerupdateform.get('customer_type');  
  }

  get CustomerInterfaceId(){  
    return this.customerupdateform.get('customer_interface_id');  
  }

  get Customeraddress1(){  
    return this.customerupdateform.get('customer_address1');  
  }

  get CustomerAgencyId(){  
    return this.customerupdateform.get('customer_agency_id');  
  }

  get CustomerAddress2(){  
    return this.customerupdateform.get('customer_address2');  
  }

  get CustomerCtsCountry(){  
     return this.customerupdateform.get('customer_cts_country');  
   }
  get CustomerCode(){  
    return this.customerupdateform.get('customer_code');  
   }
  
   changeisUpdate(){  
    this.isupdated=false;  
  }  
}
