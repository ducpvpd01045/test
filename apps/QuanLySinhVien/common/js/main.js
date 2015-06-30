 var busyIndicator = null;
 function wlCommonInit()
 {
	 busyIndicator = new WL.BusyIndicator(null,{text:'Checking data..'});
	 $('#cmdBusyButtonIndicator').click(busyIndicatorDemo);
	 $('#them').click(them);
	 
 }
 function busyIndicatorDemo()
 {	
		busyIndicator.show();
		setTimeout(function() {
			busyIndicator.hide();
			checkFirstName();
			checkLastName();
		}, 1000);
 }
 function them()
 {	
		busyIndicator.show();
		setTimeout(function() {
			busyIndicator.hide();
			nameinput();
			checkFirstName();
			emailinput();
			userinput();
			checkLastName();
		}, 200);
 }
 function checkFirstName()
 {
	 var strFirstName = $('#textinput').val();
	 if (strFirstName=="") {
		 alert("Import User");
		 $('#textinput').focus();
	 }
 }
 function checkLastName()
 {
	 var strLastName = $('#passwordinput').val();
	 if (strLastName=="") {
		 alert("Import Pass");
		 $('#textinput').focus();
	 }
 }
 function nameinput()
 {
	 var strLastName = $('#nameinput').val();
	 if (strLastName=="") {
		 alert("Import Name");
		 $('#nameinput').focus();
	 }
 }
 function emailinput()
 {
	 var strLastName = $('#emailinput').val();
	 if (strLastName=="") {
		 alert("Import Email");
		 $('#emailinput').focus();
	 }
 }
 function userinput()
 {
	 var strLastName = $('#userinput').val();
	 if (strLastName=="") {
		 alert("Import Id");
		 $('#userinput').focus();
	 }
 }
 