'use strict';

angular.module('app').factory('mockData', mockData);

function mockData () {

	return {
		"opportunities" : [
		    {
		        "id": "1",
		        "title": "Poverty Toolkit Volunteer",
		        "abstract": "Do you love organizing things? Want to give back to a non-profit that is fighting poverty in NC? Please help us put together participant packets for our poverty simulation toolkit. Dress comfortably and come to our office to help us prepare for our powerful poverty simulation training.",
		        "volunteersNeeded": 30,
		        "nonprofit": {
		            "name": "North Carolina Community Action Association"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/1"
		        }
		    },
		    {
		        "id": "2",
		        "title": "Annual Spring Cleanup-New Hope Overlook",
		        "abstract": "We've selected the New Hope Overlook Access to Jordan Lake State Recreation Area for a trash cleanup following major flooding in December. The trash follows the wonderful Red Trail, a distance of several miles from Camping Area A to B.",
		        "volunteersNeeded": 22,
		        "nonprofit": {
		            "name": "Clean Jordan Lake"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/2"
		        }
		    },
		    {
		        "id": "3",
		        "title": "New Hope Creek Cleanup in Durham's Creek Week",
		        "abstract": "This is part of the City of Durham's Annual Creek Week, a time to discover and clean up Durham's waterways. Participating organizations share a vision for Durham residents to enjoy, feel connected to, and protect local waterways. We will remove trash along the banks of New Hope Creek.",
		        "volunteersNeeded": 5,
		        "nonprofit": {
		            "name": "Clean Jordan Lake"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/3"
		        }
		    },
		    {
		        "id": "4",
		        "title": "Design/Production Consultant",
		        "abstract": "Provid e guid ance and consultation for designing and producing multi-media curricular materials in a timely and cost-effective manner.",
		        "volunteersNeeded": 10,
		        "nonprofit": {
		            "name": "BUMP: The Triangle"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/4"
		        }
		    },
		    {
		        "id": "5",
		        "title": "After-School Program Volunteer",
		        "abstract": "We are looking for enthusiastic program volunteers to assist the instructor at our after-school programs. No musical skills are required.",
		        "volunteersNeeded": 30,
		        "nonprofit": {
		            "name": "BUMP: The Triangle"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/5"
		        }
		    },
		    {
		        "id": "6",
		        "title": "Volunteer Administrative Support",
		        "abstract": "Assist with receptionist duties at the office. We need assistance Monday through Wednesday and Friday between the hours on 10am and 4pm. Mostly in shifts of 3-4 hours.",
		        "volunteersNeeded": 22,
		        "nonprofit": {
		            "name": "USCRI Raleigh"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/6"
		        }
		    },
		    {
		        "id": "7",
		        "title": "Food Pantry Donation Pick up",
		        "abstract": "Would you be interested in picking up food donations to keep the shelves of our food pantry filled?",
		        "volunteersNeeded": 5,
		        "nonprofit": {
		            "name": "Urban Ministries of Wake County"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/7"
		        }
		    },
		    {
		        "id": "8",
		        "title": "3rd Wednesday of each month Driver",
		        "abstract": "North Raleigh Ministry picks up food from grocery stores each week. We are in need of a driver for the 3rd Wednesday of each month.",
		        "volunteersNeeded": 10,
		        "nonprofit": {
		            "name": "North Raleigh Ministries"
		        },
		        "image": {
		            "url": "http://lorempixel.com/600/400/people/8"
		        }
		    }
		]
	}
}