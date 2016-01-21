// information about ajax form uploading with multer from https://codeforgeek.com/2014/11/ajax-file-upload-node-js/
// in fact, the javascript below was copied from the website, but then expanded.
  $(document).ready(function() {
     $('#uploadForm').submit(function() {
        $("#status").
        	empty().text("File is uploading...").
        	removeClass('bs-callout-warning bs-callout-success').
        	addClass('bs-callout bs-callout-default');
        $(this).ajaxSubmit({

            error: function(xhr) {
        		$('#status').
        			empty().text('Error: ' + xhr.status).
        			removeClass('bs-callout-default bs-callout-success').
        			addClass('bs-callout-warning');
        			// console.log(xhr.status);
            },

            success: function(response) {
		        $("#status").
		        	empty().text('Server response: ' + JSON.stringify(response, null, ' ')).
		        	removeClass('bs-callout-default bs-callout-warning').
		        	addClass('bs-callout-success');
		        // console.log(response);
            }
    	});
    //Very important line, it disable the page refresh.
    return false;
    });    
});