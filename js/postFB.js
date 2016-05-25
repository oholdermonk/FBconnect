function postPost(){
FB.api(
    "/me/feed",
    "POST",
    {
        "message": "Testing FB remote app"
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
	        "firstname": "noiro"
	    },
	    function (response) {
	      if (response && !response.error) {
	        console.log(response);
	      } else {
	      	console.log(response)
	      }
	    }
	);

}

function changeAge(){
	FB.api(
	    "/me",
	    "POST",
	    {
	        "birthday": "14/11/1980"
	    },
	    function (response) {
	      if (response && !response.error) {
	        console.log(response);
	      } else {
	      	console.log(response)
	      }
	    }
	);

}

function getPosts(){
	
	FB.api(
		 "/me/posts",
		 function (response) {
		 if (response && !response.error) {
	        /* handle the result */
	        console.log(response.error)
		 } else {
		 	console.log(response)
		 }
	      }
	    
	);
}

function like(){
FB.api(
    "/me/og.likes",
    "POST",
    {
        "object": "https://www.facebook.com/ONENewsNZ/?fref=ts"
    },
    function (response) {
      if (response && !response.error) {
         console.log(response);
      } else {
      	console.log(response)
      }
    }
);
}
