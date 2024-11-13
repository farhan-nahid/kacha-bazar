import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import initializeAuthentication from '../Pages/AuthPage/Firebase/firebase.init';

const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  initializeAuthentication();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const auth = getAuth();

  // google signIn/signUp function

  const googleSignIn = (navigate, location) => {
    setIsDisable(true);
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        toast.success('Logged in successfully...');
        setLoggedInUser(userCredential.user);
        saveUserForOthers(userCredential.user.email, userCredential.user.displayName);
        const redirect_URI = location.state?.from || '/';
        navigate(redirect_URI);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setIsDisable(false);
        setIsLoading(false);
      });
  };

  // gitHub signIn/signUp function

  const gitHubSignIn = (navigate, location) => {
    setIsDisable(true);
    signInWithPopup(auth, gitHubProvider)
      .then((userCredential) => {
        toast.success('Logged in successfully...');
        setLoggedInUser(userCredential.user);
        saveUserForOthers(userCredential.user.email, userCredential.user.displayName);
        const redirect_URI = location.state?.from || '/';
        navigate(redirect_URI);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => {
        setIsDisable(false);
        setIsLoading(false);
      });
  };

  // email password signUp function

  const emailSignup = (name, email, password, navigate) => {
    setIsDisable(true);
    const loading = toast.loading('Creating User... Please wait!!!');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          photoURL: 'https://i.ibb.co/7CzR0Dg/users.jpg',
          displayName: name,
        });
        saveUserForEmail(email, name);
        toast.dismiss(loading);
        toast.success('Creating a new user successfully...');
        setLoggedInUser(userCredential.user);
        navigate('/');
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      })
      .finally(() => {
        setIsDisable(false);
        setIsLoading(false);
      });
  };

  // email password signIn function

  const emailSignIn = (email, password, navigate, location, e) => {
    setIsDisable(true);
    const loading = toast.loading('Finding Account... Please wait!!!');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.dismiss(loading);
        toast.success('logged in successfully...');
        setLoggedInUser(userCredential.user);
        e.target.reset();
        const redirect_URI = location.state?.from || '/';
        navigate(redirect_URI);
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      })
      .finally(() => {
        setIsDisable(false);
        setIsLoading(false);
      });
  };

  // save user to mongoDB (Email)

  const saveUserForEmail = (email, displayName) => {
    setIsDisable(true);
    const user = { email, displayName };
    axios
      .post('https://kacha--bazar.vercel.app/user', user)
      .then((res) => {
        if (res.data.upsertedId) {
          toast.success('User Added in our Database Successfully!');
        }
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsDisable(false));
  };

  // save user to mongoDB (Gmail, GitHub)

  const saveUserForOthers = (email, displayName) => {
    setIsDisable(true);
    const user = { email, displayName };
    axios
      .put('https://kacha--bazar.vercel.app/user', user)
      .then((res) => {
        if (res.data.upsertedId) {
          toast.success('User Added in our Database Successfully!');
        }
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsDisable(false));
  };

  // Reset Password Function

  const resetPassword = (email, e) => {
    setIsDisable(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Check your gmail inbox. We send an verification email');
        e.target.reset();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => {
        setIsDisable(false);
        setIsLoading(false);
      });
  };

  // signOut function

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedInUser(null);
        toast.error('Logged Out!!!');
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));
  };

  // observe user state change

  useEffect(() => {
    const unSubscrived = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user);
        getIdToken(user).then((idToken) => {
          localStorage.setItem('kacha_bazar_token', idToken);
        });
      }
      setIsLoading(false);
    });
    return () => unSubscrived;
  }, [auth]);

  // Check Admin or not

  useEffect(() => {
    axios
      .get(`https://kacha--bazar.vercel.app/user/${loggedInUser?.email}`)
      .then((res) => setIsAdmin(res.data.admin))
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  }, [loggedInUser?.email]);

  return {
    isLoading,
    loggedInUser,
    isAdmin,
    isDisable,
    googleSignIn,
    gitHubSignIn,
    emailSignup,
    emailSignIn,
    resetPassword,
    logOut,
  };
};

export default useFirebase;
