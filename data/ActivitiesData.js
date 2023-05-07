class ActivitiesData { 

 postDataActivities = {
    id: 0,
    title: "string",
    dueDate: "2023-04-28T07:19:21.534Z",
    completed: true
    };

putDataActivities = {
    title: "Changed Title"
}

 putDataActivitiesCheck = {
    id: 0,
    title: "Changed Title",
    dueDate: "0001-01-01T00:00:00",
    completed: false
  }   

}

module.exports = new ActivitiesData;