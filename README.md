# lambda-test

#command to add credentials 
serverless config credentials -o --provider aws --key AKIA6MRIO3HCQ2MQP7GS --secret 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

# database

This project use mysql, use the database with name teste-lambdas and the below code for create table:

create table customers (
    idCustomer int auto_increment primary key,
    name varchar (20) not null,
    email varchar (20) not null
)