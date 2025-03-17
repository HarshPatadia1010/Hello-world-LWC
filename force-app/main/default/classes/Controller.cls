/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-21-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class Controller { 
@AuraEnabled(cacheable=true)
public static List<Contact> getContacts(String accId){ 
    return [
        SELECT AccountId,Id,firstName,lastName
        FROM   Contact
        WHERE AccountId=:accId
        WITH SECURITY_ENFORCED

    ];
}
    
}