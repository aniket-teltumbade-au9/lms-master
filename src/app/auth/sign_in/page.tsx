import SignInComponent from '@/components/SignIn'
import { Suspense } from 'react'

function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInComponent />
    </Suspense>
  )
}

export default SignIn