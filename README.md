# Wikipedia app mockup

## Description

The design for a wikipedia mobile app looked really cool, so I went on to implement it. I managed to implement the onboarding screens/logic and the "Explore" screen, which shows you what historical events happened in the day that you open the app. I also used deep linking, so you can press on any reference about an event, and go the its specific wikipedia page (in browser). I also did some tricks to imrove efficiency and UX , like caching whether the "onboarding" process was complited, so as not to send the user through it again; caching the events until the end of the day, so the app won't fetch them from the server every time it opens (which dramatically improves speed);

## Technologies used: 
* Javascript
* React native
* Redux
* Git

## Functionalities:

The first time you open the app, you are taken through the "onboarding" process: 

![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.03.10.png) ![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.03.23.png) ![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.03.33.png) ![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.03.48.png)

Then, you are taken to an "Explore" screen, where you can see all the important events that happened on that particular day of the year, in history:

![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.38.43.png) ![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.39.03.png)

And if something catches your eye, you can tap on it, and it will immediately redirect you to the corresponding Wikipedia page: 

![](https://github.com/dragosbln/wikipedia-app/blob/master/screenshots/Screenshot%202019-10-03%20at%2013.39.20.png)

## To do:
* History functionlity
* Places functionality
* Saved functionality
* Search functionality
