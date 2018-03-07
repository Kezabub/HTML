//based off of the demo examples provided with the filesaver.js library
$(function()
  {
    console.log( "ready!" );
    // Checks for File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob)
    {
      //alert(This browser supports file loading...");
      $('#previewtext').change(function(evt){ return FileSelected(evt, $('#textInput')); } );
      $('#previewhtml').change(function(evt){ return FileSelected(evt, $('#htmlInput')); } );
    }
    else
    {
      alert('The File APIs are not fully supported in this browser.');
    }
  }
 );

//saves our files
function saveFile(ref, fname, text, mime)
{
  var blob = new Blob([text], {type: mime});
  saveAs(blob, fname);

  return false;
}

//handles selected files and alerts the user if they enter more than one at a time
function FileSelected(evt, target)
{
  var files = evt.target.files;
  if( files.length > 1 )
  {
    alert("Multiple files not supported...");
  }

  //alert(JSON.stringify(files,null,2));
  file = files[0];
  $(evt.target).prev('.file-details').html(file.name + " " + " size " + file.size + " type " + file.type + " last modified " + file.lastModifiedDate );

  var reader = new FileReader();
  // Provides a closer to capture file information
  reader.onload = (
    function(theFile)
    {
      return function(e)
      {
        target.html( e.target.result );
      };
    }
  )(file);

  // Reads the image file as a data url.
  reader.readAsText(file);
}
