import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function Instructor() {
    const { user } = useSelector((state) => state.profile)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        ; (async () => {
            setLoading(true)
            //   const instructorApiData = await getInstructorData(token)
            //   const result = await fetchInstructorCourses(token)
            //   console.log(instructorApiData)
            //   if (instructorApiData.length) setInstructorData(instructorApiData)
            //   if (result) {
            //     setCourses(result)
            //   }
            //   setLoading(false)
        })()
    }, [])


    return (
        <div>
            <div className="space-y-2">
                <h1 className="text-2xl font-bold text-richblack-5">
                    Hi {user?.firstName} 👋
                </h1>
                <p className="font-medium text-richblack-200">
                    Let's start something new
                </p>
            </div>
      
      
        </div>
    )
}
