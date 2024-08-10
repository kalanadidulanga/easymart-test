import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../myComponents/button'
import MyLogo from '../myComponents/MyLogo'

const SignIn = ({onSwitch}) => {
    return (
        <div className='flex flex-col border shadow-xl p-5 lg:p-10 rounded-3xl w-full max-w-[550px] items-center gap-5'>
            {/* <img src="/assets/images/logos/logo.png" alt="EzyMart" width={"170px"} className=' object-cover' /> */}
            <MyLogo/>

            <div className=' w-full flex flex-col gap-2 lg:gap-4 items-center'>
                <h3 className=' font-bold text-3xl lg:text-4xl text-center'>Login To Your Account</h3>
                <p className=' text-sm text-muted-foreground text-center font-semibold'>Enter your email and password to continue.</p>
            </div>

            <form name='form' action="" onSubmit={(e) => e.preventDefault()} className=' flex flex-col w-full gap-3'>
                <div className=' w-full'>
                    <Label htmlFor="email" className='text-md'>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" className=' mt-1' />
                </div>
                <div className=' w-full'>
                    <Label htmlFor="password" className='text-md'>Password</Label>
                    <Input type="password" name="password" id="password" placeholder="************" className=' mt-1' />
                </div>

                <div className=' w-full flex items-center'>
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="ml-2">
                        Remember me
                    </Label>
                </div>

                <div className=' w-full flex gap-2 mt-5'>
                    <Button variant="secondary" size="full">Back To Home</Button>
                    <Button size="full" type="submit">SignIn</Button>
                </div>
            </form>

            <p className=''>New to EzyMart ? <span className=' text-primary cursor-pointer' onClick={onSwitch}>Register Now</span></p>
        </div>
    )
}

export default SignIn