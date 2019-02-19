UPDATE vruser 
SET fullname = $2, username = $3, email=$4, phonenumber=$5, password=$6
WHERE id=$1;

