---
layout: bannerPage
title: Contact
permalink: /contact/
excerpt: How to contact us
---
  <?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <form  action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
    Your name:<br>
    <input name="name" type="text" value="" size="30"/><br>
    Your email:<br>
    <input name="email" type="text" value="" size="30"/><br>
    Your message:<br>
    <textarea name="message" rows="7" cols="30"></textarea><br>
    <input type="submit" value="Send email"/>
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
    echo "All fields are required, please fill <a href=\"\">the form</a> again.";
      }
    else{   
      $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
    // mail("youremail@yoursite.com", $subject, $message, $from);
    echo "Email sent!";
      }
    }  
?>

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
    // var contactName = $('#contact-name').val();
    // var contactEmail = $('#contact-email').val();
    // var contactMessage = $('#contact-message').val();
    // // data validation code here
    // // var url = "https://docs.google.com/forms/d/e/1FAIpQLSdwStwgbkfXKk_Rzc_MXvY4j8wjzbUu0uXBJN9DMzzyv9SN5g/formResponse/";
    // var url = "https://docs.google.com/forms/d/e/1FAIpQLSdwStwgbkfXKk_Rzc_MXvY4j8wjzbUu0uXBJN9DMzzyv9SN5g/formResponse/";
    // var data = {
    //     'entry.1547290070': contactName,
    //     'entry.1703965265': contactEmail,
    //     'entry.1090985214': contactMessage,
    // };
    // $.ajax({
    //         type: "POST",
    //         url: url,
    //         dataType: "json",
    //         data: data,
    //         statusCode: {
    //                 0: function() {
    //                 		alert("ERROR!!");
				// 			// window.location.href = "/contact-confirm";
    //                 },
    //                 200: function() {
				// 			window.location.href = "/contact-confirm";
    //                 }
    //         }
    // });

	  // Add the iframe with a unique name
	  var iframe = document.createElement("iframe");
	  var uniqueString = "_submit_form";
	  document.body.appendChild(iframe);
	  iframe.style.display = "none";
	  iframe.contentWindow.name = uniqueString;

	  // construct a form with hidden inputs, targeting the iframe
	  var form = document.createElement("form");
	  form.target = uniqueString;
	  form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdwStwgbkfXKk_Rzc_MXvY4j8wjzbUu0uXBJN9DMzzyv9SN5g/formResponse";
	  form.method = "POST";

	  // repeat for each parameter
	  var input = document.createElement("input");
	  input.type = "hidden";
	  input.name = "entry.1547290070";
	  input.value = $("#contact-name").val();
	  // repeat for each parameter
	  var input2 = document.createElement("input");
	  input2.type = "hidden";
	  input2.name = "entry.1703965265";
	  input2.value = $("#contact-email").val();
	  // repeat for each parameter
	  var textarea = document.createElement("textarea");
	  textarea.type = "hidden";
	  textarea.name = "entry.1090985214";
	  textarea.value = $("#contact-message").val();
	  form.appendChild(input);
	  form.appendChild(input2);
	  form.appendChild(textarea);

	  document.body.appendChild(form);
	  form.submit();
	  // window.location.href = "/contact-confirm";
});
</script>
