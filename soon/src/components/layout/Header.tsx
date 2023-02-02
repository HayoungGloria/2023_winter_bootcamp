import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate()
  return (
    <Box>
      <Stack direction={"row"} justifyContent="space-between"> 
        <Stack direction={"row"} spacing={2}> 
          <Box>Logo</Box>
         
          <Box onClick={() => navigate("/")}>홈</Box>
          <Box onClick={() => navigate("/campus")}>캠퍼스 지체들</Box>
          <Box onClick={() => navigate("/admin")}>관리자</Box>
        
        </Stack>
        <Box>User</Box>
      </Stack>
    </Box>
  );
}

