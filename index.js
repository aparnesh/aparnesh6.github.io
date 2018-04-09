// main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {

    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

    } else {

        getAllDetails();

    } // end if condition

}); // end document.ready function

let getAllDetails = () => {


    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=name,quotes,birthday,cover,email,religion,hometown,gender,picture.type(large)&access_token=' + myFacebookToken,

        success: (response) => {
            $('.propic').html('<img src="' + response.picture.data.url+ '" class="img-fluid one rounded-circle" style="width:40px; height:40px;"/>');
            $("#userName").append(response.name);
            $('.proname').append(response.name);
            $('#dataSection').css('display', 'block');

            console.log(response);

            $('.profile-name h2').append(response.name);

            $('#favouriteQuote').append(response.quotes);

            $('#email').append(response.email);
            $('#religion').append(response.religion)
            $('#religion').append(response.relationship_status)

            $('#gender').append(response.gender);
            $('#home').append(response.hometown.name)

            $('#special').html('<img src="' + response.picture.data.url + '" class=""/>');

            $('.fb-profile-block-thumb').html('<img src="' + response.cover.source + '" class=""/>');
            
             $('#DOB').append(response.birthday);
             console.log(response.birthday);
             console.log( response.cover.source)
             console.log(response.picture.data.url)



        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }

    });// end ajax call 

}