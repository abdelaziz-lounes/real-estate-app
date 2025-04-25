import React from 'react';
import { Amplify } from 'aws-amplify';

import {  Authenticator,
    Heading,
    Radio,
    RadioGroupField,
    useAuthenticator,
    View, } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
        },
},});

const Auth = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthenticator((context) => [context.user]);
    // const router = useRouter();
    // const pathname = usePathname();
  
    // const isAuthPage = pathname.match(/^\/(signin|signup)$/);
    // const isDashboardPage =
    //   pathname.startsWith("/manager") || pathname.startsWith("/tenants");
  
    // // Redirect authenticated users away from auth pages
    // useEffect(() => {
    //   if (user && isAuthPage) {
    //     router.push("/");
    //   }
    // }, [user, isAuthPage, router]);
  
    // // Allow access to public pages without authentication
    // if (!isAuthPage && !isDashboardPage) {
    //   return <>{children}</>;
    // }
  
    return (
      <div className="h-full">
        <Authenticator
        //   initialState={pathname.includes("signup") ? "signUp" : "signIn"}
        //   components={components}
        //   formFields={formFields}
        >
          {() => <>{children}</>}
        </Authenticator>
      </div>
    );
  };
  
  export default Auth;