# 💻 Laptcom

## 🧾 Index documentation

- Introduction
- Use case and microservices diagrams
- Database
- Backend
  - Installation
  - API Endpoints
- Frontend
  - Installation
  - Main features
  - Performances


## Introduction

Laptcom is a fullstack app made with SpringBoot & MongoDB for backend app and Angular & Bootstrap for frontend app. The main objective of this app is provide to the user the option of compare from 2 to 4 laptops at the same time. With this app the comparison of diferents specifications could help you to buy a laptop.

## Use Case and Microservices Diagram

![usecase](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/UseCaseDiagram.drawio.png?raw=true)

![microservice](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/MicroservicesDiagram.drawio.png?raw=true)

## Database

For this app, the database use is MongoDB a NoSQL database thinking in this database type allows higher scalability for the project in the future. 
In Mongo Atlas has been created a cluster in order to storage the information in a cloud platform, not only in our local. We have use a total number of 5 collections for this project, these collections are:
 - Graphics collection
 - CPU collection
 - ROM collection
 - RAM collection
 - Laptop collection

These division has been made on this way due to a future performance of this project and compare all type of laptop's components, not only the laptops.

## Backend

### Installation

In order to run the backend project in your local you have follow the next steps:

1. Clone this repository in your local ``` git clone https://github.com/josepebel/Final-Project-Ironhack.git ```
2. Use ``` mvn spring-boot:run ``` in each folder of backend-app in this order
    1. Eureka-Service at port 8761
    2. Cpu-Service at port 8081
    3. Rom-Service at port 8082
    4. Ram-Service at port 8083
    5. Graphics-Service at port 8084
    6. Laptops-Service at port 8085
    7. Edge-Service at port 8080

### API Endpoints

You can check the correct operation of the service using Postman. In the folder resouces you can find the [endpoint-collection](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/Laptop-Collection.postman_collection.json) to check all endpoints for edge-service and proxy-services.

|     Method        |             Endpoint               |                          Return                        |
|-------------------|------------------------------------|--------------------------------------------------------|
|        POST         |             /cpu                 |      Created a cpu         |
|        GET         |            /cpu/{id}         |      A cpu information                              |
|         PUT         |       /cpu/{id}       |      Update a cpu information                    |
|        POST         |             /rom                 |      Created a rom         |
|        GET         |            /rom/{id}          |      A rom information                              |
|         PUT         |       /rom/{id}       |      Update a rom information                    |
|        POST         |             /ram                 |      Created a ram         |
|        GET         |            /ram/{id}         |      A ram information                              |
|         PUT         |       /ram/{id}       |      Update a ram information                    |
|        POST         |             /graphics                 |      Created a graphic card         |
|        GET         |            /graphics/{id}          |      A graphic card information                              |
|         PUT         |       /graphics/{id}       |      Update a garphic card information                    |
|        POST         |             /laptop                 |      Created a laptop         |
|        GET         |            /laptop/{id}          |      A laptop information                              |
|        GET         |            /laptops          |      All laptops information                            |
|         PUT         |       /laptop/{id}       |      Update a laptop information                    |
|         DELETE         |       /laptop/{id}       |     Delete a laptop                  |

## Frontend

### Installation
In order to run the backend project in your local you have follow the next steps:
1. Clone this repository in your local ``` git clone https://github.com/josepebel/Final-Project-Ironhack.git ```
2. Open frontend-app folder and use ``` npm install``` to install all dependences in node-modules
3. Run angular server using ``` ng serve```

### Main features
### Home
![home](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/Home.png?raw=true)

### Laptop Filters
![laptops](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/laptops.png?raw=true)

### Detail Laptops
![detail](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/laptop-detail.png?raw=true)

### Comparison
![comparison](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/comparison.png?raw=true)

### Dashboard Login
![login](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/login.png?raw=true)

### Control panel
![control](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/control-panel.png?raw=true)

### Edition panel
![edition](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/edition-panel.png?raw=true)

### Admin profile
![admin](https://github.com/josepebel/Final-Project-Ironhack/blob/master/Resources/admin-profile.png?raw=true)

## Improves

During the academic project and due to limited time to make it have surged some ideas or improves to apply on it. Some of these ideas are:
- Allow to users to rating and comments their valorations about laptops.
- Allow to users to compare the components of a laptops such as rom, ram, cpu, graphics
