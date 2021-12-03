Table headers - 

Gardener(Emp_ID, Name, Phone)

Area(Area Code, Area Name)

Assignment(Assign_ID, Type of Service)

Equipment(Equip_ID, Name, Last maintenance date, next maintenance date, 
          Fuel / hr, Cost / hr, Status)

Roster(DR_Job_ID, Date, Shift start time, Shift end time, Emp_ID)

Request(Request_ID, Webmail, reqareacode, Type of Service)

Gardener_Area(Emp_ID, Start Date, End Date, Area Code)

Gardener_Request_Roster(Emp_ID, Request_ID, DR_Job_ID)

Roster_Assignment(DR_Job_ID, Assign_ID)

Roster_Equipment(DR_Job_ID, Equip_ID)

Note: Verify table names from LandscapingControllers.js in './app/Controllers'
'