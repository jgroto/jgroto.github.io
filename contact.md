---
layout: bannerPage
title: Contact
permalink: /contact/
excerpt: How to contact us
---

<form class="contact-form">
	name<input type="text" id="contact-name" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="name" aria-describedby="i.desc.2111292586 i.err.2111292586" name="entry.1547290070" value="" dir="auto" data-initial-dir="auto" data-initial-value="">
	<br>
	email<input type="text" id="contact-email" class="quantumWizTextinputPaperinputInput exportInput" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="email" aria-describedby="i.desc.932966571 i.err.932966571" name="entry.1703965265" value="" dir="auto" data-initial-dir="auto" data-initial-value="">
	<br>
	message
	<br>
	<textarea id="contact-message" class="quantumWizTextinputPapertextareaInput exportTextarea" jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="message" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" name="entry.1090985214" dir="auto" data-initial-dir="auto" data-initial-value="" style="height: 24px;"></textarea>
	<br>
	<button type="submit" class="btn btn-default" id="contact-form-submit">Submit</button>
</form>

email: <a href="mailto:{{ site.email }}">{{ site.email }}</a>

<script type="text/javascript">
$('#contact-form-submit').click(function(e) {
    e.preventDefault();
    var contactName = $('#contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactMessage = $('#contact-message').val();
    // data validation code here
    var url = "https://docs.google.com/forms/d/e/1FAIpQLSdwStwgbkfXKk_Rzc_MXvY4j8wjzbUu0uXBJN9DMzzyv9SN5g/formResponse";
    var data = {
        'entry.1547290070': contactName,
        'entry.1703965265': contactEmail,
        'entry.1090985214': contactMessage,
    };
    $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: data,
            statusCode: {
                    0: function() {
                    		alert("ERROR!!");
							// window.location.href = "/contact-confirm";
                    },
                    200: function() {
							window.location.href = "/contact-confirm";
                    }
            }
    });
});
</script>
