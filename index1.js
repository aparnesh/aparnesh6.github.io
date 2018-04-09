let myFacebookToken;

$(document).ready(() => {


    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No user Token found");

    } else {

        getAllDetails();

    }
}); 


let getAllDetails = () => {


    

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=id,name,feed{message,full_picture,story,created_time,name,comments.limit(3),likes.limit(2)},cover,picture.type(large)&access_token=' + myFacebookToken,

        success: (response) => {
        	  $('.proname').append(response.name);
        	$('.propic').html('<img src="' + response.picture.data.url+ '" class="img-fluid one rounded-circle" style="width:40px; height:40px;"/>');
             if(response.feed.data[0].likes)
         {
         for(y of response.feed.data[0].likes.data){
          $('#likes1').append(y.name+" ,")
            
           }
       }
          
            $('.story1').append(response.feed.data[0].story);
            if(response.feed.data[0].full_picture)
            {
             $('.storyim1').html('<img src="' + response.feed.data[0].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[0].message)
              {
               $('.message1').append(response.feed.data[0].message)	;
               }
            }
            else
            {
            if(response.feed.data[0].message)
            {
             $('.storyim1').append(response.feed.data[0].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[0].comments){
               
               $(".c1").css("display","block")

              
              if(response.feed.data[0].comments.data[0].from ){
                
               $('#commentf1').append(response.feed.data[0].comments.data[0].from.name);
              
               $('#comments1').append(response.feed.data[0].comments.data[0].message);
           }

                        if(response.feed.data[0].comments.data[1])
                        {
                        	if(response.feed.data[0].comments.data[1].from){
                 $('#commentfs1').append(response.feed.data[0].comments.data[1].from.name);
              
               $('#commentss1').append(response.feed.data[0].comments.data[1].message);
           }
                       }
                           }

            break;
          }


               if(response.feed.data[1].likes)
         {
         for(y of response.feed.data[1].likes.data){
          $('#likes2').append(y.name+" ,")
            
           }
       }
          
            $('.story2').append(response.feed.data[1].story);
            if(response.feed.data[1].full_picture)
            {
             $('.storyim2').html('<img src="' + response.feed.data[1].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[7].message)
              {
               $('.message2').append(response.feed.data[1].message)	;
               }
            }
            else
            {
            if(response.feed.data[1].message)
            {
             $('.storyim2').append(response.feed.data[1].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[1].comments){
               
               $(".c2").css("display","block")

              
              
                if(response.feed.data[1].comments.data[0].from ){
               $('#commentf2').append(response.feed.data[1].comments.data[0].from.name);
              
               $('#comments2').append(response.feed.data[1].comments.data[0].message);
           }

                        if(response.feed.data[1].comments.data[1])
                        {
                        	if(response.feed.data[1].comments.data[1].from){

                 $('#commentfs2').append(response.feed.data[1].comments.data[1].from.name);
                        	
              
               $('#commentss2').append(response.feed.data[1].comments.data[1].message);
           }
                       }
                           }

            break;
          }





              if(response.feed.data[2].likes)
         {
         for(y of response.feed.data[2].likes.data){
          $('#likes3').append(y.name+" ,")
            
           }
       }
          
            $('.story3').append(response.feed.data[2].story);
            if(response.feed.data[2].full_picture)
            {
             $('.storyim3').html('<img src="' + response.feed.data[2].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[2].message)
              {
               $('.message3').append(response.feed.data[2].message)	;
               }
            }
            else
            {
            if(response.feed.data[2].message)
            {
             $('.storyim3').append(response.feed.data[2].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[2].comments){
               
               $(".c3").css("display","block")

               if(response.feed.data[2].comments.data[0].from ){
              
                
               $('#commentf3').append(response.feed.data[2].comments.data[0].from.name);
              
               $('#comments3').append(response.feed.data[2].comments.data[0].message);
           }

                        if(response.feed.data[2].comments.data[1])
                        {
                        	if(response.feed.data[2].comments.data[1].from){
                 $('#commentfs3').append(response.feed.data[2].comments.data[1].from.name);
              
               $('#commentss3').append(response.feed.data[2].comments.data[1].message);
           }
                       }
                           }

            break;
          }



          if(response.feed.data[3].likes)
         {
         for(y of response.feed.data[3].likes.data){
          $('#likes4').append(y.name+" ,")
            
           }
       }
          
            $('.story4').append(response.feed.data[3].story);
            if(response.feed.data[3].full_picture)
            {
             $('.storyim4').html('<img src="' + response.feed.data[3].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[3].message)
              {
               $('.message').append(response.feed.data[3].message)	;
               }
            }
            else
            {
            if(response.feed.data[3].message)
            {
             $('.storyim4').append(response.feed.data[3].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[3].comments){
               
               $(".c4").css("display","block")

         if(response.feed.data[3].comments.data[0].from ){
              
                
               $('#commentf4').append(response.feed.data[3].comments.data[0].from.name);
              
               $('#comments4').append(response.feed.data[3].comments.data[0].message);
           }

               if(response.feed.data[3].comments.data[1])
               {
                 if(response.feed.data[3].comments.data[1].from){
                $('#commentf4').append(response.feed.data[3].comments.data[0].from.name);
              
               $('#comments4').append(response.feed.data[3].comments.data[0].message);
           }
       }


                
                           }

            break;
          }




           if(response.feed.data[4].likes)
         {
         for(y of response.feed.data[4].likes.data){
          $('#likes5').append(y.name+" ,")
            
           }
       }
          
            $('.story5').append(response.feed.data[4].story);
            if(response.feed.data[4].full_picture)
            {
             $('.storyim5').html('<img src="' + response.feed.data[4].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[4].message)
              {
               $('.message5').append(response.feed.data[4].message)	;
               }
            }
            else
            {
            if(response.feed.data[4].message)
            {
             $('.storyim5').append(response.feed.data[4].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[4].comments){
               
               $(".c5").css("display","block")

          
              if(response.feed.data[4].comments.data[0].from ){
                
               $('#commentf5').append(response.feed.data[4].comments.data[0].from.name);
              
               $('#comments5').append(response.feed.data[4].comments.data[0].message);
           }

                        if(response.feed.data[4].comments.data[1])

                        {
                        	if(response.feed.data[4].comments.data[1].from){
                 $('#commentfs5').append(response.feed.data[4].comments.data[1].from.name);
              
               $('#commentss5').append(response.feed.data[4].comments.data[1].message);
           }
                       }
                           }

            break;
          }


           if(response.feed.data[5].likes)
         {
         for(y of response.feed.data[5].likes.data){
          $('#likes6').append(y.name+" ,")
            
           }
       }
          
            $('.story6').append(response.feed.data[5].story);
            if(response.feed.data[5].full_picture)
            {
             $('.storyim6').html('<img src="' + response.feed.data[5].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[5].message)
              {
               $('.message6').append(response.feed.data[5].message)	;
               }
            }
            else
            {
            if(response.feed.data[5].message)
            {
             $('.storyim6').append(response.feed.data[5].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[5].comments){
               
               $(".c6").css("display","block")

               if(response.feed.data[5].comments.data[0].from ){
              
                
               $('#commentf6').append(response.feed.data[5].comments.data[0].from.name);
           }
              
               $('#comments6').append(response.feed.data[5].comments.data[0].message);

                        if(response.feed.data[5].comments.data[1])
                        {
                        	if(response.feed.data[5].comments.data[1].from){
                 $('#commentfs6').append(response.feed.data[5].comments.data[1].from.name);
              
               $('#commentss6').append(response.feed.data[5].comments.data[1].message);
           }
                       }
                           }

            break;
          }


           if(response.feed.data[6].likes)
         {
         for(y of response.feed.data[6].likes.data){
          $('#likes7').append(y.name+" ,")
            
           }
       }
          
            $('.story7').append(response.feed.data[6].story);
            if(response.feed.data[6].full_picture)
            {
             $('.storyim7').html('<img src="' + response.feed.data[6].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[6].message)
              {
               $('.message7').append(response.feed.data[6].message)	;
               }
            }
            else
            {
            if(response.feed.data[6].message)
            {
             $('.storyim7').append(response.feed.data[6].message)	;
            }
        }
           for(let x in response.feed.data){
                  
           if(response.feed.data[6].comments){
               
               $(".c7").css("display","block")

              
               if(response.feed.data[6].comments.data[0].from ){
                
               $('#commentf7').append(response.feed.data[6].comments.data[0].from.name);
              
               $('#comments7').append(response.feed.data[6].comments.data[0].message);
           }

                        if(response.feed.data[6].comments.data[1])
                        {
                        	if(response.feed.data[6].comments.data[1].from){
                 $('#commentfs7').append(response.feed.data[6].comments.data[1].from.name);
              
               $('#commentss7').append(response.feed.data[6].comments.data[1].message);
           }
                       }
                           }

            break;
          }

            if(response.feed.data[7].likes)
         {
         for(y of response.feed.data[7].likes.data){
          $('#likes8').append(y.name+" ,")
            
           }
       }
          
            $('.story8').append(response.feed.data[7].story);
            if(response.feed.data[7].full_picture)
            {
             $('.storyim8').html('<img src="' + response.feed.data[7].full_picture + '" class="img-fluid one"/>');
               if(response.feed.data[7].message)
              {
               $('.message8').append(response.feed.data[7].message)	;
               }
            }
            else
            {
            if(response.feed.data[7].message)
            {
             $('.storyim8').append(response.feed.data[7].message)	;
            }
        }
          
                  
           if(response.feed.data[7].comments){
               
               $(".c8").css("display","block")

              
              
                if(response.feed.data[7].comments.data[0].from )
                {
               $('#commentf8').append(response.feed.data[7].comments.data[0].from.name);
              
               $('#comments8').append(response.feed.data[7].comments.data[0].message);
           }

                        if(response.feed.data[7].comments.data[1])
                        {
                        	if(response.feed.data[7].comments.data[1].from){
                 $('#commentfs8').append(response.feed.data[7].comments.data[1].from.name);
              
               $('#commentss8').append(response.feed.data[7].comments.data[1].message);
           }
                       }
                           }

          

          }

,error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }



        });

}