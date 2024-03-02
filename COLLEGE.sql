create database COLLEGE;
use COLLEGE;

create table college_list
( 
college_id int primary key, 
college_name varchar (100) not null, 
college_location varchar (100) not null
 );
 
 insert into college_list values (1, "Pravara Rural Engineering College", "Loni bk");
 insert into college_list values (2, "Pravara Rural Engineering College", "Loni bk");
 
 select * from college_list;
 

 