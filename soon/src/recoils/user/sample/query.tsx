import { useQuery } from "react-query"
import { sampleAxios } from "./axios"

const options = {
    refetchOnWindowFocus:false,
    retry: 0,
    onSuccess: ({ data }: any) => {
        //api 호출 성
        console.log("onSuccess >>", data)
    },
    onError: (error: any) => {
        //api 호출 실패
        console.log("onError >>", error.message)
    },

}

export const sampleQuery = () => {
    const { isLoading, isError, data, error } = useQuery(
        "sampleQuery",
        sampleAxios,
        options
    )
    return {isLoading, isError, data:data?.data, error}
}