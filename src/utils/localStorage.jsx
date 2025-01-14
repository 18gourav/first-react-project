const employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "taskNo": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Complete Onboarding",
                "taskDescription": "Finish the company onboarding program.",
                "taskDate": "2024-12-28",
                "category": "HR",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Submit Timesheet",
                "taskDescription": "Submit the weekly timesheet for payroll.",
                "taskDate": "2024-12-29",
                "category": "Admin",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Attend Meeting",
                "taskDescription": "Participate in the quarterly project review meeting.",
                "taskDate": "2024-12-30",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Vihaan",
        "email": "employee2@example.com",
        "password": "123",
        "taskNo": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Update Client Records",
                "taskDescription": "Update all client details in the CRM.",
                "taskDate": "2024-12-28",
                "category": "CRM",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile sales data for the monthly report.",
                "taskDate": "2024-12-29",
                "category": "Sales",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Fix Issue #456",
                "taskDescription": "Debug and fix issue #456 reported by QA.",
                "taskDate": "2024-12-30",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Ananya",
        "email": "employee3@example.com",
        "password": "123",
        "taskNo": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Inventory Audit",
                "taskDescription": "Conduct an inventory audit of all assets.",
                "taskDate": "2024-12-28",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Draft Email Campaign",
                "taskDescription": "Create the draft for the upcoming email campaign.",
                "taskDate": "2024-12-29",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Training",
                "taskDescription": "Train new team members on company processes.",
                "taskDate": "2024-12-30",
                "category": "Training",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Riya",
        "email": "employee4@example.com",
        "password": "123",
        "taskNo": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Website Update",
                "taskDescription": "Update website homepage with new graphics.",
                "taskDate": "2024-12-28",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Schedule Maintenance",
                "taskDescription": "Coordinate server maintenance schedule.",
                "taskDate": "2024-12-29",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Expense Report",
                "taskDescription": "Submit monthly expense report.",
                "taskDate": "2024-12-30",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Aryan",
        "email": "employee5@example.com",
        "password": "123",
        "taskNo": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Create Presentation",
                "taskDescription": "Prepare slides for the annual strategy meeting.",
                "taskDate": "2024-12-28",
                "category": "Strategy",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Data Backup",
                "taskDescription": "Ensure all critical data is backed up.",
                "taskDate": "2024-12-29",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Customer Feedback",
                "taskDescription": "Analyze customer feedback from the last quarter.",
                "taskDate": "2024-12-30",
                "category": "Customer Service",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
  ];
  
    const admin = {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
    
   export const setLocalStorage = () => {
       localStorage.setItem('employees', JSON.stringify(employees))
       localStorage.setItem('admin', JSON.stringify(admin))
   }
  
   export const getLocalStorage = () => {
        JSON.parse(localStorage.getItem("employees"))
        JSON.parse(localStorage.getItem("admin"))
  
        return{employees,admin} 
   }