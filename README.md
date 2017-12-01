# Time Sheet

Time Sheet is a simple tool to help user keep track of their work.

![landing](https://github.com/jerryzlau/time_sheet/blob/master/docs/landing.png)


## Installation Instructions 
1. Please have Node and npm installed, other dependencies will be installed by package.json
2. Clone the repo to where you want it to locate
```
git clone https://github.com/jerryzlau/time_sheet.git time_sheet
```
2. Run NodeJS API back backend Server
``` 
cd time_sheet/backend && npm start 
```
3. Run React with proxy server
```
cd time_sheet/frontend && npm start 
```
4. On the browser, visit the following link to seed the database for demo
```
localhost:3001/api/timeslotsSeed
```
5. Then visit the following link to run the app
```
localhost:3000
```

## Stack 
* Frontend: ReactJS

* Backend: NodeJS API Server with express

* Database: MongoDB

## Usage

### 1. Check In
Check In button will automatically check in with specified notes at current time displayed on the clock
![checkin](https://github.com/jerryzlau/time_sheet/blob/master/docs/checkin.png)

### 2. Entry 
Check In creates an entry on the timesheet that requires check out
![unchecked](https://github.com/jerryzlau/time_sheet/blob/master/docs/unchecked.png)

### 3. Check Out 
Check Out button will automatically check out at current time, user can also update info manually by changing the text
![checked](https://github.com/jerryzlau/time_sheet/blob/master/docs/checked.png)


