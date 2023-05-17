insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 9095213950),
    ('Vale', 2788714800),
    ('Cielo', 0145153832);

alter table empresas modify cnpj varchar(20);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

select * from empresas_unidades