CREATE TABLE vrusers (
    id serial primary key,
    firstname varchar(30) not null unique,
    lastname varchar(30) not null unique,
    username varchar(200) not null, 
    email varchar(50),
    phonenumber varchar(10),
    password varchar(100),
    url varchar(500)
    property_id INTEGER REFERENCES vrproperties(id)
)


INSERT INTO vrusers (firstname, lastname, username, email, phonenumber, password, url, property_id)
VALUES ('Spencer', 'spence', 'quinn', 'espencer', 4804031577, '$2a$10$kazwohngbMDL4Qcs36KBUelDGR0oRg7/CK5Jze7uMOSkmwbd8Bwjy','1')