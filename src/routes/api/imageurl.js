var AWS = require('aws-sdk');

AWS.config.update(
  {
    accessKeyId: ".. your key ..",
    secretAccessKey: ".. your secret key ..",
  }
);
var s3 = new AWS.S3();

s3.getObject(
  { Bucket: "my-bucket", Key: "my-picture.jpg" },
  function (error, data) {
    if (error != null) {
      //alert("Failed to retrieve an object: " + error);
    } else {
      //alert("Loaded " + data.ContentLength + " bytes");
      // do something with data.Body
    }
  }
);

export async function get(req, res, next) {

		res.setHeader('Content-Type', 'application/json');
		res.end('{ "test": "test"}');

}


/*
//  Use this URL in the front-end to trigger download:
function download(url){
    $('<iframe>', { id:'idown', src:url }).hide().appendTo('body').click();
}
$("#downloadButton").click(function(){
    $.ajax({
        url: 'example.com/your_end_point',
        success: function(url){
            download(url);
        }
    })
});
*/
