import signupImg from "../assets/Images/signup.webp"
import Template from "../components/Core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions learning"
      description1="Ignite your child's curiosity. Fun and engaging tech learning."
      description2="Level up your tech skills. Play, learn, grow."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
