const CC = Components.classes;
const CI = Components.interfaces;
VERB=1;
DBUG=2;
INFO=3;
NOTE=4;
WARN=5;

var ssl_observatory = CC["@eff.org/ssl-observatory;1"]
                    .getService(Components.interfaces.nsISupports)
                    .wrappedJSObject;
var obsprefs = ssl_observatory.prefs;


function blocking_off(){
	obsprefs.setBoolPref("security.mixed_content.block_active_content", false);
}


function popup_done(){
	obsprefs.setBoolPref("security.mixed_content.block_active_content.popup_shown", true);
	window.close();
}