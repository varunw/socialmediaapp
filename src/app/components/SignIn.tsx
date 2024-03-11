
import Link from 'next/link'
import { Icons } from './Icons'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <main className=''>
      <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] border-2 border-black">
        <div className="flex flex-col space-y-2 text-center items-center">
          <p className="text-black text-xl font-bold">ClickX</p>{" "}
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm max-w-xs mx-auto">
            By continuing, you are setting up a socialmedia account and agree to
            our User Agreement and Privacy Policy.
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          New to clickX?{" "}
          <Link
            href="/sign-up"
            className="hover:text-brand text-sm underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default SignIn