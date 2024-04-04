create database senai
use senai

create table Agendamento(
    id INT PRIMARY KEY IDENTITY,
    motivo VARCHAR(65),
    hora VARCHAR(4),
    datta VARCHAR(8),
)

select * from Agendamento