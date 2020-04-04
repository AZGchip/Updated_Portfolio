let userEmail = $()
$("#email-me").on("click",function(event){
    event.stopPropagation()
    var email = 'sample@gmail.com';
    var subject = 'Test';
    var emailBody = 'Hi Sample,';
    var attach = 'path';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
        "?attach="+attach;
  });

