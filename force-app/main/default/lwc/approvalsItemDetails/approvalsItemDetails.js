import { LightningElement, track } from 'lwc';
import LOGOAPPROVAL from "@salesforce/resourceUrl/WireframeforApprovalsPage";
import MyviewLargerModal from 'c/modalDialog';

export default class ApprovalsItemDetails extends LightningElement {
    @track isModalOpen = false;

    aptlogo = LOGOAPPROVAL;
    stockNumber = 'CU-510355';
    shape = 'Rectangle/Square';
    substrateColor = 'Yellow';
    corners = 'Top 2 Round';
    numHoles = 1;
    laminates = 'None';
    material = 'UNRIPPABLE VINYL';
    height = 6.0;
    width = 3.0;
    cornerRadius = 0.50;
    holes = 'GROMMET';
    holeDiameter = 0.5;
    
    get productDetails() {
        return [
            { label: 'Shape', value: this.shape },
            { label: 'Substrate Color', value: this.substrateColor },
            { label: 'Corners', value: this.corners },
            { label: 'Number of Holes', value: this.numHoles },
            { label: 'Laminates', value: this.laminates },
            { label: 'Material', value: this.material },
            { label: 'Height', value: this.height },
            { label: 'Width', value: this.width },
            { label: 'Corner Radius', value: this.cornerRadius },
            { label: 'Holes', value: this.holes },
            { label: 'Hole Diameter', value: this.holeDiameter },
        ];
    }
    handleViewLarger(){
        console.log('handleView clicked');
        this.openModal();
    }

    handleApprove() {
        // Handle approval logic
        console.log('Approve button clicked');
    }

    handleRework() {
        // Handle rework logic
        console.log('Send for Rework button clicked');
    }

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}