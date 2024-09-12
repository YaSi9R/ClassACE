import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://facial-attendance-system-a6183-default-rtdb.firebaseio.com/'
})

ref = db.reference('Students')

data = {
    "321654":
        {
            "name": "Murtaza Hassan",
            "major": "Robotics",
            "starting_year": 2017,
            "total_attendance": 3,
            "standing": "G",
            "year": 4,
            "last_attendance_time": "2024-07-10 00:54:34"
        },
    "600000":
        {
            "name": "Shantanu Mamgain",
            "major": "Cybersecurity",
            "starting_year": 2018,
            "total_attendance": 4,
            "standing": "F",
            "year": 4,
            "last_attendance_time": "2024-07-10 00:54:34"
        },
    "852741":
        {
            "name": "Emily Blunt",
            "major": "Economics",
            "starting_year": 2021,
            "total_attendance": 1,
            "standing": "B",
            "year": 1,
            "last_attendance_time": "2024-07-11 00:54:34"
        },
    "963852":
        {
            "name": "Elon Musk",
            "major": "Physics",
            "starting_year": 2020,
            "total_attendance": 1,
            "standing": "G",
            "year": 2,
            "last_attendance_time": "2024-07-09 00:54:34"
        }
}

for key, value in data.items():
    ref.child(key).set(value)