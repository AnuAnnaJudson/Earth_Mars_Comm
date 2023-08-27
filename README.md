This repository contains:
Tech Stack on NodeJs
●  Express, Node js, html, css , javaScript
1. API
1. An API with just one Controller and only one POST method
2. It’s route as host:port/api/earth-mars-comm/message
3. The action will just take one parameter as string. It can be either the English text or the
Numeric Series.
For example: action(message: string)
2. Middleware
1. You need to create a middleware that will read the request headers and log the sender
and receiver in the console.
2. Pass the headers as shown below and log them in the console from the middleware.
x-sender = earth
x-receiver = mars
To understand whether the given message is coming from Earth or Mars, you will need to use
these headers, so you can perform the right translation.
For example, if the x-sender is earth and x-receiver is mars, the message has to be converted
from English to Numebrs (Task 1).
Log Translation Time
Also, log the time it takes to process the request from the time it enters the program and exits.
3. Translation Method
1. From your controller action, call a method that does the translation.
2. This method will use these header values extracted by the Middleware to perform the
translation.
3. Once done, the translation is returned from the action.
If Else Cloud - www.ifelsecloud.com | 5
Prgamming Task - NodeJS Developer | If Else Cloud
4. Interceptor
1. Create an Interceptor that will modify each outgoing message, so our program can
understand the communication
2. This interceptor will read the values set by the Middleware (x-sender and x-receiver).
3. If the incoming message was from Earth, the response JSON will show ‘Response From
Mars’
4. If the incoming message was from Mars, the response JSON will show ‘Response from
Earth’. For example:
{
“Response from Mars”: “44434446668 444 26 3355566666 666668
44666887777866666”
“Nokia Translation”: “idiot i am elon not houston”
}
Note that when inputing a value in numeric format,seperate each letter with a '.' and '0' or 'O' for space