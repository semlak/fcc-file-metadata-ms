
var appURL = process.env.APPURL;
var pageData = {
	"title" : "API Basejump: A File Metadata Microservice API",
	"userStories" : [
		"I can submit a FormData object that includes a file upload.", 
		"When I submit something, I will receive the file size in bytes within the JSON response." 
	],
	"notes" : [
		"Source for this API microservice is at <a href='https://github.com/semlak/fcc-file-metadata-ms'>https://github.com/semlak/fcc-file-metadata-ms</a>.",
		"I have created a small test page at <a href='" + appURL + "/uploadForm'>" + appURL + "/uploadForm</a> that lets you choose a file to upload and provides the server response.",
		"You could also use a program such as Postman to send a post request to <a href='" + appURL + "/api/uploadFile'>" + appURL + "/api/uploadFile</a> with the file. The key name should be 'fileToUpload', and the value is the file.",
		"The file is actually uploaded to the server in the directory '/public/uploads' with a hashed name for the filename. However, the API requirements do not require any additional functionality. The original names, content, or details of the uploaded files are not saved or otherwise recorded."
		],
	"examples" : [
		{
			"input" : appURL, 
			"action" : "Displays:", 
			"output" : "This homepage"
		}, 
		{
			"input": appURL + "/uploadForm", 
			"action" : "Displays:", 
			"output": "A form page that lets you choose a file to upload."
		}, 
		{
			"input": "A post request to " + appURL + "/api/uploadFile with a key named 'fileToUpload' and a file of size 3096 Bytes", 
			"action" : "Returns:", 
			"output": ' { "fileSize": 3086 }'
		}
	]
}

module.exports = pageData;
