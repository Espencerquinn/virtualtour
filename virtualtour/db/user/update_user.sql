UPDATE vrusers 
SET firstname = $2, lastname= $3, username = $4, email=$5, phonenumber=$6
WHERE id=$1;

