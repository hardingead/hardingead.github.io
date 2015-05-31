// Simple solution from
//var form_container = document.getElementById('contact-form-container-hidden');
//var xhr_object = new Webform_Xhr('http://www.vision6.com.au/em/forms/xhr?db=460698&s=163100&a=52551&t=1&k=nNX-aQJicOuiN4_IDdHloi_RWPFCSoTHfYNYkPOh7mk', form_container);
//xhr_object.initialize();

/* attach a submit handler to the form */
$("#contactForm").submit(function (event) {

    /* stop form from submitting normally */
    event.preventDefault();

    /* get some values from elements on the page: */
    var $form = $(this),
        url = $form.attr('action');

    var name_val = $('#contact-name').val();
    var email_val = $('#contact-email').val();
    var phone_val = $('#contact-phone').val();
    var enquiry_val = $('#contact-message').val();
    var gotcha_val = $('#gotcha').val();

    $.ajax({
        url: "//formspree.io/matt@hardingead.com.au",
        method: "POST",
        data: {
            "name": name_val,
            "_replyto": email_val,
            "email": email_val,
            "phone": phone_val,
            "enquiry": enquiry_val,
            "_gotcha": gotcha_val
        },
        dataType: "json"
    });

    $('#contact-form-heading').text('Thanks, we\'ll get back to you shortly');
    $('#contactForm').remove();
});

$(document).ready(function(){
    var brand_name = $('#nav-bar-brand-name');
    var windowResized = function(){
        if($(window).width() < 991){
            brand_name.text('Harding E&D');
        } else {
            brand_name.text('Harding Electrical & Data');
        }
    };
    $(window).resize(function(){
        setTimeout(windowResized, 1);
    });
    $(window).trigger("resize");
});