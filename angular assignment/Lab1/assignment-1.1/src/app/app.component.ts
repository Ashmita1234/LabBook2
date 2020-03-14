import { Component } from '@angular/core';
import { SmartPhoneServiceService } from './smart-phone-service.service';
import { BasicPhoneServiceService } from './basic-phone-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public basic:string;
  public smart:string;
  mobileDetailsBasic:any[]=[{
    
    'mobileId':5456,'mobileName':'Nokia','mobileCost':8000,'mobileType':''
  }];

  mobileDetailsSmart:any[]=[{
    'mobileId':5566,'mobileName':'Vivo','mobileCost':20000,'mobileType':''
    }];
  constructor(private _basicService:BasicPhoneServiceService,private _smartService:SmartPhoneServiceService)
  {

  }
  ngOnInit()
  {
      this.basic=this._basicService.getType();
      this.smart=this._smartService.getType();
      this.mobileDetailsBasic[0].mobileType=this.basic;
      this.mobileDetailsSmart[0].mobileType=this.smart;
      this.printMobileDetails();
  }
  

  printMobileDetails()
  {
         console.log("Mobile Id-"+this.mobileDetailsBasic[0].mobileId+" "+"Mobile Name-"+this.mobileDetailsBasic[0].mobileName+" "+"Mobille Cost-"+this.mobileDetailsBasic[0].mobileCost+" "+"Mobile Type-"+this.mobileDetailsBasic[0].mobileType);
         console.log("Mobile Id-"+this.mobileDetailsSmart[0].mobileId+" "+"Mobile Name-"+this.mobileDetailsSmart[0].mobileName+" "+"Mobille Cost-"+this.mobileDetailsSmart[0].mobileCost+" "+"Mobile Type-"+this.mobileDetailsSmart[0].mobileType);
  }
}
