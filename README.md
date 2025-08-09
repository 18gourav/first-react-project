# Task Management System

A modern React-based task management application that allows administrators to manage tasks and employees to track their assigned work. Built with React, Vite, and Tailwind CSS.

## 🎥 Demo

- [Watch Demo Video](https://drive.google.com/file/d/1_0voNNs7EvEwrSMnU75wvDQs3_6LbxXT/view?usp=sharing)

## 🚀 Features

### Admin Dashboard
- **Task Overview**: View comprehensive statistics of all tasks across the organization
- **Employee Management**: Monitor employee task assignments and performance
- **Task Distribution**: Assign new tasks to employees
- **Real-time Updates**: Track task progress and completion status

### Employee Dashboard
- **Personal Task View**: See all assigned tasks with different statuses
- **Task Management**: Accept new tasks, mark tasks as complete, or report failures
- **Task Categories**: Organized view of tasks by different categories (HR, Admin, Development, etc.)
- **Progress Tracking**: Monitor personal task completion statistics

### Task Status Types
- **New Tasks**: Newly assigned tasks awaiting acceptance
- **Active Tasks**: Currently in progress
- **Completed Tasks**: Successfully finished tasks
- **Failed Tasks**: Tasks that couldn't be completed

## 🛠 Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 4.3.4
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router DOM 7.1.1
- **HTTP Client**: Axios 1.7.9
- **State Management**: React Context API
- **Local Storage**: Custom localStorage utilities
- **Linting**: ESLint with React-specific rules
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── Login.jsx              # User authentication component
│   └── dashboard/
│       ├── Admindashboard.jsx     # Admin dashboard interface
│       └── Emplydashboard.jsx     # Employee dashboard interface
├── tasklist/
│   ├── AcceptTask.jsx             # Task acceptance component
│   ├── CompleteTask.jsx           # Task completion component
│   ├── FailedTask.jsx             # Failed task management
│   └── NewTask.jsx                # New task display component
├── utils/
│   └── localStorage.jsx           # Local storage management utilities
├── context/
│   └── Authprovider.jsx          # Authentication context provider
├── assets/                        # Static assets
├── App.jsx                        # Main application component
├── main.jsx                       # Application entry point
└── index.css                      # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/18gourav/first-react-project.git
   cd first-react-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run predeploy` | Pre-deployment build script |

## 🔐 Authentication

The application includes a role-based authentication system:

### Admin Login
- **Email**: `admin@example.com`
- **Password**: `123`
- **Access**: Full system administration capabilities

### Employee Login
Multiple employee accounts are available with different task assignments:
- **Email**: `employee1@example.com` - `employee5@example.com`
- **Password**: `123`
- **Access**: Personal task management interface

## 💾 Data Management

### Local Storage Structure
The application uses browser localStorage to persist data:

```javascript
{
  employees: [
    {
      id: number,
      firstname: string,
      email: string,
      password: string,
      taskNo: {
        active: number,
        newTask: number,
        completed: number,
        failed: number
      },
      tasks: [
        {
          taskTitle: string,
          taskDescription: string,
          taskDate: string,
          category: string,
          active: boolean,
          newTask: boolean,
          completed: boolean,
          failed: boolean
        }
      ]
    }
  ],
  admin: {
    // Admin data structure
  }
}
```

### Context API
- **AuthContext**: Manages user authentication state and user data
- **Global State**: Handles task updates and user information across components

## 🎨 UI/UX Features

- **Responsive Design**: Fully responsive interface using Tailwind CSS
- **Modern Styling**: Clean, professional design with proper color coding
- **Interactive Elements**: Hover effects, button states, and smooth transitions
- **Status Indicators**: Color-coded task statuses for easy identification
- **Real-time Updates**: Immediate reflection of task status changes

## 🔄 Task Workflow

1. **Admin assigns tasks** → Creates new tasks for employees
2. **Employee receives notification** → New tasks appear in employee dashboard
3. **Employee accepts task** → Task moves from "New" to "Active" status
4. **Employee works on task** → Task remains in "Active" status
5. **Task completion** → Employee marks task as "Complete" or "Failed"
6. **Admin monitors progress** → Real-time updates visible in admin dashboard

## 🌐 Deployment

The application is configured for deployment on GitHub Pages:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

3. **Access the live application**
   Visit: `https://18gourav.github.io/first-react-project`

## 🔍 Development Notes

### Fast Refresh
- Uses `@vitejs/plugin-react` for Fast Refresh during development
- Hot Module Replacement (HMR) enabled for rapid development

### Code Quality
- ESLint configuration with React-specific rules
- PropTypes validation for component props
- Consistent code formatting and best practices

### Browser Compatibility
- Modern browser support (ES6+)
- Responsive design for mobile and desktop
- Local storage fallback handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Gourav** - [GitHub Profile](https://github.com/18gourav)

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

---

**Note**: This is a learning project demonstrating React concepts including Context API, Local Storage management, Component composition, and modern React patterns.
