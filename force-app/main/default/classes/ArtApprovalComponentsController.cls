public class ArtApprovalComponentsController {

    @AuraEnabled(cacheable=true)
    public static List<Art_Approval_Request__c> getArtApprovalRequest(String token) {
        System.debug('Token='+token);
        return [SELECT Id, Name, Token__c, Frontier_Order__c, Quote__c
                    FROM Art_Approval_Request__c 
                   WHERE Token__c = :token];
    }
}