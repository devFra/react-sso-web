import { createContext, useState, useEffect } from "react";
import { Auth } from 'aws-amplify';


const AuthContext = createContext(null);

export function Authenticator({ children }) {
  const auth = useAuthentication();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthentication(){
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (isLoading) {
        try{
          await getUser();
        }catch( err ){ }
        setIsLoading(false);
      }
    }
    load();
  }, [isLoading]);

  function getUser(){
    return Auth.currentSession()
      .then((session) => {
        const { idToken } = session;

        // Define your user schema per your needs
        const user = {
          email: idToken.payload.email,
          username: idToken.payload["cognito:username"],
          userId: idToken.payload.sub,
          groups: idToken.payload["cognito:groups"],
        };

        setUser(user);


        return user;
      })
  }



  const signOut = async () => {
    return Auth.signOut().then(() => {
      setUser(null);
    });
  };

  const signIn = async (
    email,
    password
  ) => {
    try {
      await Auth.signIn({
        username: email,
        password,
      });
      const newUser = await getUser();
      return newUser;

    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const signInFederated = async (provider) => {
    Auth.federatedSignIn({
      provider,
    });
  };


  return {
    isLoading,
    user,
    signOut,
    signIn,
    signInFederated
  };
}