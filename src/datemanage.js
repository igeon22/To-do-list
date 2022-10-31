import { getUnixTime, subMonths } from "date-fns"

function today(){
	const date = new Date()
	// console.log(typeof(date));
	
	// console.log(date);
	var c = String(date)
	var a= {}
	a = c.split(" ")
	// console.log(a);

	var month = a[1]
	// console.log(month);
	var monthFormatted = 0
	var dayFormatted = a[2]
	var yearFormatted = a[3]
	if(month=='Oct'){
		monthFormatted = 10
		// console.log(monthFormatted);
	}
	if(month=='Nov'){
		monthFormatted = 11
		// console.log(monthFormatted);
	}
	if(month=='Dec'){
		monthFormatted = 11
		// console.log(monthFormatted);
	}
	if(month=='Jan'){
		monthFormatted = 1
		// console.log(monthFormatted);
	}
	if(month=='Feb'){
		monthFormatted = 2
		// console.log(monthFormatted);
	}
	if(month=='Mar'){
		monthFormatted = 3
		// console.log(monthFormatted);
	}
	if(month=='Apr'){
		monthFormatted = 4
		// console.log(monthFormatted);
	}
	if(month=='May'){
		monthFormatted = 5
		// console.log(monthFormatted);
	}
	if(month=='Jun'){
		monthFormatted = 6
		// console.log(monthFormatted);
	}
	if(month=='Jul'){
		monthFormatted = 7
		// console.log(monthFormatted);
	}
	if(month=='Agu'){
		monthFormatted = 8
		// console.log(monthFormatted);
	}
	if(month=='Sep'){
		monthFormatted = 9
		// console.log(monthFormatted);
	}


	var todayDate = [monthFormatted,parseInt(dayFormatted),parseInt(yearFormatted)]
	return todayDate
	

}


// var td = today()
// console.log(td);

// var tm = [3,3,2023]


function compareDate(today,date){

	// if(date[0]>today[0] && date[1]>today[0])




	var month = date[0] - today[0]
	console.log(month+" months");


	// var day = date[1] - today[1]
	// console.log(day+" days");

	var year = date[2] - today[2]
	console.log(year+" years");

	// char = 

	



}

// compareDate(td,tm)
export{today}