//Day 3
  /*Javascript BOM
  The default object of browser is window means you can call all the 
  functions of window by specifying window or directly.
  */
  //
  window.alert('Hello World!');
  //Or
  alert('Hello India');
  /*window->> Document,history,screen,location,navigator
  Window Object->The window object represents a window in browser.
   An object of window is created automatically by the browser.
  */
  //1)alert()	displays the alert box containing message with ok button.
  alert("Hello");
  /*2)confirm()	displays the confirm dialog box containing message with ok 
  and cancel button.*/
  confirm('Are you sure');
  //3)prompt()	displays a dialog box to get input from the user.
  prompt('Error');
  //4)open()	opens the new window.
  open();
  //5)close()	closes the current window.
  close();
  /*6)setTimeout()	performs action after specified time like calling function,
  evaluating expressions etc*/  
  setTimeout(  
  function(){  
  alert("Welcome after 2 seconds");  
  },2000);  
  //HISTORY
  /*There are only 1 property of history object.
  *returns the length of the history URLs.
  */
  //Methods
  history.back();  //for previous page  
  history.forward(); //for next page  
  history.go(2); //for next 2nd page
  history.go(-2); //for back 2nd page 
  
  //JavaScript Navigator Object
  //window.Navigator()
  //or
  //Navigator()
  /*
  
  No.	Property	    Description
  1	     appName	    returns the name
  2	   appVersion	    returns the version
  3	     appCodeName	returns the code name
  4	   cookieEnabled	returns true if cookie is enabled otherwise false
  5	    userAgent	    returns the user agent
  6	    language	    returns the language. It is supported in Netscape and Firefox only.
  7	    userLanguage	returns the user language. It is supported in IE only.
  8	     plugins	    returns the plugins. It is supported in Netscape and Firefox only.
  9	   systemLanguage	returns the system language. It is supported in IE only.
  10	mimeTypes[]	   returns the array of mime type. It is supported in Netscape and Firefox only.
  11	platform	    returns the platform e.g. Win32.
  12	  online    	returns true if browser is online otherwise false.
  */
  /*Methods
  1	javaEnabled()	checks if java is enabled.
  2	taintEnabled()	checks if taint is enabled. It is deprecated since JavaScript 1.2.
  */
  console.log(" navigator.appCodeName: ",navigator.appCodeName);  
  console.log(" navigator.appName: ",navigator.appName);  
  console.log(" navigator.appVersion: ",navigator.appVersion);  
  console.log(" navigator.cookieEnabled: ",navigator.cookieEnabled);  
  console.log(" navigator.language: ",navigator.language);  
  console.log(" navigator.userAgent: ",navigator.userAgent);  
  console.log(" navigator.platform: ",navigator.platform);  
  console.log(" navigator.onLine: ",navigator.onLine);    
  
  //JavaScript Screen Object
  /*The JavaScript screen object holds information of browser screen.
   It can be used to display screen width, height, colorDepth, pixelDepth etc.
  */
  //window.screen()
  //or
  //screen()
  /*
  No.	Property	Description
  1	   width	    returns the width of the screen
  2	   height	    returns the height of the screen
  3	   availWidth	returns the available width
  4	   availHeight	returns the available height 
  5	   colorDepth	returns the color depth
  6    pixelDepth	returns the pixel depth.
  */
  console.log(" screen.width: ",screen.width);  
  console.log(" screen.height: ",screen.height);  
  console.log(" screen.availWidth: ",screen.availWidth);  
  console.log(" screen.availHeight: ",screen.availHeight);  
  console.log(" screen.colorDepth: ",screen.colorDepth);  
  console.log(" screen.pixelDepth: ",screen.pixelDepth); 
