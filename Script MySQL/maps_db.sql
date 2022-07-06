drop database maps_db;
create database if not exists maps_db;
use maps_db;

create table usuario(
	id  int not null auto_increment primary key,
    nombre varchar (30),
    a_paterno varchar (30),
    a_materno varchar (30),
    telefono bigint (10),
    rfc varchar (13)
);

create table mapa(
	id  int not null auto_increment primary key,
    longitud  varchar (15),
    latitud varchar (15),
    usuarioID int,
    foreign key (usuarioID) references usuario(id)
);

insert into usuario (nombre, a_paterno, a_materno, telefono, rfc) 
	values ("Christopher", "Méndez", "Ramírez", 4771694282, "MERC010326AG5");

select * from 	usuario;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;