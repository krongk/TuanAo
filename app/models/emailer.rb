class Emailer < ActionMailer::Base
    def contact(recipient, subject, message, sent_at = Time.now)
      @subject = subject
      @recipients = recipient
      @from = 'kenrome@gmail.com'
      @sent_on = sent_at
	    @body["title"] = 'This is title'
  	  @body["email"] = 'kenrome@gmail.com'
   	  @body["message"] = message
      @headers = {}
   end
end
