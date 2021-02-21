var loadPage = 0;

function updateComment(commentCount) {
    $('#commentCount').html(commentCount);
}

function setReply(commentID) {
    document.getElementById('comment_parent').value = commentID;
}

function getComments(page) {
    var key = document.commentform.key.value;
    var params = {
        key: key,
        page: page
    };
    $('#top_loading').show();
    $('#bottom_loading').show();
    $('#comment_container').load("/comments", params, function () {
        $('#top_loading').hide();
        $('#bottom_loading').hide();
        if (loadPage == 1) {
            window.location = '#comment_container';
        }
        loadPage = 1;
    });
}

$(document).ready(function () {
    
    $("#message").charCounter(1200, {
        container: "#message_counter",
        format: "(Maximum characters: 1200). You have %1 characters left.",
        pulse: false,
    });
    
    // validate the comment form when it is submitted
    $("#commentform").validate({
        errorLabelContainer: $("#comment_wrapper .error ul"),
        wrapper: 'li',
        rules: {
            username: "required",
            message: {
                required: true,
                maxlength: 1200
            },
            email: {
                required: true,
                email: true
            },
            userWebSite: {
                url: true
            },
            subject: "required"
        },
        messages: {
            username					: "Please enter your name/nickname",
            message						: "Please enter the message",
            email						: {
        									required	: "Please enter an email address",
        									email		: "Please enter a valid email address"
        								  },
        	userWebSite					: {
          									url		: "Please enter a valid website url"
          								  },           
            subject : "Please enter the subject"
        },
        submitHandler: function (form) {
            var params = $('#commentform').serialize();
            $('#ajax_loading_img').show();
            $.ajax({
                type: "POST",
                url: "/comments/post",
                data: params,
                dataType: "json",
                success: function (msg) {
                    $('#ajax_loading_img').hide();
					grecaptcha.reset();
                    if(msg.status){
                    	document.commentform.reset();
                    	$('#comment_wrapper div.fail').hide();
                    	$('#comment_wrapper div.success').show();
                    	$('#commentsuccess').html(msg.Message);
                    }else{
                    	$('#comment_wrapper div.success').hide();
                    	$('#comment_wrapper div.fail').show();
                    	$('#commentfail').html(msg.Message);
                    }
                }
            });
            return false;
        }
    });
    
    getComments(1);
});function recaptchaCallback(){
    $("#submit").removeAttr("disabled");
}
function recaptchaExpired(){
    $("#submit").attr("disabled","disabled");
}