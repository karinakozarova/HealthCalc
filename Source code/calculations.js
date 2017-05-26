 function Calculate()
         {
         	// variables assignment
         	var sex = 1; // sex = 1 is male, 2 is female
         	var height = document.getElementById("height").value;
         	var weight = document.getElementById("weight").value;
         	var age = document.getElementById("age").value;
         
         
         	// BMI calculation
         	var BMI = weight / (height * height) * 10000;
         	BMI = Math.round(BMI);
         
         	// BMR calculation
         	//This is based on the Mifflin - St Jeor equation. 
         	var BMR;
         	if (sex == 1) BMR = 10 * weight + 6.25 * height - 5 * age + 5 //man
         	else BMR = 10 * weight + 6.25 * height - 5 * age - 161 //woman
         
         	// Needeed calorie intake 
         
         	// activity level calculations
         	var activity_lvl;
         	if (document.getElementById("rarely").checked == true) activity_lvl = 3;
         	if (document.getElementById("often").checked == true) activity_lvl = 5;
         	if (document.getElementById("very-often").checked == true) activity_lvl = 7;
         	if (document.getElementById("everyday").checked == true) activity_lvl = 8;
         
         	var calorie_intake;
         	//If you are not very active basal metabolic rate times 1.2. 	
         	if (activity_lvl == 3) calorie_intake = BMR * 1.2;
         	//Somewhat active people should multiply by 1.375. 
         	if (activity_lvl == 5) calorie_intake = BMR * 1.375;
         	//Some exercise during the week, the number is 1.55. 
         	if (activity_lvl == 7) calorie_intake = BMR * 1.55;
         	//If you do a lot of sports, you multiply by 1.95. 
         	if (activity_lvl == 8) calorie_intake = BMR * 1.95;
         
         	// alert(calorie_intake);  //use only when debugging
         	
         	//checking if user input is legit
         	if (document.getElementById("sex_female").checked == true) sex = 2;
         	if (document.getElementById("sex_male").checked == true) sex = 1;
         	if (document.getElementById("age").value > 0 && document.getElementById("age").value <= 120)
         	{
         
         		if (height > 55 && height < 290)
         		{
         			if (weight > 15 && weight < 290)
         			{
         				//if here -> everything from the input is legit
         				// For debugging only: 
         				//alert("Age:  " + document.getElementById("age").value + " Sex:  " + sex + "BMI: " + BMI);
         				alert("Your BMI is " + BMI + ".\n" + "Your BMR is: " + BMR + ".\nYour calorie intake should be: " + calorie_intake);
         			}
         			else alert("Wrong weight input, please try again");
         			
         		}
         		else alert("Wrong height input, please try again");
         		
         	}
         	else alert("Invalid age input, please try again");
         	
         }
