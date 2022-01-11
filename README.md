# lambda-test

#command to add credentials 
serverless config credentials -o --provider aws --key AKIA6MRIO3HCR6YIF34K --secret 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


# database

This project use mysql, use the database with name teste-lambdas and the below code for create table:

create table customers (
    idCustomer int auto_increment primary key,
    name varchar (20) not null,
    email varchar (20) not null
)