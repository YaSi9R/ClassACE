import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },


// Instructor tabs
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Notice",
    path: "/dashboard/notice",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscLightbulbSparkle ",
  },
  {
    id: 4,
    name: "Attendance",
    path: "/dashboard/attendance",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscPass",
  },
  {
    id: 50,
    name: "Classes",
    path: "/dashboard/classes",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscMortarBoard",
  },
  {
    id: 41,
    name: "Notes",
    path: "/dashboard/notes",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscRepoClone",
  },
  {
    id: 42,
    name: "Reports/Marks",
    path: "/dashboard/marks",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscSaveAll",
  },
  {
    id: 43,
    name: "TimeTable",
    path: "/dashboard/timetable",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscTable",
  },
  {
    id: 44,
    name: "Chatbot",
    path: "/dashboard/chatbot",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscHubot",
  },
  {
    id: 45,
    name: "Doubt's",
    path: "/dashboard/doubts",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscCopilot",
  },
  {
    id: 46,
    name: "Help",
    path: "/dashboard/help",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscPersonAdd",
  },


  // Students tabs
  {
    id: 5,
    name: "Attendance",
    path: "/dashboard/attendance",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscTasklist",
  },
  {
    id: 14,
    name: "TimeTable",
    path: "/dashboard/timetable",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscListFlat",
  },
  {
    id: 18,
    name: "My Notes",
    path: "/dashboard/notes",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscNotebook",
  },

  {
    id: 7,
    name: "ChatBot",
    path: "/dashboard/chatbot",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHubot",
  },
 

  ////////
  {
    id: 9,
    name: "Raise Query",
    path: "/dashboard/raisequery",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscEdit",
  },
  {
    id: 10,
    name: "Mentor",
    path: "/dashboard/mentor",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscVr",
  },
  {
    id: 11,
    name: "Courses",
    path: "/dashboard/courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscNewFolder",
  },
  {
    id: 12,
    name: "Fees",
    path: "/dashboard/fees",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscReferences",
  },
  {
    id: 13,
    name: "Result",
    path: "/dashboard/result",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscOutput",
  },
  {
    id: 15,
    name: "My Teachers",
    path: "/dashboard/teachers",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscCopilot",
  },
  {
    id: 16,
    name: "My Coins",
    path: "/dashboard/coins",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHeartFilled",
  },
  {
    id: 17,
    name: "Messages",
    path: "/dashboard/messages",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscBellDot",
  },


  // Mentors TABS
  {
    id: 8,
    name: "Today's Session",
    path: "/dashboard/sessions",
    type: ACCOUNT_TYPE.MENTOR,
    icon: "VscArchive",
  },
  
]
