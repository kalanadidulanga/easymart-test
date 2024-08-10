import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../myComponents/button'
import MyLogo from '../myComponents/MyLogo'

const SignUp = ({onSwitch}) => {
    return (
        <div className='flex flex-col border shadow-xl p-5 lg:p-10 rounded-3xl w-full max-w-[550px] items-center gap-5'>
            {/* <img src="/assets/images/logos/logo.png" alt="EzyMart" width={"170px"} className=' object-cover' /> */}
            <MyLogo/>

            <div className=' w-full flex flex-col gap-2 lg:gap-4 items-center'>
                <h3 className=' font-bold text-3xl lg:text-4xl text-center'>Create an Account</h3>
                <p className=' text-sm text-muted-foreground text-center font-semibold'>Fill your all details and continue.</p>
            </div>

            <form name='form' action="" onSubmit={(e) => e.preventDefault()} className=' flex flex-col w-full gap-3'>
                <div className=' w-full'>
                    <Label htmlFor="shopName" className='text-md'>Shop Name</Label>
                    <Input type="text" name="shopName" id="emashopNameil" placeholder="Enter Shop Name" className=' mt-1' />
                </div>
                <div className=' w-full'>
                    <Label htmlFor="category" className='text-md'>Category</Label>
                    <Input type="text" name="category" id="category" placeholder="Select Shop Category" className=' mt-1' />
                </div>
                <div className=' w-full'>
                    <Label htmlFor="email" className='text-md'>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" className=' mt-1' />
                </div>
                <div className=' w-full'>
                    <Label htmlFor="mobile" className='text-md'>mobile</Label>
                    <Input type="number" name="mobile" id="mobile" placeholder="Mobile" className=' mt-1' />
                </div>
                <div className=' w-full'>
                    <Label htmlFor="password" className='text-md'>Password</Label>
                    <Input type="password" name="password" id="password" placeholder="************" className=' mt-1' />
                </div>
                <div className=' w-full'>
                    <Label htmlFor="confirmPass" className='text-md'>Confirm Password</Label>
                    <Input type="password" name="confirmPass" id="confirmPass" placeholder="************" className=' mt-1' />
                </div>

                <div className=' w-full flex items-center'>
                    <Checkbox id="acceptTerms" />
                    <Label htmlFor="acceptTerms" className="ml-2">
                        Accept terms and conditions
                    </Label>
                </div>

                <div className=' w-full flex gap-2 mt-5'>
                    <Button variant="secondary" size="full">Back To Home</Button>
                    <Button size="full" type="submit">Create Account</Button>
                </div>
            </form>

            <p className=''>Already have an Account ? <span className=' text-primary cursor-pointer' onClick={onSwitch}>Sign In</span></p>
        </div>
    )
}

export default SignUp