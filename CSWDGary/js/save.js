//based off the examples provided on the libraries github page
$(function()
  {
    console.log( "ready!" );
    if (window.File && window.FileReader && window.FileList && window.Blob)
    {
      $('#load-text-file').change(function(evt){ return handleFileSelect(evt, $('#textInput')); } );
      $('#load-html-file').change(function(evt){ return handleFileSelect(evt, $('#htmlInput')); } );
    }
    else
    {
      alert('The File APIs are not fully supported in this browser.');
    }
  }
 );

function saveText(ref, fname, text, mime)
{
  var blob = new Blob([text], {type: mime});
  saveAs(blob, fname);
  return false;
}

function handleFileSelect(evt, target)
{
  var files = evt.target.files;
  if( files.length > 1 )
  {
    alert("Multiple files not supported...");
  }


  file = files[0];
  $(evt.target).prev('.file-details').html(file.name + " " + " size " + file.size + " type " + file.type + " last modified " + file.lastModifiedDate );

  var reader = new FileReader();
  reader.onload = (
    function(theFile)
    {
      return function(e)
      {
        target.html( e.target.result );
      };
    }
  )(file);

  reader.readAsText(file);
}
