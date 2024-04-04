import { LightningElement, api, track} from 'lwc';
import {wire} from  'lwc'
import getArtApprovalRequest from '@salesforce/apex/ArtApprovalComponentsController.getArtApprovalRequest';

export default class ApprovalItems extends LightningElement {
    @api paramToken;
    @track showMessage;
    @track message = 'You selected all items';
    @track notification = 'Success';
    @track aarData;
	value = []

    getArtApprovalData(){
        getArtApprovalRequest({ token: this.paramToken })
        .then( result => {
            console.log('response:', result);
            this.aarData = result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    connectedCallback(){
        console.info('cocnnectedCallBack');
        console.info(this.paramToken);
        //this.getArtApprovalData();
        getArtApprovalRequest({ token: this.paramToken })
        .then( result => {
            console.log('response:', result);
            this.aarData = result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // get getData(){
    //     // this.artApprovalRequests = this.artApprovalRequestsData;
    //     // return this.artApprovalRequests;
    //     console.info('getData');
    //     return this.data();
    // }
	get options() {
		return [
			{ label: 'Select All', value: '0' },
			{ label: 'CU-510335', value: '1' },
			{ label: 'CU-510336', value: '2' },
			{ label: 'CU-510337', value: '3' }
		];
	  }

    handleApproveSelectedItems(){
 
    }
    handleSelectAll(){
        console.info('handleSelectAll');
        if (this.showMessage){
            this.showMessage = false;
        }else{

            this.showMessage = true;
        }
        
        //    let lstCheckBox = this.template.querySelectorAll("lightning-input");
        //    //let lstCheckBox = document.getElementById('[id^="checkbox"]');
        //    console.info(lstCheckBox);
        //    console.info(lstCheckBox.item);
        //    for (const cb of lstCheckBox){
        //     console.info("Checkbox");
        //    }
    }

	handleChange(e){
		console.info('handleChange');
		if(this.showMessage){
			this.showMessage = false;
			this.value = []
		}else if(e.detail.value[0] == '0'){
			this.value = ['0','1','2','3']
			this.showMessage = true;
		}
		//e.detail.value <- we can know which checkbox is selected.
	}

}