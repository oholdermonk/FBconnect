function postPost(){
FB.api(
    "/me/feed",
    "POST",
    {
        "message": "This is a test message"
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
}

function changeName(){
	FB.api(
	    "/me",
	    "POST",
	    {
	        "firstname": "ryan"
	    },
	    function (response) {
	      if (response && !response.error) {
	        /* handle the result */
	      }
	    }
	);

}
