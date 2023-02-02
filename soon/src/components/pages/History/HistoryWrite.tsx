import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import{
    Box,
    TextField,
    Select,
    MenuItem,
    Button,
    SelectChangeEvent,
    Checkbox,
    ListItemText
} from "@mui/material"

// import { styles 


export default function HistoryWrite(){
    const navigate = useNavigate()
    const {historyid} = useParams()
    historyid ? console.log("history id >> ", historyid) : ""
    const { register, handleSubmit} = useForm<formData>()
    const [userList,setUserList] = useState<object[]>([])
    const [selected, setSelected] = useState<string[]>([])
    const handleReceive = (event: SelectChangeEvent<never[]>) => {
        const value = event.target.value as string
        console.log("change.value >> ", value)
        setSelected(typeof value === "string" ? value.split(",") : value)
    }

    const writeHistory: SubmitHandler<formData> = async (params: formData) => {
        params.list = selected
        console.log("params >> ", params)
        const result = await axios.post('/history', params)
        if (result){
            navigate("/")
        }
        
        else{
            console.log("SERVER에서 응답하지 않습니다.")
        }
        return
    }

    type formData = {
        soonjang : string
        category : string
        progress : string
        date : string
        contents : string
        prayer_title : string
        list: string[]  
    }

    useEffect(() => {
        userListFunc()
    }, [])
    const userListFunc = () => {
        setUserList([
            { userid: "1", name: "김이박"},
            { userid: "2", name: "최장정"},
            { userid: "3", name: "조추현"},
        ])
    }

    return(
        <Box component="form" 
        onSubmit={handleSubmit(writeHistory)}>
            <Box>순모임 히스토리 기록</Box>
            <Box>해준 사람<TextField {...register("soonjang")}/></Box>
            <Box>분류<TextField {...register("category")}/></Box>
            <Box>진도<TextField {...register("progress")}/></Box>
            
            <Box>받은 사람<Select 
            value={selected as never}
            fullWidth 
            multiple
            onChange={handleReceive}
            renderValue={(selected) => selected.join(", ")}>

                {userList.map((user: any, index: number) => (
                    <MenuItem key={index} value={user.name}>
                        <Checkbox
                        checked={selected.indexOf(user.name.toString()) > -1}
                        />
                        <ListItemText primary={user.name}/>
                    </MenuItem>
                ))}
                </Select></Box>

            <Box>날짜<TextField {...register("date")}/></Box>
            <Box>내용</Box>
            <Box ><TextField multiline rows={4} {...register("contents")} /></Box>
            <Box>기도제목</Box>
            <Box><TextField {...register("prayer_title")}/></Box>
            <Box><Button type="submit">저장</Button></Box>
        </Box>
    )

}