import { Box } from "@mui/material";
import { Stack } from "@mui/system";

export default function Campus() {
  const campusUsers = [
    [
      { sid: "23", name: "김추천", campus: "추천대학교", major: "경영학과" },
      {
        sid: "23",
        name: "이수정",
        campus: "숭실대학교",
        major: "역사교육학과",
      },
      { sid: "23", name: "박나물", campus: "산속대학교", major: "농업학과" },
    ],
    [
      { sid: "22", name: "최추천", campus: "추천대학교", major: "경영학과" },
      {
        sid: "22",
        name: "이수정",
        campus: "숭실대학교",
        major: "역사교육학과",
      },
      { sid: "22", name: "시장나물", campus: "산속대학교", major: "농업학과" },
    ],
    [
      { sid: "21", name: "비추천", campus: "추천대학교", major: "경영학과" },
      {
        sid: "21",
        name: "오수정",
        campus: "한국대학교",
        major: "교육학과",
      },
      { sid: "21", name: "옹달샘", campus: "산속대학교", major: "수영학과" },
    ],
  ];


  

  return(
    <Box>
      {campusUsers.map((group, index) => {
        return(
          <Box key={index}>
            <Box>{group[0].sid} 학번</Box>
            <Stack direction={"row"} spacing={1}>
              {group.map((user, index) => {
                return <Card key={index} index={index} data={user} />
              })}
            </Stack>
          </Box>
        )
      })}
    </Box>
  )

}


type User = {
  sid: string
  name : string 
  campus : string
  major : string

}

function Card({data, index}: {data:User; index: number}){
  return(
    <Box>
      <Box>{index+1}번째 C맨</Box>
      <Box>{data.name}</Box>
      <Box>{data.campus} {data.major}</Box>
    </Box>
  )
}



