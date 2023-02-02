import Loading from "@loading/Loading";
import { Box, Stack } from "@mui/material";
import { sampleQuery } from "@recoils/user/sample/query";
import Error from "components/error/Error";

export default function Home() {
  const { isLoading, isError, data, error} = sampleQuery()
  if(isLoading){ 
    //
    return <Loading/>
  }
  if(isError){
    //
    return <Error error={error}/>
  }
 
  const {products} = data
  type product = {
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  };

  return (
    <Box>
      <Box>
        <Box>Left Panel</Box>
        <Box>Right Panel</Box>
      </Box>

      <Box sx={{display:"flex", flexDirection: "column", gap:"20px"}}>
        {products.map((product: product, index: number) => {
          return(
            <Box key={index}>
              <Box>Brand : {product.brand}</Box> 
              <Box>category : {product.category}</Box>
              <Box>title : {product.title}</Box>
              <Box>
                <Box component="img" src={product.thumbnail}/>
              </Box>
              <Box>${product.price}</Box>
              </Box>

          )
        })}
      </Box>
    </Box>
  );
}



// left panel
function LeftPanel() {
  return (
    <Box>
      <Box>샬롬</Box>
      <Box>카토니는 블라블라 블링블링 블러블러</Box>
    </Box>
  );
}

// right panel
function RightPanel() {
  return (
    <Box>
      <Box></Box>
    </Box>
  );
}
