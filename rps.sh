#!/bin/bash

while : 
do

echo "1.Rock"
echo "2.Paper"
echo "3.Scissors"
echo "Done"
echo "Your choice [1-4]?"
read input
echo "" 

#the computer will choose at random between rock,paper, scissors
computer=$(( ($RANDOM % 3) + 1 ))
if  [ "$input" == "1" ]
then
	if [ "$computer" == "1" ]
	then 
		echo "You tied.  Try again"
	elif [ "$computer" == "2" ]
	then 
		echo "You lose."
	elif [ "$computer" == "3" ]
	then 
		echo "You win"
fi

elif [ "$input" == "2" ]
then 
	if [ "$computer"  == "1" ]
	then 
		echo "You win."
	elif [ "$computer" == "2" ]
	then 
		echo "You tied. Try again"
	elif [ "$computer" == "3" ]
	then 
		echo "You lose."
fi
elif [ "$input" == "3" ]
then 
	if [ "$computer"  == "1" ]
	then
		echo "You lose."
	elif [ "$computer" == "2" ]
	then 
		echo "You win."
	elif [ "$computer" == "3" ]
	then 
		echo "You tied."
fi
else 
	echo "Bye"
	break
fi
done;



