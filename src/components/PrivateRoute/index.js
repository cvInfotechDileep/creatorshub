// "use client"

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const token = localStorage.getItem('token');
//       const userType = localStorage.getItem('user_type');

//       if (!token) {
//         router.push('/signin');
//         return;
//       }

//       if (!allowedRoles.includes(userType)) {
//         router.push('/permission-denied');
//         return;
//       }

//       setLoading(false); // Allow access and stop loading
//     }
//   }, [router, allowedRoles]);

//   if (loading) {
//     return <div>Loading...</div>; // Loading indicator
//   }

//   return (<div className='my-5' style={{background:"#edf0f2"}}>{children}</div>);
// };

// export default PrivateRoute;

"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children, allowedRoles }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if the code is running on the client-side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const userType = localStorage.getItem('user_type');

      // If no token is found, redirect to the sign-in page
      if (!token) {
        router.push('/signin');
        return;
      }

      // If the user type is not allowed, redirect to a permission denied page
      if (!allowedRoles.includes(userType)) {
        router.push('/permission-denied');
        return;
      }

      // If all checks pass, set loading to false
      setLoading(false);
    }
  }, [router, allowedRoles]);

  // Show a loading indicator while checking authentication and authorization
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the children components once loading is complete and the user is authenticated
  return <div className='py-5' style={{ background: "#edf0f2" }}>{children}</div>;
};

export default PrivateRoute;
