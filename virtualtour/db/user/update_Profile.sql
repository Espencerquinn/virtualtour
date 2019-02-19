UPDATE users
SET
    user_fullname = $1,
    user_Email=$2,
    user_phonenumber = $3,
where user_id = $4
returning * 