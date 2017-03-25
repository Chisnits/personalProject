drop table if exists test;

create table test (
    id serial primary key,
    name varchar(60)
);

insert into test (name) 
values 
('chase'),
('gus'),
('paige');
