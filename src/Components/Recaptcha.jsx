
// import axios from 'axios';
// import React, { useRef } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";

// export const Recaptcha = () => {
//   const recaptchaRef = useRef(null)

//   const handleSubmit = async () => {
    
//     const captchaToken = await recaptchaRef.current.executeAsync();
//     recaptchaRef.current.reset();
    
//     // Pass this token to your server for validation...
    
//     // Sample
//     const res = await axios.post(
//       "https://recaptchaenterprise.googleapis.com",
//       { 
//         fromData,
//         captchaToken
//       }
//     );
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <ReCAPTCHA
//           ref={recaptchaRef}
//           sitekey={"AIzaSyD96nKZNSpqrEdjlnGozNtNxauHkcEA-Ps"}
//           size="invisible"
//         />
//       </form>
//     </div>
//   );
// };