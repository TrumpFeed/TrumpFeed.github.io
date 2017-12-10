TrumpFeed
======
Description
------------
This website shows the titles of the 25 latest articles about (i.e., with his name in the article) Trump and his 25 latest tweets on one page, so that I can easily keep track of his situation. If there are less than 25, just show the ones that are available. In addition, one can read the full articles/posts in a convenient way. 

![alt text](screenshots/flowchart.png?raw=true "Flow")

Entities
------------
+ Crawler
+ Crawler Mitigator
+ Database
+ Front End

Actions
------------
+ Crawler pings Twitter API and CNN every minute(configurable) for new data
+ Crawler checks for relevant articles from CNN(threshold configurable)
+ Crawler stores data in database for persistence
+ Crawler Mitigator opens a port to view data as per API call
+ Crawler Mitigator orders combines and orders data
+ Front End requests the data and shows beautifully

CNN Selector Algorithm
------------
+ Points given to strings which occur in title and content of the article 
5: Donald Trump
3: Trump
2: Donald
1: donald trump(case in sensitive)
+ An article achieves an additive score of title and content
+ Range of points is from 0 to 10
+ Threshold value: 4; if an article score more than this then it is about Donald Trump

Screenshots
------------
![alt text](screenshots/s2.png?raw=true "screenshot2")

![alt text](screenshots/s1.png?raw=true "screenshot1")

Tasks
------------
+ Register for CNN API Access (11.15am)
+ Register for Twitter API Access 
+ Register for Github and create an organization for hosting source code 
+ Register for Heroku for backend API and database 
+ CNN API not approved, resolving to RSS Reader
+ Create NodeJS Crawler to connect to 3rd party APIs
+ RSS Reader Algorithm to decide the threshold to use data or article
+ Crawler stores data on postgres database
+ NodeJS API Reader for load balancing and error mitigration
+ Crawler unit tests
+ Create Html JS Application to connect to NodeJS API Reader
