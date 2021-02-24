# PassGen-Homework3

## Introduction
The Password Generator was a refactor project, to which we were only given the template of the Generator within the HTML and the CSS file. The design was fully set up, and we were intended to develop the Javascript File, which allowwed the Generator to function properly. To some extent, the project posed a great challenge, yet I was successful in establishing a viable way of creating a Password Generator which allowed for the user's choice of criteria and their choice of password length.

## How I accomplished the project
Initially, the project setup was very bare. More specifically, the Javascript file was completely empty (for the most part). I took my first steps by determining how I was going to tackle the task at hand. I understood that the Generator needed three main things:
1. A collection of arrays that held all possible characters for a randomized password (special, lowercase, uppercase, numbers).
2. A series of questions asking what characters were to be included in the new password and a prompt asking the length of the password to be created.
3. A randomization algorithm that selected a random character from a given array.

With these objectives for myself, I was able to get a decent lead to what the project is currently. 

## The Breakdown of the Javascript Code
At the start of the Javascript file, I have all of my listed arrays for each possible character that can be included in the randomized password; these include a special characters array, lowercase letters array, uppercase letters array, and a numbers array. I also estblished the remainder of all other variablesat the top of my code, for easy discovery. 
Within the main Generate Password function, I established a prompt asking for a length between 8 to 128 characters, which was then followed by a if statement, checking for a proper entry of both a number value and a number value within 8 and 128. If it passed, then another series of prompts were queued asking which of the types of characters were to be included in the random password. 
Another series of if statements followed, which concatenated an empty array (selectedCriteria) with whichever selections were made for the characters. This series of if statements was later inserted into a separate function, which was called at the end of the generatePassword function. 
Also within the generatePassword function, I established a for loop, which looped through the selectedCriteria array. Within this for loop, I established the randomization method, which was solely utilization of the Math.Random method and Math.Floor, where Math.random was multiplied by the length of selectedCriteria (to get a whole random number index within the array instead of a number within 0 to 1 which is what Math.random defaults to). This method was then told to take said random index, take the character within the place of said index, and push it to another empty array, randomPassword. I then converted the new array randomPassword into a string, to be easily printed in the output of the program.

## Sample Viewing of the Project