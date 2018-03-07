//check if browser supports file api and filereader features
if (window.File && window.FileReader && window.FileList && window.Blob) {

   //handy piece of code that makes the size of files more user friendly available at:
	//http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
	//was implemented into the project so the program didnt hang for a long time while attempting to preview images or videos
	function SuitableFileSize(bytes, si) {
	    var thresh = si ? 1000 : 1024;
	    if(bytes < thresh) return bytes + ' B';
	    var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while(bytes >= thresh);
	    return bytes.toFixed(1)+' '+units[u];
	}

  //called when image is loaded
	function ImagePreview(file){
		var reader = new FileReader();
		reader.onload = function(event){
			the_url = event.target.result
			$('#preview').html("<img src='"+the_url+"' />")
			$('#name').html(file.name)
			$('#size').html(SuitableFileSize(file.size, "MB"))
			$('#type').html(file.type)
		}
    //onload event is triggered when file is loaded
		reader.readAsDataURL(file);
	}

  //called when video is loaded
	function VideoPreview(file){
		var reader = new FileReader();
		reader.onload = function(event){
			the_url = event.target.result
      $('#vid-data').html("<video width='400' controls><source id='vid-source' src='"+the_url+"' type='video/mp4'></video>")
      $('#vid-name').html(file.name)
			$('#vid-size').html(SuitableFileSize(file.size, "MB"))
			$('#vid-type').html(file.type)
		}
    //onload event is triggered when file is loaded
		reader.readAsDataURL(file);
	}

  //watches for changes
	$( "#photopreview" ).change(function() {
		console.log("photo file has been chosen")
		console.log(this.files[0].size)
		ImagePreview(this.files[0])
	});

	$( "#videopreview" ).change(function() {
		console.log("video file has been chosen")
		console.log(this.files[0].size)
		VideoPreview(this.files[0])
	});
} else {
  alert('The File APIs are not fully supported in this browser.');
}
