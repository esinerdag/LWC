import { LightningElement, wire } from 'lwc';
import getRecentAccounts from '@salesforce/apex/AccountController.getRecentAccounts';
const COLUMNS = [
    { label : "Account Name", fieldName : "Name", type: "text" },
    { label : "Type", fieldName : "Type", type: "text" },
    { label : "Industry", fieldName : "Industry", type: "text" },
    { label : "Account Phone", fieldName : "Phone", type: "phone" },
    { label : "Annual Revenue", fieldName : "AnnualRevenue", type: "currency" }
    
]
export default class P2cNonprimitiveParent extends LightningElement {
  columns =COLUMNS;
    @wire(getRecentAccounts)
    accounts;
}