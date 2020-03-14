import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicPhoneServiceService {

  public getType()
  {
    return "Basic Phone";
  }
  constructor() { }
}
