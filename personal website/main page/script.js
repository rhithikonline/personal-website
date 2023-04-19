//popup
//popup
function openPopup() {
    // Open a new window with the specified URL and window features
    var popup = window.open('', 'Example Website', 'width=500,height=400,toolbar=no');
    
    // Write HTML content to the popup window
    popup.document.write('<html><head><title>Popup Window</title></head><body>');
    popup.document.write('<iframe src="https://youtube.com/@rhithik4961" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>');
    
    popup.document.write('</body></html>');
    
    // Close the document stream and enable the document to be displayed
    popup.document.close();
  }