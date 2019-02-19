CREATE TABLE vrproperties (
    id serial primary key,
    name varchar(30),
    address varchar(100), 
    city varchar(100),
    state varchar(2),
    zip integer,
    img varchar(50),
    price decimal,
    vrlink varchar(50)
)

INSERT INTO vrproperties (name, address, city, state, zip, price, vrlink)
VALUES ('Test Property', '4257 S Marion', 'tempe', 'AZ', '85208', 250, 'heresthelink' )