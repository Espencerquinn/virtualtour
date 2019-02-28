INSERT INTO vrusers (
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    url
) values (
    ${firstname},
    ${lastname},
    ${username},
    ${email},
    ${phonenumber},
    ${password},
    ${url}  
)
RETURNING *;