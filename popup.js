$(document).ready(function()
{
	umbracoTools.init();	
});

var umbracoTools =  {
	init : function ()
	{
		$('#frontend').click(function(){
			event.preventDefault();
			umbracoTools.GoToUrl();
			
		});
		$('#backoffice').click(function(){
			event.preventDefault();
			umbracoTools.GoToUrl('/umbraco/');
		});
		$('#miniprofiler').click(function(){
			event.preventDefault();
			umbracoTools.GoToUrl('/?umbDebug=true');
		});
		$('#trace').click(function(){
			event.preventDefault();
			umbracoTools.GoToUrl('/trace.axd');
		});
		$('#republish').click(function(){
			event.preventDefault();
			umbracoTools.GoToUrl('/Umbraco/dialogs/republish.aspx?xml=true');
			
		});
	},
	GoToUrl : function(suffix)
	{
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
			var url = new URL(tabs[0].url);
			var host = url.hostname;
			var port = url.port != '' && url.port != null ? ':' + url.port : '';
			suffix = suffix || '';
			var url = 'http://' + host + port + suffix;
			window.open(url,'_blank');						
		});		
	}
}