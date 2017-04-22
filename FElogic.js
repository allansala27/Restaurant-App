psuedo logic:

home button -> return to home screen/page

make a reservation -> submit.onclick open table/form -----take away "make a reservation button" .onclick 					 
							capture 'name' 'phone' 'email' 'unique ID' -> objects, constructor?
								submit button to 'store' information to database/server



//Make A Reservation

//on click, save values from AJAX call into variable newReservation
$(".submit").on("click", function(){
				var newReservation{
					customername = $('reserve_name').val.trim,
					phonenumber = $('reserve_number').val.trim,
					customeremail = $('reserve_email').val.trim,
					customerID = $('reserve_ID').val.trim
				};

//log the information input
console.log(newReservation)


$.post(currentlLocation + "/api/tables", newReservation, function(data){

	if (data == true)
		console.log("We have a table available!")

	else (data == false)
		console.log("We NO have a table for you!")

	$('reserve_name').val.(""),
	$('reserve_number').val.(""),
	$('reserve_email').val.(""),
	$('reserve_ID').val.(""),

	return(false);

});

//View Table Logic
