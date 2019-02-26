UPDATE vrusers 
SET fullname = $2, username = $3, email=$4, phonenumber=$5
WHERE id=$1;

