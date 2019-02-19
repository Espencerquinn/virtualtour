INSERT INTO vrusers (
    fullname,
    username,
    email,
    phonenumber,
    password,
    url
) values (
    ${fullname},
    ${username},
    ${email},
    ${phonenumber},
    ${password},
    ${url}  
)
RETURNING *;