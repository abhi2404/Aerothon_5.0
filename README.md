# Aerothon_5.0

EcoPlane

EcoPlane is a platform where manufacturers and airlines can sell and recycle their old products. The platform is built using React for the frontend and Django and MySQL for the backend. Postman is used for testing the APIs.

Built With
• React
• Django Rest Framework
• Django
• MySQL
• Postman

Getting Started - Frontend

To get a local copy of the project up and running, follow these simple steps.
Prerequisites
• Install Node.js version >=14.0.0
### Installation

_Below is an example of how to install and set up the app._

1. Clone the repo
   ```sh
   git clone https://github.com/abhi2404/Aerothon_5.0.git
   ```
2. Install virtual env
   ```sh
   pip install virtualenv
   ```
3. Create virtual env using 
   ```sh
   virtualenv virtualenv_name
   ```
4. Activate your virtual env using 
   ```sh
   source virtualenv_name/bin/activate
   ```
5. Now move to the project directory and run
   ```sh
   pip install -r  requirements.txt
   ```
6. Migrate your project
   ```sh
   python3 mange.py migrate
   ```
7. Run the dev server
   ```sh
   python3 manage.py runserver
   
The solution is not hosted yet but can be accessed over the internet through ngrok platform which is implemented in our solution:
Ngrok is a cross-platform, lightweight, and secure tunneling software that allows users to expose a web server running on their local machine to the internet. It creates a secure tunnel from the public internet to a local host and port, allowing developers to test their web applications, APIs, and other services without having to deploy them to a public server.

Some key features of Ngrok include:

Secure tunnels: Ngrok creates secure tunnels that protect the user's local machine from unauthorized access by using Transport Layer Security (TLS) encryption.

Multiple protocols support: Ngrok supports several protocols such as HTTP, HTTPS, TCP, and UDP, allowing users to access their web applications and services over any protocol.

Easy to use: Ngrok is easy to use and can be set up in a matter of minutes. All the user has to do is download the software, install it, and create a tunnel to their local host and port.

Integration with other tools: Ngrok can be easily integrated with other tools such as Docker, Kubernetes, and Vagrant, allowing developers to test their applications in a variety of environments.

Free and paid plans: Ngrok offers both free and paid plans. The free plan includes basic features such as one HTTP/TCP tunnel and 40 connections per minute, while the paid plans offer more advanced features such as custom subdomains, reserved TCP addresses, and more.

In summary, Ngrok is a powerful and easy-to-use tool for exposing local web servers and services to the internet. It provides a secure way to test and debug web applications without having to deploy them to a public server.

Ngrok Installation and Usage
This document provides step-by-step instructions on how to install and use Ngrok to expose a local web server to the internet.

Prerequisites
Before installing Ngrok, ensure that you have the following:

A local web server running on your machine
An active internet connection
Installation
To install Ngrok, follow these steps:

Download the appropriate Ngrok binary for your operating system from the official website: https://ngrok.com/download

Extract the downloaded file to a directory of your choice.

Open your terminal or command prompt and navigate to the directory where you extracted the Ngrok binary.

Type the following command to authenticate Ngrok:

bash
Copy code
```sh
./ngrok authtoken <YOUR_AUTH_TOKEN>
```
Replace <YOUR_AUTH_TOKEN> with your Ngrok auth token. If you don't have an auth token, you can create one by signing up for a free account on the Ngrok website.

Usage
To expose your local web server to the internet using Ngrok, follow these steps:

Open your terminal or command prompt and navigate to the directory where you extracted the Ngrok binary.

Type the following command to start Ngrok:


Copy code
```sh
./ngrok http <YOUR_PORT_NUMBER>
```
Replace <YOUR_PORT_NUMBER> with the port number on which your local web server is running (usually 80 for HTTP or 443 for HTTPS).

Ngrok will start and display a URL that you can use to access your local web server from the internet. The URL will look something like this:

arduino
Copy code
```sh
https://<RANDOM_STRING>.ngrok.io
```
Note that the random string will be different every time you start Ngrok.

Copy the URL and paste it into your web browser. You should now be able to access your local web server from the internet.

Conclusion
Ngrok is a powerful and easy-to-use tool for exposing local web servers to the internet. By following the steps outlined in this document, you should be able to install and use Ngrok to test and debug your web applications.



Contact
For any questions or feedback, please email us at sj2394108@gmail.com.
