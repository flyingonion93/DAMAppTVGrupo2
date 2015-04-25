alert('SceneSceneNewReleases.js loaded');

function SceneSceneNewReleases() {

};

SceneSceneNewReleases.prototype.initialize = function () {
	alert("SceneSceneNewReleases.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	alert( firstUse );
	alert(api_key);
	session_id = localStorage.getItem('session_id');
	alert(session_id);	
	
	if( firstUse == true ) {
		$('#popupTest').sfPopup('show');
	}
	
	alert(API+"/discover/movie?api_key="+api_key);
	$.ajax({
	  type: "GET",
	  crossDomain: true,
	  async: true,
	  dataType: "json",
	  url: API+"/discover/movie?api_key="+api_key,
	  success: function(data){
		//sort( data )
	  	alert('success');
	  	for (var i = 3; i > 0; i--) {
	  		
	  			$( "#moviesNR" ).append( '<div class="item col-xs-4" href="'+data.results[i].id+'"><img src="'+base_url+'w342'+data.results[i].poster_path+'"/></div>' );
	  		
	  	}
	  	$( '#moviesNR div.item' ).keynav();
	  },
	  error: function(){
	  	alert( 'error' );
	  }
	});
};

SceneSceneNewReleases.prototype.handleShow = function (data) {
	alert("SceneSceneNewReleases.handleShow()");
	// this function will be called when the scene manager show this scene
	
	scene_name = 'SceneNewReleases';
};

SceneSceneNewReleases.prototype.handleHide = function () {
	alert("SceneSceneNewReleases.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneNewReleases.prototype.handleFocus = function () {
	alert("SceneSceneNewReleases.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneNewReleases.prototype.handleBlur = function () {
	alert("SceneSceneNewReleases.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};




